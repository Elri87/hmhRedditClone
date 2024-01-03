import Link from "next/link.js";
import CreateNewPost from "./CreateNewPost.jsx";
import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";
import { FaCircleUser } from "react-icons/fa6";

export default async function CreatePostShortCut() {
  const user = await fetchUser();

  const subreddits = await prisma.subreddit.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="createPostShortCut">
      <FaCircleUser className="userRound" />

      <Link href={"/createPost"} className="createPostShortCut-button">
        Create Post
      </Link>
    </div>
  );
}
