"use client";
import { useRouter } from "next/navigation.js";
import { useState } from "react";

export default function CreateNewPost({ checkUser, subreddits }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    //check user is logged in before making a post
    if (!checkUser) {
      return setError("You need to be logged in to make a post");
    }

    //fetch posts from api
    if (selectOption && title && message) {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          message: message,
          subredditId: selectOption,
        }),
      });

      const data = await res.json();
      //console.log(data);

      if (data.error) {
        return setError(data.error);
      } else {
        router.push(`/subreddits/${selectOption}`);
      }
    } else {
      setError("You need to choose a subreddit & create a title + message");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="newPost-container">
      <h4>Create a post</h4>
      <hr />
      <div>
        <select
          name="subreddits"
          required
          value={selectOption}
          onChange={(e) => {
            setSelectOption(e.target.value);
          }}
        >
          <option value="">Choose a subreddit</option>
          {subreddits.map((subreddit) => (
            <option value={subreddit.id} key={subreddit.name}>
              r/ {subreddit.name}
            </option>
          ))}
        </select>
      </div>
      <div className="newPostForm">
        <input
          className="newPostInput"
          required
          type="text"
          placeholder="Create a Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="newPostTextArea"
          required
          name="message"
          placeholder="Text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <hr />
        <button className="create-post-button" type="submit">
          Post
        </button>
      </div>
      <p>{error}</p>
    </form>
  );
}
