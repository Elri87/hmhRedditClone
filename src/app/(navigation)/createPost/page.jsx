import { prisma } from "@/lib/prisma.js";
import { fetchUser } from "@/lib/fetchUser.js";

export default async function createPost() {
  const user = await fetchUser();

  const subreddits = await prisma.subreddit.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(subreddits);

  return (
    <section>
      <h4>Create a post</h4>
      <hr />
    </section>
  );
}

/*<section>
      <h4>Create a post</h4>
      <hr />
        <div>
          <p>👤</p>
        </div>
        <div>
          <input type="text" placeholder="Create a Post" />
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
    </section>*/
