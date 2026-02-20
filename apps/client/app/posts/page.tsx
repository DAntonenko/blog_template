import { getPosts } from "@/shared/api/posts";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Posts</h1>

      {posts.length === 0 && <p>No posts yet</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>{new Date(post.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
