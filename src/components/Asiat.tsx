"use client";
import Signin from "./Sigin";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Asiat()  {
  const { data: session } = useSession();
  console.log(session?.user);

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name} The username is{session.user.username}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
      <main 
      className="flex justify-center items-center my-10 ">
        <div  className=" rounded-lg p-5 py-14">
          <Signin />
          <button onClick={() => signIn()} className="text-green-600 ml-auto">
            Sign In
          </button>
        </div>
    </main>
  );
};
