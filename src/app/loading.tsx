import Image from "next/image";
import ico from "@/image/favicon png.png";

export default function Loading() {
  return (
    <main className="w-screen h-80 flex justify-center items-center">
      <div>
        <Image 
          src={ico}
          alt="Ico Rsala.net"
        />
        <span className="loading loading-spinner loading-lg mt-5"></span>
      </div>
    </main>
  )
}
