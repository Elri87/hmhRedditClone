import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function GET(req, res) {
  const name = await prisma.subreddit.findMany(); /*{
    orderBy: {
      createdAt: "desc",
    },
  }*/
  return NextResponse.json({ success: true, name });
}

export default async function POST(req, res) {
  try {
    const { name } = await req.json();
    const user = await fetchUser();

    if (!name) {
      return NextResponse.json({
        success: false,
        error: "Please provide a subreddit name",
      });
    }

    //check if the subreddit already excists
    const checkSubreddit = await prisma.subreddit.findFirst({
      where: { name },
    });
    if (checkSubreddit) {
      return NextResponse.json({
        success: false,
        error: "The Subreddit already exsists",
      });
    }

    const subreddit = await prisma.subreddit.create({
      data: {
        name,
        userId: user.id,
      },
    });
    return NextResponse.json({ success: true, subreddit });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

/*export default async function POST(req, res) {
  try {
    if (req.method === "POST") {
      const subreddits = await prisma.subreddit.findMany();
      res.json(subreddits);
    }
    return NextResponse.json({
      success: true,
      message: "Subreddit successful",
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}*/
