import { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: "Not found this page",
  description: 'Generated by create next app',
  keywords: ['Rsala', 'rsala.net', 'majhoul'],

}
export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center  w-full h-screen bg-white  ">
      <h2 className='font-bold text-4xl'>Not Found This Page</h2>
    </main>
  )
}