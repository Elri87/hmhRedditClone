import { prisma } from "@/lib/prisma.js";
import Link from "next/link.js";
//import Subreddit from "./[subredditId]/page.jsx";
import CreateSubreddit from "../../components/Subreddit.jsx";

export default async function Subreddits() {
  // fetch directly from the db
  const subreddits = await prisma.subreddit.findMany();
  /*{
    include: {
      posts: {
        where: {
          parentId: null,
        },
      },
    },
  }*/
  //console.log(subreddits);

  //sort the subreddits
  //subreddits.sort((a,b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h4>Subreddits</h4>
      <div>
        {subreddits.map((subreddit) => (
          <div key={subreddit.id} className="subreddits-container">
            <h4>Group Title</h4>
            <Link href={`/subreddits/${subreddit.id}`}>{subreddit.name}</Link>
            <p>Number of users</p>
          </div>
        ))}
      </div>

      <Link
        href={"/subreddits"}
        src="/subreddits"
        className="create-subreddit-button"
      >
        Create a Subreddit
      </Link>

      <CreateSubreddit />
    </div>
  );
}
