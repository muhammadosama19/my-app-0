import Login from "./Login";
import Signin from "./Sigin";
import FreePalestine from '@/image/FreePalestine.jpg'

export default function Asiat() {
  return (
    <main 
      style={{color: "#000000",backgroundImage: `${FreePalestine}`}}
      className="flex justify-center items-center my-10 ">
        <div  className="bg-slate-50 rounded-lg p-5 py-14">
          <Signin />
        </div>
    </main>
  )
}