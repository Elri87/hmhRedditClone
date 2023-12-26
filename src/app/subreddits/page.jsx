import { prisma } from "@/lib/prisma.js";
import Link from "next/link.js";

export default async function Subreddits() {
  // fetch directly from the db
  const subreddits = await prisma.subreddit.findMany();

  console.log(subreddits);
  return (
    <div>
      <div>
        <button className="create-subreddit-button">Create a Subreddit</button>
      </div>

      {subreddits.map((subreddit) => (
        <div key={subreddit.id} className="subreddits-container">
          <h4>Group Title</h4>
          <Link href={`/subreddits/${subreddit.id}`}>{subreddit.name}</Link>
          <p>Number of users</p>
        </div>
      ))}
    </div>
  );
}
