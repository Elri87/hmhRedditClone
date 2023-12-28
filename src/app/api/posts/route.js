//POST to create a post

import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

//POST - api/posts

/*GET Title
export default async function GET() {
  const title = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json({ success: true, title });
}*/

//POST
export default async function postHandler(req, res) {
  try {
    if (req.method === "POST") {
      const posts = await prisma.post.findMany();
      res.json(posts);
    } else {
    }
    return NextResponse.json({ success: true, message: "Post is successful" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
