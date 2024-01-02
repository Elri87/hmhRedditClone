"use client";
import { useRouter } from "next/navigation.js";
import { useState } from "react";

export default function CreateNewPost() {
  return (
    <section>
      <h4>Create a post</h4>
      <hr />

      <div>
        <input type="text" placeholder="Create a Post" />
      </div>
    </section>
  );
}

/*export default function CreateNewPost({ checkUser, subreddits }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [optionSelect, setOptionSelect] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    //check user is logged in before making a post
    if (!checkUser) {
      return setError("You need to be logged in to make a post");
    }

    //fetch posts from api
    if (optionSelect && title && message) {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          message: message,
          subredditId: optionSelect,
        }),
      });
      const data = await res.json();

      if (data.error) {
        return setError(data.error);
      } else {
        router.push(`/subreddits/${optionSelect}`);
      }
    } else {
      setError("You need to choose a subreddit & create a title + message");
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
}*/

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
