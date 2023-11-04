'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import React from 'react'

export default function New() {
    const { data: session } = useSession();
  return (
    <div className='h-screen flex justify-center items-center'>
        <h1 className="text-4xl font-medium">Welcome, you new users on RSALA</h1>
    </div>
  )
}
