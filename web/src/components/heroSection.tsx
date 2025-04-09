import { useNavigate } from "react-router-dom"

export const HeroSection=()=>{

    const navigate=useNavigate();

    return <div className="h-9/10 w-full font-poppins">
             <div className="w-full h-7/10 mt-8 flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center flex-col">
              <h1 className="text-6xl font-normal"> generate your Online </h1>
              <h1 className="text-6xl font-normal"><span className="font-caveat text-7xl">Student Card </span></h1>
              </div>

              <div className="p-2 flex flex-col p-12 items-center w-full justify-center">
                <p className="font-normal text-gray-700">Introducing the Online student's Id card Generator. generate your quick Id card </p> <p className="text-gray-700"> for free and easily </p>
              </div>

              <button onClick={()=>navigate("/generate")}  className="h-10 hover:bg-gray-900  bg-gray-700 text-white w-36 font-xl font-semibold bg-blue-400 cursor-pointer rounded-xl">Get started</button>
                
                <div className="w-full flex flex-col  mt-4 items-center justify-center">
                  <button className="text h-10 w-36 hover:bg-gray-800 bg-gray-500 text-white rounded-3xl cursor-pointer font-normal mt-2">Scroll Down</button>
                </div>

             </div>
    </div>
}