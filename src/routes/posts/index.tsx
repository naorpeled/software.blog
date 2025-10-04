import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BlogCard } from "~/components/blog-card/BlogCard";
import { getAllPosts } from "~/content/posts";

export default component$(() => {
  const posts = getAllPosts();

  return (
    <div class="bg-gray-50 py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div class="mb-12">
          <h1 class="mb-4 text-4xl font-bold text-gray-900">All Posts</h1>
          <p class="text-lg text-gray-600">
            Explore all our articles on software engineering, best practices,
            and technology insights.
          </p>
          <div class="mt-4 text-sm text-gray-500">
            {posts.length} {posts.length === 1 ? "post" : "posts"} available
          </div>
        </div>

        {/* Posts Grid */}
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div class="py-12 text-center">
            <p class="text-gray-600">
              No posts available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "All Posts - software.blog",
  meta: [
    {
      name: "description",
      content:
        "Browse all software engineering articles, tutorials, and insights on software.blog.",
    },
  ],
};
