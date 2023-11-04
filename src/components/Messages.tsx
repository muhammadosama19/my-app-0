import Image from "next/image"
import { signIn, signOut, useSession } from "next-auth/react";
import Aqssa from "@/assets/image/Aqssa.jpg";


export function Element1() {
  return (
    <div className="mb-5">
      <h1 className="text-3xl font-medium text-left">Your Massages</h1>
    </div>
  )
}

export function Element2() {
  const { data: session } = useSession();

  return (
      <div className="sectionall py-2 border-spacing-1 border-b-[1px]">
        <div className=""><Image src={Aqssa} alt="aqssa" className="imgflow rounded-xl w-12 h-12 flex justify-center items-center object-cover object-center" /></div>
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-[#F5BC00] font-medium">Husam</h1>
            <span className="text-sm">4-11-2023</span>
          </div>
          <p className="my-1">Lorem Ipsum i s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
  );
}

export function Element3() {
  return (
    <div>Element1</div>
  )
}

export default function Messages() {
  return (
    <main className="flex justify-center items-center">
      <div className="w-[550px] h-screen max-lg:w-11/12 max-sm:m-0 max-sm:w-full p-3">
        <Element1 />
        <Element2 />
        <Element2 />
        <Element2 />
        <Element2 />
        <Element2 />
        <Element2 />
        <Element2 />
        <Element2 />
        <Element3 />
      </div>
    </main>
  )
}
