import Loading from "@/app/loading";
import { Suspense } from "react";
import Login from "./Login";

export default function Modal() {
  return (
    <div>
        <label htmlFor="my_modal_1" className="btn">
        open modal
        </label>

        <input type="checkbox" id="my_modal_1" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box px-7 py-5 w-96 rounded-md">
                <h3 className="text-xl text-center text-black font-bold mb-2">انشاء حساب جديد</h3>
                <h3 className="text-lg text-center text-[#000000e3] font-normal mb-4">مرحبا, انت علي وشك انشاء حساب جديد في مجتمع رساله</h3>
            <Suspense fallback={<Loading />}>
                <Login />
            </Suspense>
            <div className="flex justify-center items-center mt-14 max-md:block max-md:mt-7">
                <button className="btn mr-2 bg-white border-2 w-40 max-md:w-full max-md:m-1">Google</button>
                <button className="btn ml-2 bg-white border-2 w-40 max-md:w-full max-md:m-1">Facebook</button>
            </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_1">
            Close
            </label>

        </div>
    </div>
  )
}
