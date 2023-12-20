import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    if (!username || !password) {
      return NextResponse.json({
        success: false,
        error: "You must provide a username and password to login.",
      });
    }
    const user = await prisma.user.findFirst({
      where: { username },
    });
    if (!user) {
      return NextResponse.json({
        success: false,
        error: "Username doesn't exist. Please register",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json({
        success: false,
        error: "Username and/or password was incorrect.",
      });
    }
    return NextResponse.json({ success: true, user });
    //return NextResponse.json({ success: true, token }); - WILL BE USED WITH JWT
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
