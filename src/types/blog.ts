export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  readingTime: number;
  featured?: boolean;
  image?: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}
