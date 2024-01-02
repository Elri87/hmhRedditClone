import Link from "next/link.js";
import CreateNewPost from "./CreateNewPost.jsx";
import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";

export default async function CreatePostShortCut() {
  const user = await fetchUser();

  const subreddits = await prisma.subreddit.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="createPostShortCut">
      <p>👤</p>

      <Link href={"/createPost"} className="createPostShortCut-button">
        Create Post
      </Link>
    </div>
  );
}
