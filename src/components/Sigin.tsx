import Link from "next/link";
import Model from "./Modal";

export default function Sigin() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <form action="#" method="post">
          <input
            type="email"
            name="email"
            id="emil"
            placeholder="enter E-mail"
            className="border-2 border-collapse border-spacing-5 border-slate-100 placeholder:text-gray-500 focus-within:outline-1 focus-within:outline-gray-300 font-normal rounded-md p-3 m-1 w-80"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter Password"
            className="border-2 border-collapse border-spacing-5 border-slate-100 placeholder:text-gray-500 focus-within:outline-1 focus-within:outline-gray-300 font-normal rounded-md p-3 m-1 w-80"
          />
          <br />
          <button
            type="submit"
            className="bg-blue-600 p-2 mt-3  w-full rounded-md text-white hover:bg-blue-500"
          >
            تسجيل دخول
          </button>
        </form>
      </div>
      <div>
          <p className="text-center mt-3 max-md:mt-7">تسجيل بواسطة</p>
        <div className="flex justify-center items-center mt-3 max-md:block max-md:mt-7">
          <button className="btn mr-2 bg-base-200 border-[1px] w-40 max-md:w-full max-md:m-1">Google</button>
          <button className="btn ml-2 bg-base-200 border-[1px] w-40 max-md:w-full max-md:m-1">Facebook</button>
        </div>
      </div>
      <div className="flex my-4 ">
        <span className="mr-2 text-center">Do not have an account</span>
        <Model />
      </div>
    </div>
  );
}
