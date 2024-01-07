"use client";
//Create like and dislike
import { useRouter } from "next/navigation.js";
import { useState, useEffect } from "react";

import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";

export default function Votes({ votes, post, user, checkUser }) {
  const [likes, setLikes] = useState(votes);
  const [isUpvoted, setIsUpvoted] = useState(null);
  const [voted, setVoted] = useState(null);
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleUpvote() {
    if (user.id) {
      await fetch("/api/votes", {
        method: "POST",
        body: JSON.stringify({
          postId: post.id,
          isUpvote: true,
        }),
      });
      let i;

      if (voted === true) {
        i = likes - 1;
        setLikes(i);
        setVoted(null);
        return setIsUpvoted(null);
      } else if (voted === false) {
        i = likes + 2;
        setLikes(x);
      } else {
        i = likes + 1;
        setLikes(i);
      }

      setVoted(true);
      setIsUpvoted(true);
    } else {
      setError("You need to login to up vote");
    }
  }

  async function handleDownVote() {
    if (user.id) {
      await fetch("/api/votes", {
        method: "POST",
        body: JSON.stringify({
          postId: post.id,
          isUpvote: false,
        }),
      });
      let i;

      if (voted === true) {
        i = likes - 2;
        setLikes(i);
      } else if (voted === false) {
        i = likes + 1;
        setLikes(i);
        setVoted(null);
        return setIsUpvoted(null);
      } else {
        i = likes - 1;
        setLikes(i);
      }
      setVoted(false);
      setIsUpvoted(false);
    } else {
      setError("You need to login to down vote");
    }
  }

  //one user can't upvote twice
  useEffect(() => {
    if (checkUser) {
      setVoted(checkUser.isUpvoted);
    }
    router.refresh();
  }, []);

  return (
    <>
      <button onClick={handleUpvote} className="arrow">
        <TiArrowUpThick />
      </button>
      <p>{likes}</p>
      <button onClick={handleDownVote} className="arrow">
        <TiArrowDownThick />
      </button>
    </>
  );
}
