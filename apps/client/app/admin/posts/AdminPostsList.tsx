"use client";

import type { Post } from "@apps/contracts";
import { useRouter } from "next/navigation";

export function AdminPostsList({ posts }: { posts: Post[] }) {
  const router = useRouter();

  const handlePostClick = (postId: string) => {
    router.push(`/admin/posts/${postId}/edit`);
  };

  return (
    <ul>
      {posts.map(post => (
        <li
          key={post.id}
          onClick={() => handlePostClick(post.id)}
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
}
