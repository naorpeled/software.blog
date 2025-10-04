import type { BlogPost } from "~/types/blog";

// Sample blog posts - will be replaced with dynamic content loading later
export const posts: BlogPost[] = [
  {
    slug: "welcome-to-software-blog",
    title: "Welcome to software.blog",
    description:
      "Introducing software.blog - a modern platform for software engineering insights, tutorials, and best practices.",
    date: "2025-10-04",
    author: "Software Blog Team",
    tags: ["announcement", "meta"],
    category: "General",
    readingTime: 3,
    featured: true,
    image: "/images/welcome.jpg",
  },
  {
    slug: "modern-web-development-2025",
    title: "Modern Web Development in 2025",
    description:
      "Exploring the latest trends and technologies shaping web development in 2025, from resumable frameworks to edge computing.",
    date: "2025-10-03",
    author: "Software Blog Team",
    tags: ["web-development", "trends", "javascript"],
    category: "Web Development",
    readingTime: 8,
    featured: true,
    image: "/images/web-dev-2025.jpg",
  },
  {
    slug: "qwik-framework-deep-dive",
    title: "Qwik Framework: A Deep Dive",
    description:
      "Understanding Qwik's resumability model and why it's a game-changer for performance-critical applications.",
    date: "2025-10-02",
    author: "Software Blog Team",
    tags: ["qwik", "performance", "framework"],
    category: "Frameworks",
    readingTime: 12,
    featured: false,
  },
];

export function getAllPosts(): BlogPost[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedPosts(): BlogPost[] {
  return posts
    .filter((post) => post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByTag(tag: string): BlogPost[] {
  return posts
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllCategories(): string[] {
  return Array.from(new Set(posts.map((post) => post.category)));
}

export function getAllTags(): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.tags)));
}
