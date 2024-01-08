"use client";

import { useRouter } from "next/navigation.js";
import { useState } from "react";

import CommentSection from "./CommentSection.jsx";

export default function({
  post,
  user,
  subredditId,
  comment,
  votes,
  checkUser,
}) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!user.id) {
      return setError("You need to login to comment on a post");
    }

    if (text) {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          message: text,
          subredditId: subredditId,
          parentId: post.id,
        }),
      });

      const data = await res.json();

      console.log(data);
      if (data.error) {
        return setError(data.error);
      }

      setText("");
      router.refresh();
    } else {
      setError("You need to write a comment to post");
    }
  }

  return (
    <div className="createComment-container">
      <form onSubmit={handleSubmit}>
        <div>
          <p>Comment as {user.username}</p>
          <textarea
            placeholder="What are your thoughts?"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <p>{error}</p>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
      <div>
        <p>Comments should go here</p>
        <CommentSection
          user={user}
          votes={votes}
          post={comment}
          checkUser={checkUser}
          subredditId={subredditId}
        />
      </div>
    </div>
  );
}

//<CommentSection user={user} comment={comment} post={post} />
