import Link from "next/link.js";
import Image from "next/image.js";
import headerLogo from "../assets/img/flower.png";
import { fetchUser } from "@/lib/fetchUser.js";

export default async function Header() {
  const user = await fetchUser();
  return (
    <div>
      <div className="header">
        <Image className="header-logo" src={headerLogo} alt="HackMyHead Logo" />

        <div className="header-sub-content">
          {user.id ? (
            <h4>
              Welcome
              <span> {user.username}</span>
            </h4>
          ) : (
            <h1>Welcome, please log in</h1>
          )}

          <p>r/{user.username}</p>
        </div>
        <div className="header-buttons">
          <Link href={"/subreddits"} className="header-button">
            Subreddits
          </Link>
          <button className="joined-button">Joined</button>
        </div>
      </div>
      <hr />
    </div>
  );
}
