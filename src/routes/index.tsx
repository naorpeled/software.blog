import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { BlogCard } from "~/components/blog-card/BlogCard";
import { Typewriter } from "~/components/typewriter/Typewriter";
import { getFeaturedPosts, getAllPosts } from "~/content/posts";

export default component$(() => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getAllPosts().slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 sm:py-32">
        {/* Animated background elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-0 -left-4 h-72 w-72 animate-pulse rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
          <div
            class="absolute top-1/3 -right-4 h-72 w-72 animate-pulse rounded-full bg-purple-200 opacity-20 blur-3xl"
            style="animation-delay: 1s;"
          ></div>
          <div
            class="absolute bottom-0 left-1/3 h-72 w-72 animate-pulse rounded-full bg-indigo-200 opacity-20 blur-3xl"
            style="animation-delay: 2s;"
          ></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            {/* Main heading with typewriter */}
            <h1 class="mb-6 text-center text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl">
              <span class="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Learn about{" "}
              </span>
              <span class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <Typewriter
                  words={[
                    "Architecture",
                    "Infrastructure",
                    "System Design",
                    "Modern Web Dev",
                    "Cloud Computing",
                    "DevOps",
                    "Microservices",
                    "API Design",
                    "Performance",
                    "Scalability",
                    "Security",
                    "Testing",
                    "CI/CD",
                    "Containers",
                    "Kubernetes",
                    "Databases",
                    "Best Practices",
                    "Code Quality",
                  ]}
                  typingSpeed={70}
                  deletingSpeed={35}
                  delayBetweenWords={2000}
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p class="mx-auto mb-10 max-w-2xl text-xl text-gray-600 sm:text-2xl">
              Insights, tutorials, and best practices for{" "}
              <span class="font-semibold text-gray-900">
                modern software engineering
              </span>
              . Learn from real-world experiences.
            </p>

            {/* CTA Buttons */}
            <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/posts"
                class="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <span>Explore Posts</span>
                <svg
                  class="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                class="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white/80 px-8 py-4 font-semibold text-gray-700 backdrop-blur-sm transition-all hover:border-gray-400 hover:bg-white"
              >
                <span>About Us</span>
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
      <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20">
        <div class="bg-grid-white/[0.05] absolute inset-0 bg-[size:20px_20px]"></div>
        <div class="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span class="text-sm font-medium text-white">
              🚀 Start your journey today
            </span>
          </div>
          <h2 class="mt-6 mb-4 text-4xl font-bold text-white sm:text-5xl">
            Ready to level up your skills?
          </h2>
          <p class="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Join thousands of developers learning and growing together. Get
            access to in-depth tutorials, best practices, and real-world
            insights.
          </p>
          <Link
            href="/posts"
            class="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            <span>Start Reading</span>
            <svg
              class="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
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
