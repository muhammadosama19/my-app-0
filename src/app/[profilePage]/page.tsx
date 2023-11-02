import Image from "next/image";
import Aqssa from "@/assets/image/Aqssa.jpg";
import FreePalestine from "@/assets/image/FreePalestine.jpg";
import React from "react";

export default function User() {
  return (
    <main className="flex justify-center items-center">
      <div className="w-[600px]">
        <div>
          <Image
            src={FreePalestine}
            alt="Free palestine"
            className="w-screen h-32 object-cover object-center rounded-lg"
          />
          <div className="flex justify-between items-center">
            <Image
              src={Aqssa}
              alt="Free palestine"
              className="w-28 h-28 object-cover object-center rounded-full border-4 border-white relative top-[-55px] left-8"
            />
            <button className="btn relative top-[-25px] mr-5 bg-base-100 w-40">
              Copy link
            </button>
          </div>
          <div>
            <h1 className="relative top-[-55px] left-7 text-2xl  text-black font-bold">
              mu7ammad osama
            </h1>
            <h4 className="relative top-[-55px] left-7 text-base text-gray-600 ">
              @mu7ammad
            </h4>
            <h1 className="relative top-[-32px] left-7 text-lg text-black font-bold">
              Bio
            </h1>
            <h4 className="relative top-[-30px] left-7 text-base text-gray-600 ">
              www.google.com’s server IP address could not be found.
              www.google.com’s server IP address could not be found.
              www.google.com’s www.goog.
            </h4>
          </div>
          <div className="mt-5 flex justify-center">
            <div className="w-full">
              <textarea
                name="textarea"
                id="textarea"
                placeholder="enter this msg"
                className="border-2 w-full h-64 p-2 rounded-md focus-within:outline-none"
              ></textarea>
              <button className="btn w-60">Send MSG</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
