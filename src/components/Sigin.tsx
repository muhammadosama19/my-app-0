import Link from "next/link";

export default function Signin() {
  return (
    <div >
      <h1 className="text-2xl font-medium text-center mb-2">تسجيل دخول</h1>
      <h1 className="text-base font-normal text-center mb-5">تسجيل دخول</h1>
      <div className="flex justify-center items-center">
        <form action="#" method="post">
        <input
            type="text"
            name="text"
            id="text"
            placeholder="enter your name"
            className="border-2 border-collapse border-spacing-5 border-slate-100 placeholder:text-gray-500 focus-within:outline-1 focus-within:outline-gray-300 font-normal rounded-md p-2 m-1 h-14 w-96 text-base"
          />
          <br />
          <input
            type="email"
            name="email"
            id="emil"
            placeholder="enter E-mail"
            className="border-2 border-collapse border-spacing-5 border-slate-100 placeholder:text-gray-500 focus-within:outline-1 focus-within:outline-gray-300 font-normal rounded-md p-2 m-1 h-14 w-96 text-base"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter Password"
            className="border-2 border-collapse border-spacing-5 border-slate-100 placeholder:text-gray-500 focus-within:outline-1 focus-within:outline-gray-300 font-normal rounded-md p-2 m-1 h-14 w-96 text-base"
          />
          <br />
          <h6 className="my-2 mx-3">
            Having trouble in 
            <Link href={"/Signin"} className="text-blue-500 mx-1">
              Signin
            </Link>
            ?
          </h6>
          <button
            type="submit"
            className="bg-[#6666ff] p-2 mt-3  w-full rounded-md text-white"
          >
            تسجيل حساب جديد
          </button>
        </form>
      </div>
    </div>
  );
}
