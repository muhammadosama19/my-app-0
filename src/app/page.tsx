"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Messages from "@/components/Messages";
import Sigin from "./signin/page";
import SigninButton from "@/components/SigninButton";

export default function Home() {
  const { data: session } = useSession();

  // في حالة تسجيل دخول اعرض هذا
  if (session && session.user) {
    return <Messages />;
  }
  // في حالة لم يتم تسجيل اعرض هذا
  return <Sigin />;
}
