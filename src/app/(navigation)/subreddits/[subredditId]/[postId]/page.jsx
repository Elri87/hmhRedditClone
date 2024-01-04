import { prisma } from "@/lib/prisma.js";
import { fetchUser } from "@/lib/fetchUser.js";

import DeleteEdit from "@/components/DeleteEditButton.jsx";
import CreateComment from "@/components/CreateComment.jsx";

export default async function PostAndComments({ params }) {
  const { subredditId, postId } = params;

  const user = await fetchUser();

  const votes = await prisma.vote.findMany();

  //find post woth specific id
  const mainPost = await prisma.post.findFirst({
    where: {
      id: postId,
      parentId: null,
    },
    include: {
      user: true,
      subreddit: true,
      children: {
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  delete mainPost.user.password;

  let checkUser;

  if (user.id) {
    checkUser = await prisma.vote.findFirst({
      where: {
        postId: postId,
        userId: user.id,
      },
    });
  }
  return (
    <section>
      <h1>r/ {mainPost.subreddit.name}</h1>
      <DeleteEdit post={mainPost} subredditId={subredditId} />
      <CreateComment user={user} subredditId={subredditId} post={mainPost} />
    </section>
  );
}
