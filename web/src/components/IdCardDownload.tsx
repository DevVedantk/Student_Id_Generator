import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const IdCardDownload=({data}:any)=>{

  
    const designRef=useRef<HTMLSelectElement>(null);
    const navigate=useNavigate();


    const generateId=()=>{
        console.log(typeof(designRef.current?.value));
        if(designRef.current?.value==="1"){
         navigate("/design1",{ state: data });
        } else if(designRef.current?.value==="2"){
            navigate("/design2",{ state: data });
        }
    }
    
    return <div className="h-96 font-poppins border-1 border-gray-300 flex flex-col items-center justify-center bg-gray-200 rounded-xl p-8 w-84">
          <div>
          <div className="flex items-center justify-center rounded-8xl">
                <img className="h-28 w-30 cover rounded-full" src={data.Photo} alt="" />
             </div>
             <div className="flex flex-col p-2 gap-1">
                <div>
                    <h1>Name : {data.Name}</h1>
                </div>

                <div>
                    <h1>Rack No : {data.RackNumber}</h1>
                </div>

                <div>
                    <h1>Bus Route No : {data.BusRoute}</h1>
                </div>

                <div>
                    <h1>Allergies : {data.Allergy}</h1>
                </div>

                <div className="flex flex-col mt-1 mb-1">
            <label>Select Design</label>
            <select ref={designRef} className="border-1 h-8 rounded-xl" name="" id="">
                <option value="1">Design1</option>
                <option value="2">Design2</option>
            </select>
               </div>

                <div>
                <button onClick={generateId} className="h-10 hover:bg-gray-900 bg-gray-700 text-white w-60 font-xl font-semibold bg-blue-400 cursor-pointer rounded-2xl">Download</button>
                </div>
             </div>
          </div>

    </div>
}