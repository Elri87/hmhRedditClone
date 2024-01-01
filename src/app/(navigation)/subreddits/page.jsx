//This page is for the subreddits to show on the UI
import { prisma } from "@/lib/prisma.js";
import Link from "next/link.js";
import CreateSubreddit from "../../../components/Subreddit.jsx";
import { fetchUser } from "@/lib/fetchUser.js";

export default async function Subreddits() {
  // fetch directly from the db
  const subreddits = await prisma.subreddit.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const user = await fetchUser();

  return (
    <section>
      <h4>Subreddits</h4>

      {subreddits.map((subreddit) => {
        return (
          <Link
            href={`/subreddits/${subreddit.id}`}
            key={subreddit.id}
            className="subreddits-container"
          >
            <p>r/ {subreddit.name}</p>
          </Link>
        );
      })}

      <Link
        href={"/subreddits"}
        src="/subreddits"
        className="create-subreddit-button"
      >
        Create a Subreddit
      </Link>

      <CreateSubreddit checkUser={user.id} />
    </section>
  );
}
