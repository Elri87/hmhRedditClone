import { prisma } from "@/lib/prisma.js";
import Link from "next/link.js";

import Votes from "./Votes.jsx";
import { votesCount } from "@/lib/votesCount.js";

export default async function ShowVotes({ votes, post, user, subredditId }) {
  let checkUser;

  if (user.id) {
    checkUser = await prisma.vote.findFirst({
      where: {
        postId: post.id,
        userId: user.id,
      },
    });
  }

  const getVotes = votesCount(post.id, votes);

  return (
    <>
      <div className="likesComments">
        <Votes votes={getVotes} post={post} user={user} checkUser={checkUser} />
      </div>
    </>
  );
}
