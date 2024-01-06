//Display comments
import { prisma } from "@/lib/prisma.js";

import { FaUserAstronaut } from "react-icons/fa";

export default async function CommentSection({ comment, user, subredditId }) {
  let checkUser;

  /*const replies = await prisma.post.findMany({
    where: {
      parentId: comment.id,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (user.id) {
    checkUser = await prisma.vote.findFirst({
      where: {
        postId: comment.id,
        userId: user.id,
      },
    });
  }*/

  const comments = await prisma.post.findMany({
    where: {
      parentId: postId,
    },
    include: {
      children: true,
    },
  });

  return;
  <div>
    <h1>Testssss</h1>
    <h5>
      <FaUserAstronaut className="userAstro" />
      Posted by u/ {comment.user.username}
    </h5>
    {replies.map((reply) => {
      reply.id;
    })}
  </div>;
}
