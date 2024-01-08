"use client";
import { useRouter } from "next/navigation.js";
import { useState } from "react";

export default function CommentSection({ post }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(post);
  const [editError, setEditError] = useState("");

  const router = useRouter();

  function handleShowEdit() {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
      setEditError("");
    }
  }

  async function handleSubmitEdit(e) {
    e.preventDefault();

    const res = await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        message: editValue,
      }),
    });

    const data = await res.json();

    if (data.error) {
      return setEditError(data.error);
    }

    setIsEditing(false);
    setEditError("");
    router.refresh();
  }

  //const getVotes = getNumberOfVotes(post.id, votes);

  return (
    <div className="">
      <div className="">
        <p>{post}</p>

        <form className="" onSubmit={handleSubmitEdit}>
          <textarea
            className=""
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
            }}
          ></textarea>
          <button type="submit" className="">
            Submit Changes
          </button>
          <p className="">{editError}</p>
        </form>

        <div className="vote-button">
          <div className="">Reply</div>

          <div className="" onClick={handleShowEdit}>
            <p>Edit</p>
          </div>
        </div>

        <form className="">
          <textarea className="" placeholder="reply here..."></textarea>
          <button type="submit" className="">
            Reply
          </button>
          <p className="">{editError}</p>
        </form>
      </div>
    </div>
  );
}
