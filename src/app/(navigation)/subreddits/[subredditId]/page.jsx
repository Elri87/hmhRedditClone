import { prisma } from "@/lib/prisma.js";
import { fetchUser } from "@/lib/fetchUser.js";

import Votes from "@/components/Votes.jsx";

export default async function Subreddit({ params }) {
  //how do i access the posts associated with this subreddit
  //how do I access that parameter?

  //subredsit name as title
  const { subredditId } = params;
  const votes = await prisma.vote.findMany();
  const user = await fetchUser();

  const subreddit = await prisma.subreddit.findFirst({
    where: { id: subredditId },
  });
  //console.log(subreddit);

  const posts = await prisma.post.findMany({
    where: {
      subredditId,
      parentId: null,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="subredditId-Maincontainer">
      <h2>{subreddit.name}</h2>
      <div>
        {posts.map((post) => (
          <h4>{post.title}</h4>
        ))}
      </div>
      {posts.map((message) => (
        <div>
          {message.message}
          <Votes
            votes={getVotes}
            user={user}
            post={posts}
            checkUser={checkUser}
          />
        </div>
      ))}
    </div>
  );
}
