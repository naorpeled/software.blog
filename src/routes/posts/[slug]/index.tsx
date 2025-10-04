import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { getPostBySlug } from "~/content/posts";

export const usePostData = routeLoader$(async ({ params, status }) => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    status(404);
    return null;
  }

  return post;
});

export default component$(() => {
  const post = usePostData();

  if (!post.value) {
    return (
      <div class="bg-gray-50 py-20">
        <div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 class="mb-4 text-4xl font-bold text-gray-900">Post Not Found</h1>
          <p class="text-gray-600">
            The post you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const { title, description, date, author, tags, category, readingTime } =
    post.value;

  return (
    <article class="bg-white py-12">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <header class="mb-8">
          <div class="mb-4 flex items-center gap-3">
            <span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {category}
            </span>
            <span class="text-sm text-gray-500">{readingTime} min read</span>
          </div>
          <h1 class="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p class="mb-6 text-xl text-gray-600">{description}</p>
          <div class="flex items-center justify-between border-y border-gray-200 py-4">
            <div>
              <div class="font-medium text-gray-900">{author}</div>
              <time class="text-sm text-gray-500">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-700">
            This is a sample blog post. In a full implementation, you would load
            the actual content from Markdown files or a CMS.
          </p>
          <h2>Introduction</h2>
          <p class="text-gray-700">
            Welcome to this article about {title.toLowerCase()}. This content
            demonstrates the blog post layout and styling.
          </p>
          <h2>Key Takeaways</h2>
          <ul>
            <li>Modern web development practices</li>
            <li>Performance optimization techniques</li>
            <li>Best practices for scalable applications</li>
          </ul>
          <h2>Conclusion</h2>
          <p class="text-gray-700">
            Thank you for reading! Stay tuned for more insights and tutorials on
            software engineering.
          </p>
        </div>

        {/* Tags */}
        <div class="mt-8 border-t border-gray-200 pt-8">
          <div class="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const post = resolveValue(usePostData);

  if (!post) {
    return {
      title: "Post Not Found - software.blog",
    };
  }

  return {
    title: `${post.title} - software.blog`,
    meta: [
      {
        name: "description",
        content: post.description,
      },
      {
        property: "og:title",
        content: post.title,
      },
      {
        property: "og:description",
        content: post.description,
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "article:published_time",
        content: post.date,
      },
      {
        property: "article:author",
        content: post.author,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  };
};
