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
        <button>Create Post</button>
      </Link>
    </div>
  );
}

/*return (
    <>
      {showButton ? (
        <div className="create-sub-container">
          <button
            onClick={handleCreateClick}
            className="create-subreddit-button"
          >
            Create a Subreddit
          </button>
        </div>
      ) : (
        <div className="create-sub-container">
          <h4>Create a community</h4>
          <hr />
          <h4>Name</h4>
          <p>Community names including capitalization cannont be changed.</p>
          <form onSubmit={handleSubmitSubReddit}>
            r/
            <input
              type="text"
              placeholder="subreddit name"
              value={subRedditName}
              className="subreddit-input"
              onChange={(e) => {
                setSubRedditName(e.target.value);
              }}
              onSubmit={handleSubmitSubReddit}
            />
            <div className="create-subreddit-buttons">
              <button type="submit" className="create-subreddit-button">
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="create-subreddit-button"
              >
                Cancel
              </button>
            </div>
          </form>
          <p>{error}</p>
        </div>
      )}
    </>
  );
}*/
