import { getPosts } from "@/shared/api/posts";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Blog</h1>

      {posts.length === 0 && <p>No posts yet</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>
              {new Date(post.createdAt).toLocaleDateString('en-EN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </small>
          </li>
        ))}
      </ul>
      
      <a href="/">Back to Homepage</a>
    </main>
  );
}
