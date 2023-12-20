import Image from "next/image.js";
import headerLogo from "../assets/img/hackmyheadLogo.png";

export default function Header() {
  return (
    <div>
      <div className="header-gray"></div>
      <div className="header">
        <Image className="header-logo" src={headerLogo} alt="HackMyHead Logo" />

        <div className="header-sub-content">
          <h2>hackmyhead</h2>

          <p>r/hackmyhead</p>
        </div>
        <div>
          <button className="header-button">Joined</button>
        </div>
      </div>
      <hr />
    </div>
  );
}
