import Link from "next/link";

export default function Login() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <form action="#" method="post">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="enter your name"
            className="border-2 border-collapse border-spacing-5 border-slate-100 placeholder:text-gray-500 focus-within:outline-1 focus-within:outline-gray-300 font-normal rounded-md p-2 m-1 w-80"
          />
          <br />
          <input
            type="email"
            name="email"
            id="emil"
            placeholder="enter E-mail"
            className="border-2 border-collapse border-spacing-5 border-slate-100 placeholder:text-gray-500 focus-within:outline-1 focus-within:outline-gray-300 font-normal rounded-md p-2 m-1 w-80"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter Password"
            className="border-2 border-collapse border-spacing-5 border-slate-100 placeholder:text-gray-500 focus-within:outline-1 focus-within:outline-gray-300 font-normal rounded-md p-2 m-1 w-80"
          />
          <br />
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
