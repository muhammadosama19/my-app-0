"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Messages from "@/components/Messages";
import Asiat from "@/components/Asiat";

export default function Sigin() {
  const { data: session } = useSession();
  
  // في حالة تسجيل دخول اعرض هذا
  if (session && session.user) {
    return <Messages />;
  }
  // في حالة لم يتم تسجيل اعرض هذا
  return <Asiat />;
}
