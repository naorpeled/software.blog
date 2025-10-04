import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="border-t border-gray-200 bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 class="mb-4 text-lg font-bold text-gray-900">
              software<span class="text-blue-600">.blog</span>
            </h3>
            <p class="text-sm text-gray-600">
              Insights, tutorials, and best practices for modern software
              engineering.
            </p>
          </div>
          <div>
            <h4 class="mb-4 font-semibold text-gray-900">Quick Links</h4>
            <ul class="space-y-2">
              <li>
                <Link
                  href="/posts"
                  class="text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  All Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  class="text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 font-semibold text-gray-900">Connect</h4>
            <p class="text-sm text-gray-600">
              Stay updated with the latest in software engineering.
            </p>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-8 text-center">
          <p class="text-sm text-gray-600">
            © {currentYear} software.blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
