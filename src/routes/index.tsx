import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { BlogCard } from "~/components/blog-card/BlogCard";
import { getFeaturedPosts, getAllPosts } from "~/content/posts";

export default component$(() => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getAllPosts().slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="mb-6 text-5xl font-bold text-gray-900 sm:text-6xl">
              Welcome to <span class="text-blue-600">software.blog</span>
            </h1>
            <p class="mx-auto mb-8 max-w-2xl text-xl text-gray-700">
              Insights, tutorials, and best practices for modern software
              engineering. Learn from real-world experiences and stay ahead in
              the ever-evolving tech landscape.
            </p>
            <div class="flex justify-center gap-4">
              <Link
                href="/posts"
                class="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Explore Posts
              </Link>
              <Link
                href="/about"
                class="rounded-lg border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section class="bg-white py-16">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-12 flex items-center justify-between">
              <h2 class="text-3xl font-bold text-gray-900">Featured Posts</h2>
              <Link
                href="/posts"
                class="text-blue-600 transition-colors hover:text-blue-700"
              >
                View all →
              </Link>
            </div>
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section class="bg-gray-50 py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900">Recent Posts</h2>
            <p class="mt-2 text-gray-600">
              Stay up to date with the latest articles and tutorials
            </p>
          </div>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="bg-blue-600 py-16">
        <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="mb-4 text-3xl font-bold text-white">
            Ready to level up your skills?
          </h2>
          <p class="mb-8 text-xl text-blue-100">
            Join thousands of developers learning and growing together.
          </p>
          <Link
            href="/posts"
            class="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
          >
            Start Reading
          </Link>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "software.blog - Modern Software Engineering Insights",
  meta: [
    {
      name: "description",
      content:
        "Insights, tutorials, and best practices for modern software engineering. Learn from real-world experiences and stay ahead in tech.",
    },
    {
      property: "og:title",
      content: "software.blog - Modern Software Engineering Insights",
    },
    {
      property: "og:description",
      content:
        "Insights, tutorials, and best practices for modern software engineering.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
};
