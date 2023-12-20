//POST to create a post

import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

//POST - api/posts

//GET Title
export async function GET() {
  const title = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json({ success: true, title });
}

//POST title
export async function POST(request, response) {
  try {
    const { title } = await request.json();
    if (!title) {
      return NextResponse.json({
        success: false,
        error: "You must provide a title",
      });
    }
    const findTitle = await prisma.post.findFirst({ where: { title } });

    /*if(findTitle) {
return NextResponse.json({
    success: false,
    error: "Must have a unique title"
})
}*/
    const newTitle = await prisma.post.create({
      data: { title },
    });
    return NextResponse.json({ success: true, title });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
