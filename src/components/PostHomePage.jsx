import { prisma } from "@/lib/prisma.js";
import { fetchUser } from "@/lib/fetchUser.js";
//import { useState } from "react";
//import { useRouter } from "next/navigation.js";

import PostedItemButtons from "./PostedItemButtons.jsx";
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
    <section className="postedItem-container">
      {user.id ? (
        <h1>
          Welcome
          <span> {user.username}</span>
        </h1>
      ) : (
        <h1>Welcome, please log in</h1>
      )}
      {user.id ? <h5>Some buttons</h5> : null}
      {user.id ? <h4>Your Posts</h4> : null}
      {user.id ? (
        <div>
          {posts.map((listPosts) => (
            <h3>{listPosts.message}</h3>
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
          Posted by u/ {}
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
