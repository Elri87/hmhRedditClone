//This shows the username, title, post & votes. Functionality is the edit & delete of post
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation.js";

import { FaEdit } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";

import Votes from "./Votes.jsx";
import ShowVotes from "./ShowVotes.jsx";

export default function MainPost({ post, user, subreddit }) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [message, setMessage] = useState(post.message);
  const [error, setError] = useState("");

  const router = useRouter();

  function handleEdit() {
    if (!edit) {
      setEdit(true);
    } else setEdit(false);
  }

  async function handleEditPost(e) {
    e.preventDefault();
    const res = await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        message,
      }),
    });
    const data = await res.json();
    if (data.error) {
      return setError(data.error);
    }
    setEdit(false);
    router.refresh();
  }

  async function handleDeletePost(e) {
    e.preventDefault();
    const res = await fetch(`/api/posts/${post.id}`, {
      method: "DELETE",
    });
    router.push(`/subreddits/${subreddit.id}`);
  }

  return (
    <div className="mainPost-container">
      <div>
        <h5>
          <FaUserAstronaut className="userAstro" />
          Posted by u/ {post.user.username}
        </h5>
        <div>
          {!edit ? (
            <>
              <h1>{post.title}</h1>
              <p>{post.message}</p>
            </>
          ) : (
            <div>
              <form onSubmit={handleEditPost} className="editPostForm">
                <input
                  className="titleEditBox"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  placeholder="Title"
                />
                <textarea
                  className="postEditBox"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Message"
                ></textarea>
                <button type="submit" className="saveButton">
                  Save
                </button>
                <p>{error}</p>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="votes-mainPost"></div>
      {user.id === post.user.id ? (
        <div className="editDeleteButton">
          <button onClick={handleEdit} className="editButton">
            <FaEdit />
          </button>
          <button onClick={handleDeletePost} className="deleteButton">
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}
