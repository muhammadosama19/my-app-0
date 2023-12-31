"use client"
import Image from "next/image";
import Link from "next/link";
import Aqssa from "@/assets/image/Aqssa.jpg";
import FreePalestine from "@/assets/image/FreePalestine.jpg";
import ico from "@/assets/image/favicon png.png";
import { signIn, signOut, useSession } from "next-auth/react";

export const Element_Left = () => {
  return (
    <div className="navbar-start z-50">
      <div className="dropdown">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content btn-ghost z-0" tabIndex={0}>
            {/* Page content here */}
            <label htmlFor="my-drawer" className="sm:hidden md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              >
                <Link href={"/afas/1564"} className="text-left">
                  <h1 className="w-full flex justify-start items-center p-3 m-1 hover:bg-base-300 text-base rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="font-bold mx-2">Home</span>
                  </h1>
                </Link>
              </label>
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              >
                <Link href={"/afas/1564"} className="text-left">
                  <h1 className="w-full flex justify-start items-center p-3 m-1 hover:bg-base-300 text-base rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="font-bold mx-2">Home</span>
                  </h1>
                </Link>
              </label>
            </ul>
          </div>
        </div>
      </div>
      <Link
        href={"/"}
        className="btn btn-ghost normal-case text-xl text-[#00B569]"
      >
    <Image
      src={ico}
      alt="Ico Rsala.com"
      className="w-[35px] h-[35px]"
    />
          
        Rsala
      </Link>
    </div>
  );
};
export const Element_Center = () => {
  return (
  <div className="">

    <div className="navbar-center hidden sm:flex">
      <ul className="menu sm:menu-horizontal rounded-box">
        <li>
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/profile"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            Profile
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            Updates
          </Link>
        </li>
      </ul>
    </div>
  </div>
  );
};
export const Element_Right = () => {
  const { data: session } = useSession();

  if (session && session.user) return (
    <div className="navbar-end">
      <div className="tooltip tooltip-bottom" data-tip="View Profile">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn bg-white rounded-full px-2 pr-3 max-lg:p-0 max-lg:mx-1 mx-5 border-none "
          >
            <Image
              src={Aqssa}
              alt="Not founded this avatar user"
              className="w-[40px] h-[40px] rounded-full object-cover object-center"
            />
            <div className="grid max-lg:hidden ">
              
              <h3 className="mb-1">{session.user.name}</h3>
              <h6 className="text-[0.7rem] text-left">@{session.user.username}</h6>
            </div>
          </label>
          <ul
            tabIndex={1}
            className="dropdown-content z-0 menu  shadow bg-base-100 rounded-md w-80"
          >
            <Image
              src={FreePalestine}
              alt="background profile"
              className="w-full h-24 object-cover rounded-md"
            />
            <div className="relative bottom-7 left-3 ">
              <Image
                src={Aqssa}
                alt="avatar profile"
                className="w-16 h-16 object-cover rounded-full border-2 border-solid"
              />
              <button className="px-5 py-1 border-[1px] rounded-lg border-base-300 bg-white hover:bg-base-300 relative bottom-7 left-[75px]">Copy Link</button>
              <div className="relative bottom-6 text-left">
                <h1 className="text-xl font-medium" >{session.user.name}</h1>
                <h1 className="text-xs text-gray-500">@{session.user.username}</h1>
              </div>
            </div>
            <div className="relative bottom-8">
              <Link href={'/profile'}><button className="btn w-full mt-2">ملف الشخصي</button></Link>
              <Link href={'/setting'}><button className="btn w-full mt-2">اعدادات</button></Link>
              <Link href={'/setting'}><button className="btn w-full mt-2">اعدادات</button></Link>
              <div className="relative top-8">
                <hr />
                <Link href={'/'}><button onClick={() => signOut()} className="btn w-full mt-2 bg-rose-500 text-white hover:bg-rose-600">تسجيل خروج</button></Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="navbar-end">
        <label htmlFor="my_modal_1" className="btn mr-3 bg-base-100">
          انشاء حساب
        </label>
        <Link href={'/signin'}>
          <button className="btn" >تسجيل دخول</button>
        </Link>
      </div>
    </>
  );

};



export default function Navigation() {
  return (
    <nav className="flex justify-center items-center">
      <div className="navbar bg-white h-10">
        <Element_Left />
        <Element_Center />
        <Element_Right />
      </div>
    </nav>
  );
}
