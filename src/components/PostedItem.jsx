"use client";
import { useState } from "react";
import { useRouter } from "next/navigation.js";
import PostedItemButtons from "./PostedItemButtons.jsx";

export default function PostedItem({ post, user }) {
  const router = useRouter();
  //const data = await res.json()
  async function handleSubmitReply(e) {
    e.preventDefault();

    const res = await fetch(`/api/posts/`, {
      method: "POST",
      body: JSON.stringify({
        message: replyValue,
        subredditId: subredditId,
        parentId: post.id,
      }),
    });
  }
  return (
    <div className="postedItem-container">
      <div>
        <p>post.message</p>
      </div>

      <PostedItemButtons />
    </div>
  );
}
