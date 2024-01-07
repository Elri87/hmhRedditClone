import { prisma } from "@/lib/prisma.js";
import { fetchUser } from "@/lib/fetchUser.js";
import { NextResponse } from "next/server.js";

export async function POST(request, response) {
  try {
    const { postId, isUpvote } = await request.json();
    const { id } = await fetchUser();

    let vote;

    if (!id) {
      return NextResponse.json({
        success: false,
        error: "You must be logged in to like or dislike a post",
      });
    }

    if (!postId) {
      return NextResponse.json({
        success: false,
        error: "The id of the post was not provided",
      });
    }

    if (typeof isUpvote !== "boolean") {
      return NextResponse.json({
        success: false,
        error: "Boolean value for isUpvote must be provided",
      });
    }

    const searchVote = await prisma.vote.findFirst({
      where: {
        userId: id,
        postId,
      },
    });

    if (searchVote) {
      if (searchVote.isUpvote === isUpvote) {
        vote = await prisma.vote.delete({
          where: {
            id: searchVote.id,
          },
        });
      } else {
        vote = await prisma.vote.update({
          where: {
            id: searchVote.id,
          },
          data: {
            isUpvote: isUpvote,
          },
        });
      }
    } else {
      vote = await prisma.vote.create({
        data: {
          userId: id,
          postId,
          isUpvote: isUpvote,
        },
      });
    }

    return NextResponse.json({ success: true, vote });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
