import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { BlogPost } from "~/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = component$<BlogCardProps>(({ post }) => {
  return (
    <article class="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {post.image && (
        <div class="aspect-video overflow-hidden bg-gray-100">
          <div class="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <span class="text-4xl">📝</span>
          </div>
        </div>
      )}
      <div class="p-6">
        <div class="mb-3 flex items-center gap-2">
          <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {post.category}
          </span>
          <span class="text-sm text-gray-500">{post.readingTime} min read</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h3 class="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
            {post.title}
          </h3>
        </Link>
        <p class="mb-4 text-gray-600">{post.description}</p>
        <div class="flex items-center justify-between">
          <div class="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                class="text-xs text-gray-500 transition-colors hover:text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
          <time class="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
    </article>
  );
});
