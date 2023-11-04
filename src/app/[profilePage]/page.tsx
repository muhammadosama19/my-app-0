'use client'
import Image from "next/image";
import Aqssa from "@/assets/image/Aqssa.jpg";
import FreePalestine from "@/assets/image/FreePalestine.jpg";
import { useSession } from "next-auth/react";


export function Element2() {
  const { data: session } = useSession();

  return (
      <div className="sectionall border-spacing-1 border-[1px] rounded-md p-2 mt-2">
        <div>
          <div className="flex justify-between items-center">
            <span className="text-sm">4-11-2023</span>
            <h1 className="text-[#F5BC00] font-medium">Husam</h1>
          </div>
          <p className="my-1 text-right">Lorem Ipsum i s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div><Image src={Aqssa} alt="aqssa" className="imgflow rounded-full w-12 h-12 flex justify-center items-center object-cover object-center ml-2" /></div>
      </div>
  );
}
export default function User() {
  const { data: session } = useSession();

  return (
    <main className="flex justify-center items-center">
      <div className="w-[950px] max-md:w-full max-md:px-3 max-lg:w-full">
        <div>
          <Image
            src={FreePalestine}
            alt="Free palestine"
            className="w-screen h-56 object-cover object-center rounded-lg"
          />
          <div className="flex justify-between items-center">
            <Image
              src={Aqssa}
              alt="Free palestine"
              className="w-32 h-32 object-cover object-center rounded-full border-4 border-[#ffff] relative top-[-60px] left-5"
            />
            <button className="btn relative top-[-25px] mr-5 bg-base-100 w-40">
              Copy link
            </button>
          </div>
          <div>
            <h1 className="relative top-[-55px] left-2 text-2xl  text-black font-bold">
              mu7ammad osama
            </h1>
            <h4 className="relative top-[-55px] left-2 text-base text-gray-600 ">
              @mu7ammad
            </h4>
          </div>
        </div>






        <div className="flex justify-center items-start relative top-[-30px] max-md:flex-none max-md:grid">
          <div className="w-[580px] mr-5 p-2">
            <div className="">

            <div className="sectionall py-2">
              <textarea className="textarea textarea-accent" placeholder="Bio"></textarea>
              <Image src={Aqssa} alt="aqssa" className="imgflow rounded-full w-10 h-10 flex justify-center items-center object-cover object-center ml-2" />
            </div>
            <div className="flex justify-between items-center">
                <button type="submit" className="border border-base-300 bg-white py-1 px-10 rounded-md hover:bg-base-300">Send</button>
                <div className="relative right-14">
                  <span>img</span>
                </div>
            </div>
            </div>
            <h1 className="mt-5 text-2xl font-medium">Massages</h1>
            <div className="mt-7">
            <Element2 />
            <Element2 />
            <Element2 />
            </div>
          </div>
          <div className="elll w-80 border rounded-md p-2 text-base text-[#333333] flex justify-start">
            <div>
              <h3 className="flex justify-start mt-2">
              <i className="fi fi-sr-user ml-2"></i>
                <span>This official account by Hasub This official account by Hasub This official account by Hasub This official account by Hasub.</span>
              </h3>
              <h3 className="flex justify-start mt-2">
                <i className="fi fi-sr-marker ml-2"></i>
                <span>
                  Egypt, cairo
                </span>
              </h3>
              <h3 className="flex justify-start mt-2">
                <i className="fi fi-sr-circle-user ml-2"></i>
                <span>
                  Egypt, cairo
                </span>
              </h3>
            </div>
          </div>



        </div>




      </div>
    </main>
  );
}
