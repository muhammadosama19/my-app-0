"use client";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

export default function Sigin_page() {
  const userName = useRef("");
  const passWord = useRef("");
  const onsubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: passWord.current,
      redirect: true,
      callbackUrl: "/profile",
    });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600">
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <form action="/welcome" method="post">
          <input
            type="text"
            name="text"
            placeholder="User Name"
            onChange={(e) => (userName.current = e.target.value)}
          />
          <input
            type="text"
            name="text"
            placeholder="Password "
            onChange={(e) => (passWord.current = e.target.value)}
          />
          <button type="submit" onClick={onsubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
