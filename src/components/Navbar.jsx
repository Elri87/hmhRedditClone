import Link from "next/link.js";
import Image from "next/image.js";
import redditLogo from "../assets/img/redditRoundLogo.png";
import hmhLogo from "../assets/img/hackmyheadLogo.png";
import { fetchUser } from "@/lib/fetchUser.js";
import Logout from "@/app/logout/page.jsx";

export default async function Navbar() {
  const user = await fetchUser();

  return (
    <div className="navbar">
      <div>
        <Image className="redditLogo" src={redditLogo} alt="Reddit Logo" />
        <Image className="redditLogo" src={hmhLogo} alt="HackMyHead Logo" />
      </div>

      <div class="search-bar">
        <div class="search-icon" onclick="toggleSearchBar()">
          🔍
        </div>
        <input type="text" class="search-input" placeholder="Search" />
      </div>
      <div className="navbar-right">
        <Link href={"/"}>Home</Link>
        <Link href={"/subreddits"}>Subreddits</Link>
        {user.id && (
          <>
            <Logout /> <span>Welcome {user.username}</span>
            <Link href={"/logout"}>Logout</Link>
          </>
        )}
        {!user.id && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
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
