"use client";
import SigninButton from "@/components/SigninButton";
import Sigin_page from "./signin/page";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session?.user);

  // في حالة تسجيل دخول اعرض هذا
  if (session && session.user) {
    return (
      <main>
        <Sigin_page />
      </main>
    );
  }
  // في حالة لم يتم تسجيل اعرض هذا
  return (
    <>
      <div className="navbar-end">
        <label htmlFor="my_modal_1" className="btn mr-3 bg-base-100">
          انشاء حساب
        </label>
        <Link href={"/signin"}>
          <button className="btn">تسجيل دخول</button>
        </Link>
      </div>
      <SigninButton />
    </>
  );
}
