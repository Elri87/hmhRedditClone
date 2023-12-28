import styles from "@/app/page.module.css";
import { prisma } from "@/lib/prisma.js";

export default async function postPage() {
  const posts = await prisma.post.findFirst();
  console.log(posts);

  return (
    <div>
      <p>Reddit</p>
      <div>
        <div>
          <p>👤</p>
        </div>
        <div>
          <input type="text" placeholder="Create a Post" />
        </div>
      </div>

      {posts.map((post) => (
        <div key={post.id}>
          <div>
            <div key={post.id}>
              <button>⬆️</button>
              {post.votes || 0}
              <button>⬇️</button>
            </div>
          </div>

          <div>
            <div>{post.title}</div>

            {post.user && <div>{post.user.username}</div>}

            <div>{post.message}</div>

            <div>
              <div>
                <p>💬 # Comments</p>
              </div>

              <div>
                <p>Created: {post.createdAt.toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
