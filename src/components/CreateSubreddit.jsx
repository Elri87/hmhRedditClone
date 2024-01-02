"use client";

import { useRouter } from "next/navigation.js";
import { useState } from "react";

export default function CreateSubreddit() {
  const [showButton, setShowButton] = useState(true);
  const [subRedditName, setSubRedditName] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  function handleCreateClick() {
    setShowButton(false);
  }

  async function handleSubmitSubReddit(e) {
    e.preventDefault();
    const res = await fetch("/api/subreddits", {
      method: "POST",
      body: JSON.stringify({
        name: subRedditName,
      }),
    });

    const data = await res.json();

    if (data.error) {
      return setError(data.error);
    }
    router.refresh();
  }

  function handleCancel() {
    setShowButton(true);
  }

  return (
    <>
      {showButton ? (
        <div className="create-sub-container">
          <button
            onClick={handleCreateClick}
            className="create-subreddit-button"
          >
            Create a Subreddit
          </button>
        </div>
      ) : (
        <div className="create-sub-container">
          <h4>Create a community</h4>
          <hr />
          <h4>Name</h4>
          <p>Community names including capitalization cannont be changed.</p>
          <form onSubmit={handleSubmitSubReddit}>
            r/
            <input
              type="text"
              placeholder="subreddit name"
              value={subRedditName}
              className="subreddit-input"
              onChange={(e) => {
                setSubRedditName(e.target.value);
              }}
              onSubmit={handleSubmitSubReddit}
            />
            <div className="create-subreddit-buttons">
              <button type="submit" className="create-subreddit-button">
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="create-subreddit-button"
              >
                Cancel
              </button>
            </div>
          </form>
          <p>{error}</p>
        </div>
      )}
    </>
  );
}
