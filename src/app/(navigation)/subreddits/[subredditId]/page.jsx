/*import { prisma } from "@/lib/prisma.js";

export default async function Subreddit({ params }) {
  //how do i access the posts associated with this subreddit
  //how do I access that parameter?

  //subredsit name as title
  const { subredditId } = params;
  const subreddit = await prisma.subreddit.findFirst({
    where: {
      where: { id: subredditId },
    },
  });
  console.log(subreddit);

  const posts = await prisma.post.findMany({
    where: {
      subredditId,
    },
  });

  return (
    <div>
      <h3>{subreddit.name}</h3>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}*/
