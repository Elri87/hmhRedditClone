"use client";
import { useRouter } from "next/navigation.js";
import { useState } from "react";

export default function CreateNewPost({ subreddits }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (title && message) {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          message: message,
          //subredditId
        }),
      });
      const data = await res.json();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select>
          <option>Choose a subreddit</option>
          {subreddits.map((subreddit) => (
            <option value={subreddit.id} key={subreddit.id}>
              r/ {subreddit.name}
            </option>
          ))}
        </select>
      </div>
    </form>
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
