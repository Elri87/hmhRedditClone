import { prisma } from "@/lib/prisma.js";
import { fetchUser } from "@/lib/fetchUser.js";
import CreateNewPost from "@/components/CreateNewPost.jsx";

export default async function createPost() {
  const user = await fetchUser();

  const subreddits = await prisma.subreddit.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(subreddits);

  return (
    <section>
      <h4>Create a post</h4>
      <hr />
      <CreateNewPost checkUser={user.id} subreddits={subreddits} />
    </section>
  );
}
