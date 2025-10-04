import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  return (
    <header class="border-b border-gray-200 bg-white">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <Link href="/" class="text-2xl font-bold text-gray-900">
              software<span class="text-blue-600">.blog</span>
            </Link>
          </div>
          <div class="flex items-center space-x-8">
            <Link
              href="/"
              class="text-gray-700 transition-colors hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/posts"
              class="text-gray-700 transition-colors hover:text-blue-600"
            >
              Posts
            </Link>
            <Link
              href="/about"
              class="text-gray-700 transition-colors hover:text-blue-600"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
});
