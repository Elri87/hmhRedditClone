import Link from "next/link.js";
import Image from "next/image.js";
import headerLogo from "../assets/img/flower.png";

export default function Header() {
  return (
    <div>
      <div className="header-gray"></div>
      <div className="header">
        <Image className="header-logo" src={headerLogo} alt="HackMyHead Logo" />

        <div className="header-sub-content">
          <h2>elrilegrange</h2>

          <p>r/elrilegrange</p>
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
