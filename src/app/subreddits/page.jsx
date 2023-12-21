import { prisma } from "@/lib/prisma.js";
import Link from "next/link.js";

export default async function Subreddits() {
  // fetch directly from the db
  const subreddits = await prisma.subreddit.findMany();
  console.log(subreddits);
  return (
    <div className="subreddits-container">
      <h4>Subreddits</h4>
      {subreddits.map((subreddit) => (
        <div key={subreddit.id}>
          <Link href={`/subreddits/${subreddit.id}`}>{subreddit.name}</Link>
        </div>
      ))}
    </div>
  );
}
