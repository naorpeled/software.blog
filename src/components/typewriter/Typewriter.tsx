import {
  component$,
  useSignal,
  useVisibleTask$,
  useComputed$,
} from "@builder.io/qwik";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  class?: string;
}

export const Typewriter = component$<TypewriterProps>(
  ({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetweenWords = 2000,
    class: className = "",
  }) => {
    const displayText = useSignal("");
    const wordIndex = useSignal(Math.floor(Math.random() * words.length));
    const isDeleting = useSignal(false);
    const showCursor = useSignal(true);

    // Calculate the longest word to reserve space and prevent layout shift
    const maxWidth = useComputed$(() => {
      const longest = words.reduce((a, b) => (a.length > b.length ? a : b), "");
      return `${longest.length * 0.6}em`; // Approximate character width
    });

    // Main typing/deleting effect
    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ cleanup }) => {
      let timeout: ReturnType<typeof setTimeout>;

      const type = () => {
        const currentWord = words[wordIndex.value];

        if (isDeleting.value) {
          if (displayText.value === "") {
            isDeleting.value = false;
            // Pick a random word index, but avoid repeating the same word
            let newIndex;
            do {
              newIndex = Math.floor(Math.random() * words.length);
            } while (newIndex === wordIndex.value && words.length > 1);
            wordIndex.value = newIndex;
            timeout = setTimeout(type, 300);
          } else {
            displayText.value = currentWord.substring(
              0,
              displayText.value.length - 1,
            );
            timeout = setTimeout(type, deletingSpeed);
          }
        } else {
          if (displayText.value === currentWord) {
            timeout = setTimeout(() => {
              isDeleting.value = true;
              type();
            }, delayBetweenWords);
          } else {
            displayText.value = currentWord.substring(
              0,
              displayText.value.length + 1,
            );
            timeout = setTimeout(type, typingSpeed);
          }
        }
      };

      // Start typing after a short delay
      timeout = setTimeout(type, 500);

      cleanup(() => clearTimeout(timeout));
    });

    // Cursor blink effect
    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ cleanup }) => {
      const interval = setInterval(() => {
        showCursor.value = !showCursor.value;
      }, 530);

      cleanup(() => clearInterval(interval));
    });

    return (
      <span class={`inline ${className}`}>
        <span class="inline-block will-change-contents">
          {displayText.value || "\u00A0"}
        </span>
        <span
          class={`inline-block w-0.5 ${showCursor.value ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
          style={{ verticalAlign: "baseline" }}
        >
          |
        </span>
      </span>
    );
  },
);
