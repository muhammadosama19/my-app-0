import Image from "next/image";
import ico from "@/assets/image/favicon.ico";

export default function Loading() {
  return (
    <main className="w-screen h-80 flex justify-center items-center">
      <div>
        <span className="loading loading-spinner loading-lg mt-5"></span>
      </div>
    </main>
  )
}
