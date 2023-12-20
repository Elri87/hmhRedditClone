"use client";

import { useRouter } from "next/navigation.js";
import Login from "../login/page.jsx";

export default function Logout() {
  async function handleLogout() {
    const response = await fetch("/api/users/logout", {
      method: "POST",
    });
    const info = await response.json();
    Router.refresh();
  }

  return (
    <div>
      <Login />
    </div>
  );
}
//router.push("/");
