import { NavBar } from "../components/navbar"
import { StudentInfoForm } from "../components/studentform"

export const Generate=()=>{
    return <div className="h-screen w-full">
            <NavBar/>
            <div className="w-full h-9/10 flex items-center justify-center">
                <div>
                    <StudentInfoForm/>
                </div>

      {/* preview id card*/}
               
      <div className="h-full w-1/3 border-1 border-gray-300 rounded-xl justify-center items-center flex flex-col">
            <div className="w-full h-screen mt-8 ml-16">
            <img src="design1.jpg" className="h-1/3 mt-8 ml-8 w-1/3 cover" alt="" />
            <img src="design2.jpg" className="h-1/3 ml-56 w-1/3 cover" alt="" />
            </div>
      </div>
            </div>
    </div>
}