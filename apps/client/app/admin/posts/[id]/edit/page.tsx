import type { Post } from "@apps/contracts";
import { headers } from "next/headers";
import { updatePost, deletePost } from "../actions";
import { DeletePostButton } from "@/components/UI/DeletePostButton/DeletePostButton";

async function getPost(id: string): Promise<Post> {
  const h = await headers();

  const host = h.get("host");
  const protocol =
    process.env.NODE_ENV === "production" ? "https" : "http";

  const res = await fetch(
    `${protocol}://${host}/api/posts/${id}`,
    {
      headers: {
        cookie: h.get("cookie") ?? "",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Post not found");
  }

  return res.json();
}

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await getPost(id);

  return (
    <main>
      <form action={updatePost.bind(null, id)}>
        <div>
          <input
            name="title"
            defaultValue={post.title}
            placeholder="Title"
          />
        </div>

        <div>
          <textarea
            name="content"
            defaultValue={post.content}
            placeholder="Content"
          />
        </div>

        <button type="submit">
          Save
        </button>
      </form>

      <form action={deletePost.bind(null, id)}>
        <DeletePostButton />
      </form>
    </main>
  );
}
