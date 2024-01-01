//POST to create a post
import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import { fetchUser } from "@/lib/fetchUser.js";

//POST - api/post
export async function POST(req, res) {
  try {
    const { title, message, subredditId, parentId } = await request.json();

    if (!message) {
      return NextResponse.json({
        success: false,
        error: "You did not provide a message to post",
      });
    }

    if (!subredditId) {
      return NextResponse.json({
        success: false,
        error: "You did not provide a subreddit to post",
      });
    }

    const user = await fetchUser();

    if (!user.id) {
      return NextResponse.json({
        success: false,
        error: "You must be logged in to post!",
      });
    }

    const post = await prisma.post.create({
      data: {
        title,
        message,
        parentId,
        userId: user.id,
        subredditId,
      },
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
