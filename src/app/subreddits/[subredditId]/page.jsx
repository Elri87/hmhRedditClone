import { prisma } from "@/lib/prisma.js";

export default async function Subreddit({ params }) {
  //how do i access the posts associated with this subreddit
  //how do I access that parameter?

  //subredsit name as title
  const { subredditId } = params;
  const subreddit = await prisma.subreddit.findFirst({
    where: {
      where: { id: subredditId },
    },
  });
  console.log(subreddit);

  const posts = await prisma.post.findMany({ where: {
    subredditId
  }})

  return (
    <div>
      <h3>{subreddit.name}</h3>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}

//individual subredit with it's own posts
/*<h4>Create a community</h4>
      <hr />
      <h4>Name</h4>
      <p>Comunity names including capitalization cannont be changed.</p>
      <form>
        <input placeholder="r/" />
      </form>
      <p>21 Characters remaining</p>
      <label>Community type</label>
      <form>
        <input type="radio" />
        <label>Public</label>
        <input type="radio" />
        <label>Restricted</label>
        <input type="radio" />
        <label>Private</label>
      </form>
      <h4>Adult content</h4>
      <form>
        <input type="radio" />
        <label>18+ year old community</label>
      </form>
      <div>
        <button>Cancel</button>
        <button>Create Community</button>
      </div>*/
