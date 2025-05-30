import { useNavigate } from "react-router-dom";
import { MyIds } from "../components/myIds"
import { NavBar } from "../components/navbar"

export const MyIdCard=()=>{
    const navigate=useNavigate();

    //@ts-ignore
    const StudentData=JSON.parse(localStorage.getItem("studentData"));
    const hascards=StudentData && StudentData.length >0
    return <div className="h-screen w-full">
         <NavBar/>
        <div className="flex items-center ml-32 flex-wrap">
            {
              hascards ?  StudentData.map((items:any,idx:any)=>
                    <MyIds key={idx} data={items} />
                ) : <p className="text-xl w-full text-center font-semibold text-black font-poppins">To generate ID click <span onClick={()=>navigate("/generate")} className="cursor-pointer text-blue-300"> here </span></p>
            }
        
        </div>

        <div className="w-full font-poppins min-h-screen">
            <div className="w-full flex justify-center">
            <h1 className="text-4xl flex mt-8">Choose Your template</h1>
            </div>
           
           <div className="flex w-full h-1/2 mt-8 items-center justify-center">
                <div className="flex">
                <div className="flex mr-32 h-[450px] bg-gray-200 rounded-xl w-78 flex-col items-center justify-center">
                <label className="font-semibold" htmlFor="">Design1</label>
            <img src="design1.png" className="h-96 w-64 cover" alt="" />
              </div>
              <div className="flex flex-col h-[450px] bg-gray-200 w-78 rounded-xl items-center justify-center">
              <label className="font-semibold" htmlFor="">Design2</label>
            <img src="design2.png" className="h-96 w-64 cover" alt="" />
              </div>
                </div>
           </div>       
        </div>
    </div>
}