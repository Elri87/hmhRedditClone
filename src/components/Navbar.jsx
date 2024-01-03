import Link from "next/link.js";
import { fetchUser } from "@/lib/fetchUser.js";

import Logout from "./Logout.jsx";

import Image from "next/image.js";
import redditLogo from "../assets/img/redditRoundLogo.png";

import { FaHome } from "react-icons/fa";

export default async function Navbar() {
  const user = await fetchUser();

  //console.log(user);

  return (
    <div className="navbar">
      <div>
        <Link href={"/"}>
          <Image className="redditLogo" src={redditLogo} alt="Reddit Logo" />
        </Link>
        <FaHome className="homeIcon" />
      </div>

      <div className="search-bar">
        <p className="search-icon">🔍</p>
        <input type="text" className="search-input" placeholder="Search" />
      </div>
      <div className="navbar-right">
        {!user.id && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
          </>
        )}
        {user.id && (
          <>
            <Logout />
          </>
        )}
      </div>
    </div>
  );
}
