//Because we need user for many different things in application we can write a function to use on a few components. set cookies to send down the jwt token
import { prisma } from "./prisma.js";
import { cookies } from "next/headers.js"; // check this, if created in route.js users
import jwt from "jsonwebtoken";

export async function fetchUser() {
  try {
    //check if there is a cookie
    const cookieStore = cookies();
    //console.log(cookieStore);
    //const { value } = cookieStore.get("token"); //token is cookie name
    const userCookie = cookieStore.get("token");
    //console.log(userCookie);
    if (!userCookie) {
      return {};
    }
    //Decode the token
    const { userId } = jwt.verify(userCookie.value, process.env.JWT_SECRET);
    //const decodedToken = jwt.verify(userCookie.value, process.env.JWT_SECRET);
    //determine if token is valid
    //const { userId } = decodedToken;

    //send request to db to fetch this user
    const user = await prisma.user.findFirst({ where: { id: userId } });
    delete user.password;
    return user;
  } catch (error) {
    console.log(error);
    return {};
  }
}

//call this in navbar and also import it in navbar, then turn Nvbar into async function
