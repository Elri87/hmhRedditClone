import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import { fetchUser } from "@/lib/fetchUser.js";

export async function PUT(request, response) {
  try {
    const { title, message } = await request.json();
    const { postId } = response.params;
    const { id } = await fetchUser();

    const searchPost = await prisma.post.findFirst({
      where: {
        id: postId,
      },
    });

    if (!id) {
      return NextResponse.json({
        success: false,
        error: "You must be logged in to edit the post",
      });
    } else if (id !== searchPost.userId) {
      return NextResponse.json({
        success: false,
        error: "You cant edit someone else's post.",
      });
    }

    let post;

    if (title && message) {
      post = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          title: title,
          message: message,
        },
      });
    } else if (title) {
      post = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          title: title,
        },
      });
    } else if (message) {
      post = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          message: message,
        },
      });
    } else {
      return NextResponse.json({
        success: false,
        error: "Content must be provided to update.",
      });
    }

    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function DELETE(request, response) {
  try {
    const { postId } = response.params;
    const { id } = await fetchUser();

    const searchPost = await prisma.post.findFirst({
      where: {
        id: postId,
      },
    });

    if (!id) {
      return NextResponse.json({
        success: false,
        error: "You must be logged in to delete the post",
      });
    } else if (id !== searchPost.userId) {
      return NextResponse.json({
        success: false,
        error: "You cant delete someone else's post.",
      });
    }

    const deletedPost = await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    return NextResponse.json({ success: true, post: deletedPost });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
