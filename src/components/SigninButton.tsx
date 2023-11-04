"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">
          {session.user.name}
          {session.user.username}
        </p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="navbar-end">
        <label htmlFor="my_modal_1" className="btn mr-3 bg-base-100">
          انشاء حساب
        </label>
        <>
          <button onClick={() => signIn()} className="btn" >تسجيل دخول</button>
        </>
      </div>
    </>
  );
};

export default SigninButton;
