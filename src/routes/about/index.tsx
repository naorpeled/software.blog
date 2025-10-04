import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="bg-white py-12">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div class="mb-12 text-center">
          <h1 class="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About software<span class="text-blue-600">.blog</span>
          </h1>
          <p class="mx-auto max-w-2xl text-xl text-gray-600">
            Your trusted source for software engineering insights, tutorials,
            and best practices.
          </p>
        </div>

        {/* Mission Section */}
        <section class="mb-12">
          <h2 class="mb-4 text-2xl font-bold text-gray-900">Our Mission</h2>
          <p class="mb-4 text-gray-700">
            At software.blog, we're passionate about empowering developers at
            all skill levels. Our mission is to provide high-quality, practical
            content that helps you grow as a software engineer and stay current
            with the rapidly evolving technology landscape.
          </p>
          <p class="text-gray-700">
            We believe in learning through real-world examples, sharing
            experiences, and fostering a community of continuous improvement.
          </p>
        </section>

        {/* What We Cover */}
        <section class="mb-12">
          <h2 class="mb-6 text-2xl font-bold text-gray-900">What We Cover</h2>
          <div class="grid gap-6 md:grid-cols-2">
            <div class="rounded-lg border border-gray-200 p-6">
              <h3 class="mb-2 text-lg font-semibold text-gray-900">
                Web Development
              </h3>
              <p class="text-gray-600">
                Modern frameworks, best practices, and performance optimization
                techniques for building fast, scalable web applications.
              </p>
            </div>
            <div class="rounded-lg border border-gray-200 p-6">
              <h3 class="mb-2 text-lg font-semibold text-gray-900">
                Software Architecture
              </h3>
              <p class="text-gray-600">
                Design patterns, system design principles, and architectural
                decisions that lead to maintainable software.
              </p>
            </div>
            <div class="rounded-lg border border-gray-200 p-6">
              <h3 class="mb-2 text-lg font-semibold text-gray-900">
                Developer Tools
              </h3>
              <p class="text-gray-600">
                Reviews and guides for the latest developer tools, IDEs, and
                productivity boosters.
              </p>
            </div>
            <div class="rounded-lg border border-gray-200 p-6">
              <h3 class="mb-2 text-lg font-semibold text-gray-900">
                Career Growth
              </h3>
              <p class="text-gray-600">
                Tips for advancing your career, interviewing successfully, and
                becoming a better team player.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section class="mb-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
          <h2 class="mb-4 text-2xl font-bold text-gray-900">
            Built with Modern Tech
          </h2>
          <p class="mb-4 text-gray-700">
            This blog is built with cutting-edge technologies that we write
            about:
          </p>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="mr-2 text-blue-600">✓</span>
              <span class="text-gray-700">
                <strong>Qwik</strong> - Resumable framework for instant-loading
                web apps
              </span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-blue-600">✓</span>
              <span class="text-gray-700">
                <strong>Tailwind CSS v4</strong> - Modern utility-first CSS
              </span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-blue-600">✓</span>
              <span class="text-gray-700">
                <strong>TypeScript</strong> - Type-safe development
              </span>
            </li>
            <li class="flex items-start">
              <span class="mr-2 text-blue-600">✓</span>
              <span class="text-gray-700">
                <strong>Cloudflare Pages</strong> - Edge deployment for maximum
                performance
              </span>
            </li>
          </ul>
        </section>

        {/* Contact CTA */}
        <section class="text-center">
          <h2 class="mb-4 text-2xl font-bold text-gray-900">Stay Connected</h2>
          <p class="mb-6 text-gray-600">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <a
            href="mailto:hello@software.blog"
            class="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About - software.blog",
  meta: [
    {
      name: "description",
      content:
        "Learn about software.blog - your trusted source for software engineering insights, tutorials, and best practices.",
    },
  ],
};
