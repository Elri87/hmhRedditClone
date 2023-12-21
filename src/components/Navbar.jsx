import Link from "next/link.js";
import { fetchUser } from "@/lib/fetchUser.js";
import Logout from "./Logout.jsx";

import Image from "next/image.js";
import redditLogo from "../assets/img/redditRoundLogo.png";
import hmhLogo from "../assets/img/hackmyheadLogo.png";

export default async function Navbar() {
  const user = await fetchUser();

  //console.log(user.username);

  return (
    <div className="navbar">
      <div>
        <Image className="redditLogo" src={redditLogo} alt="Reddit Logo" />
      </div>
      <div>
        <span>Welcome {user.username}</span>
      </div>
      <div className="search-bar">
        <p className="search-icon">🔍</p>
        <input type="text" className="search-input" placeholder="Search" />
      </div>
      <div className="navbar-right">
        <Link href={"/"}>Home</Link>
        <Link href={"/subreddits"}>Subreddits</Link>
        <Logout />

        {user.id && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
          </>
        )}
        {!user.id && (
          <>
            <span>Welcome {user.username}</span>
            <Logout />
          </>
        )}
      </div>
    </div>
  );
}

//NAVBAR REDDIT
/*<div className="navbar-reddit">
      <p>Reddit</p>
      <p>img</p>
      <p>*</p>
      <p>Search</p>
      </div>*/

//if user is loged in, they have a valid token in the cookie, I want to say //welcome. Create function in lib fetchUser.js

//<Image className="redditLogo" src={hmhLogo} alt="HackMyHead Logo" />
