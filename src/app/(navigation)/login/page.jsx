"use client";

import { useState } from "react";
import Image from "next/image.js";
import logo from "../../../assets/img/flower.png";

import { useRouter } from "next/navigation.js";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    //console.log(username, password);
    const res = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const info = await res.json();
    if (info.error) {
      return setError(info.error);
    }
    //console.log(info);
    router.push("/");
    router.refresh();
  }
  return (
    <div className="register-container">
      <Image src={logo} alt="reddit logo" className="authLogo" />
      <form onSubmit={handleLogin}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username.."
          className="auth-input-field"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password.."
          type="password"
          className="auth-input-field"
        />
        <p className="pTag-auth">
          <a href="#" className="signIn-link">
            Forgot your Password?
          </a>
        </p>
        <button className="register-button">Login</button>
        <p>{error}</p>
      </form>
      <p className="pTag-auth">
        Not yet a member?
        <a href="/register" className="signIn-link">
          {" "}
          Sign Up
        </a>
      </p>
      <button className="google-button">Sign in with Google</button>
    </div>
  );
}
