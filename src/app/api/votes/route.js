import { prisma } from "@/lib/prisma.js";

export default async function handleVote(postId, voteType) {
  try {
    const vote = await prisma.vote.create({
      data: {
        postId,
        voteType,
      },
    });

    if (vote) {
      return { success: true, message: "Vote successful" };
    } else {
      return { success: false, error: "Failed, vote not created" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
