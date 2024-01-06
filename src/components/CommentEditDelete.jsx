"use client";
//This section is to show comments on ui when clicked on a post, then to edit a comment or delete a comment

import { useState } from "react";
import { useRouter } from "next/navigation.js";

export default function CommentEditDelete({
  post,
  user,
  subredditId,
  checkUser,
}) {
  const [isEditting, setIsEditting] = useState(false);
  const [editContent, setEditContent] = useState(post.message);
  const [errorEdit, setErrorEdit] = useState("");

  const router = useRouter();

  //conditional statement inside div so that edit box only shows when Edit button is clicked
  function handleShowEdit() {
    if (!isEditting) {
      setIsEditting(true);
    } else {
      setIsEditting(false);
      setErrorEdit("");
    }
  }

  async function handleSubmitEdit(e) {
    e.preventDefault();

    //fetch to PUT changes when edit
    const res = await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        message: editContent,
      }),
    });

    const data = await res.json();

    if (data.error) {
      return setErrorEdit(data.error);
    }

    setIsEditting(false);
    setErrorEdit("");
    router.refresh();
  }

  return (
    <div>
      <div className="comment-section">
        {!isEditting ? (
          <div>
            <p>{post.message}</p>
            <button onClick={handleShowEdit}>Edit post</button>
          </div>
        ) : (
          <form onSubmit={handleSubmitEdit}>
            <textarea
              value={editContent}
              onChange={(e) => {
                setEditContent(e.target.value);
              }}
            ></textarea>
            <button type="submit">Submit Changes</button>
            <p>{errorEdit}</p>
          </form>
        )}
        <div>
          <button>Reply</button>
          {user.id === post.userId ? <button>Delete</button> : null}
        </div>
      </div>
    </div>
  );
}
