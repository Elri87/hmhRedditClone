import { prisma } from "@/lib/prisma.js";
import { fetchUser } from "@/lib/fetchUser.js";
import Link from "next/link.js";
import Votes from "./Votes.jsx";
import PostHomeButtons from "./PostHomeButtons.jsx";
import { FaUserAstronaut } from "react-icons/fa";

export default async function PostHomePage() {
  const user = await fetchUser();

  const posts = await prisma.post.findMany({
    where: {
      userId: user.id,
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
    <section>
      {user.id ? (
        <div>
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/subreddits/${post.subredditId}/${post.id}`}
            >
              {" "}
              <div className="votes-container">
                <Votes />
              </div>
              <div className="postedItem-container">
                <p>
                  <FaUserAstronaut className="userAstro" />
                  Posted by u/ {post.user.username}
                </p>
                <h4>{post.title}</h4>
                <p>{post.message}</p>
              </div>
              <PostHomeButtons />
            </Link>
          ))}
        </div>
      ) : (
        <p>error</p>
      )}
    </section>
  );
}

//Navbar home icon
//import { FaHome } from "react-icons/fa";
//<FaHome />

/*<div>
        <p>
          <FaUserAstronaut className="userAstro" />
          Posted by u/
        </p>
        <h1>Post.title</h1>
        <p>Post.message</p>
      </div>
      <div>
        <p>Comments</p>
        <p>share</p>
        <p>save</p>
        <p>...</p>
      </div>
      <PostedItemButtons />*/
