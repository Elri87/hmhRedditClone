//This component to return a link tag

"use client";

import Link from "next/link.js";
import { useRouter } from "next/navigation.js";

export default function Logout() {
  const router = useRouter();

  async function handleLogout() {
    const response = await fetch("/api/users/logout", {
      method: "POST",
    });
    const info = await response.json();
    //router.push("/api/users/login");
    router.refresh();
  }

  return (
    <Link onClick={handleLogout} href={"/login"} className="logoutButton">
      Logout
    </Link>
  );
}

//href={"/api/users/login"}
