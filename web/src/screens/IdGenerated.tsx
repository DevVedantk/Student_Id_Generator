import { useNavigate } from "react-router-dom"
import { NavBar } from "../components/navbar"


export const IdGenerated=()=>{
    const navigate=useNavigate();

    return <div className="h-screen w-full">
      <NavBar/>
      <div className="w-full h-screen flex items-center justify-center">
             <div className="h-96 shadow-xl border-white font-poppins w-1/3 items-center flex flex-col bg-gray-100">
             <div className=" mt-8">
                <img className="h-24 cover" src="gif.gif" alt="" />
             </div>
                  <div className="mt-4">
                    <h1 className="text-2xl">Id Card Generated Successfully</h1>
                  </div>
                  <div className="text-gray-700 mt-4 flex-col w-full flex items-center justify-center">
                    <p>Your ID card has been successfully generated </p>
                    <p>and is ready for use. Check in your <span onClick={()=>navigate("/my-IdCard")} className="text-blue-400 cursor-pointer font-normal"> My Id </span></p>
                  </div>

                  <div className="mt-4">
                    <button onClick={()=>navigate("/my-IdCard")} className="h-10 bg-gray-700 text-white w-36 font-xl font-normal bg-blue-400 cursor-pointer rounded-3xl" >View Id</button>
                  </div>
             </div>
      </div>
    </div>
}