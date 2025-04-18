import { useNavigate } from "react-router-dom"

export const NavBar=()=>{

const navigate=useNavigate();



    return <div className="w-full h-1/10 flex items-center justify-between">
          <div onClick={()=>navigate("/")} className="text-3xl cursor-pointer ml-12 font-semibold p-12 font-poppins">
                Id Generator           
          </div>

          <div className=" flex gap-8 mr-32 text-gray-700 list-none">
            <li onClick={()=>navigate("/")}  className="cursor-pointer hover:underline">Home</li>
            {/* <li onClick={()=>navigate("/")} className="cursor-pointer">About Us</li> */}
            <li onClick={()=>navigate("/generate")} className="cursor-pointer hover:underline">Generate</li>
            <li onClick={()=>navigate("/my-IdCard")} className="cursor-pointer hover:underline">My Id</li>
          </div>

          {/* <div className="p-12 mr-28">
            <button onClick={()=>navigate("/generate")} className="h-10 bg-gray-700 text-white w-36 font-xl font-semibold bg-blue-400 cursor-pointer rounded-xl">Generate</button>
          </div> */}
    </div>
}