import { NextResponse } from "next/server.js";
import { cookies } from "next/headers.js";

//POST/users/logout
export async function POST(request) {
  try {
    //because jwt is moved in the cookie, declare cookieStore so we can delete the token as user will logout and we don't need the token anymore
    const cookieStore = cookies();
    cookieStore.delete("token");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
