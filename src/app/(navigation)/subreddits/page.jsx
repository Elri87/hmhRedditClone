import { prisma } from "@/lib/prisma.js";
import Link from "next/link.js";
//import Subreddit from "./[subredditId]/page.jsx";
import CreateSubreddit from "../../../components/Subreddit.jsx";
import { fetchUser } from "@/lib/fetchUser.js";

export default async function Subreddits() {
  // fetch directly from the db
  const subreddits = await prisma.subreddit.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
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
    <section>
      <h4>Subreddits</h4>

      {subreddits.map((subreddit) => {
        return (
          <Link
            href={`/subreddits/${subreddit.id}`}
            key={subreddit.id}
            className="subreddits-container"
          >
            {subreddit.name}
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
