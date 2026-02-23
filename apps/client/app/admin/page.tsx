import { getCurrentUser } from "@/shared/auth/getCurrentUser";
import { createPost } from "./actions";

export default async function AdminPage() {

  const user = await getCurrentUser();

  return (
    <main>
      <h1>Admin</h1>

      <p>
        Logged in as: {user?.role}
      </p>

      <form action={createPost}>
        <div>
          <label>
            Title
            <input name="title" />
          </label>
        </div>
        <div>
          <label>
            Content
            <textarea name="content" />
          </label>
        </div>
        <button type="submit">Create post</button>
      </form>

      <form method="POST" action="/api/auth/logout">
        <button type="submit">Logout</button>
      </form>

      <a href="/">Back to homepage</a>
    </main>
  );
}
