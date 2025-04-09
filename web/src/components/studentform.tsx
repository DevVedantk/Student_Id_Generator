import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface StudentDataTypes{
  Name:string,
  RollNo:string,
  Allergy:string,
  RackNumber:string,
  Devision:string,
  BusRoute:string,
  Photo:string
}

export const StudentInfoForm=()=>{
  const [imagePreview, setImagePreview] = useState(null);
    
  const imgRef=useRef<any>(null);
    // const [data,setdata]=useState([]);
    const [img,setimg]=useState("");
  const nameRef=useRef<HTMLInputElement>(null);
  const RollNoRef=useRef<HTMLInputElement>(null);
  const AllergyRef=useRef<HTMLInputElement>(null);
  const RackNumberRef=useRef<HTMLInputElement>(null);
  const DevisionRef=useRef<HTMLSelectElement>(null);
  const BusRouteRef=useRef<HTMLSelectElement>(null);
  const navigate=useNavigate();

   const SubmitStudentData=()=>{
    
    if(nameRef.current?.value==="" || RollNoRef.current?.value==="" || AllergyRef.current?.value==="" ||RackNumberRef.current?.value===""||
      DevisionRef.current?.value===""|| BusRouteRef.current?.value==="" || imgRef.current?.value===""){
     alert("Enter Complete Details");
     return;
     } else{

    
    
       
        const StudentData:StudentDataTypes={
          Name:nameRef.current?.value || "",
          RollNo:RollNoRef.current?.value || "",
          Allergy:AllergyRef.current?.value || "",
          RackNumber:RackNumberRef.current?.value || "",
          Devision:DevisionRef.current?.value || "",
          BusRoute:BusRouteRef.current?.value || "",
          Photo:img
        }
        //@ts-ignore
        let ExistingData=JSON.parse(localStorage.getItem("studentData")) || [];
        ExistingData.push(StudentData);
        localStorage.setItem("studentData",JSON.stringify(ExistingData));
        navigate("/IdCard-generated")
      
  
  }
   }


   const handleImageChange =async(event:any) => {
    const file=event.target.files[0];
    if(!file) return;

    const data=new FormData();
    data.append("file",file);
    data.append("upload_preset","employapp");
    data.append("cloud_name","dnlqcnhoy");
    const resp=await axios.post("https://api.cloudinary.com/v1_1/dnlqcnhoy/image/upload",data);
       setimg(resp.data.url)
    setImagePreview(resp.data.url)
  };

  return (
    <div className=" h-2/3 bg-white p-8">
      <div className=" mx-auto">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">Student Information</h1>
          <p className="text-gray-600 mt-1">Enter the student details to generate an ID card</p>
        </div>

        <div className="bg-white rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-1">
                  Complete Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                 ref={nameRef}
                  placeholder="John"
                  className="w-full px-4 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-1">
                  Roll No
                </label>
                <input
                  type="text"
                 ref={RollNoRef}
                  placeholder="1101"
                  className="w-full px-4 py-2.5 rounded border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
            </div>


            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-1">
                  Allergies
                </label>
                <input
                  type="text"
                  ref={AllergyRef}
                  placeholder="e.g (water,fire)"
                  className="w-full px-4 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>


            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-900 mb-1">
                Rack Number
              </label>
              <input
                type="text"
                ref={RackNumberRef}
                placeholder="STU12345"
                className="w-full px-4 py-2.5 rounded border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-900 mb-1">
               Class/Devision
              </label>
              <select
                 ref={DevisionRef}
                 id='department'
                className="w-full px-4 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors appearance-none bg-white"
              >
                <option value="1A">1st Div A</option>
                <option value="1B">1st Div B</option>
                <option value="2A">2nd Div A</option>
                <option value="2B">2nd Div B</option>
                <option value="3A">3rd Div A</option>
                <option value="3B">3rd Div B</option>
                <option value="4A">4th Div A</option>
                <option value="4B">4th Div B</option>
                <option value="5A">5th Div A</option>
                <option value="5B">5th Div B</option>
                <option value="6A">6th Div A</option>
                <option value="6B">6th Div B</option>
              </select>
            </div>

            <div>
              <label htmlFor="academicYear" className="block text-sm font-medium text-gray-900 mb-1">
                Bus Route No
              </label>
              <select
                ref={BusRouteRef}
                className="w-full px-4 py-1 rounded border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors appearance-none bg-white"
              >
                <option value="A">Route A</option>
                <option value="B">Route B</option>
                <option value="C">Route C</option>
                <option value="D">Route D</option>
                <option value="E">Route E</option>
               
              </select>
            </div>

            <div className='mt-4'>
              <div className="flex gap-2 rounded-2xl cursor-pointer">
              <label htmlFor='uploadimg' className="block rounded-xl border-1 cursor-pointer h-10 w-28 flex items-center justify-center text-sm font-medium text-gray-900">
              Choose Photo
              </label>
              <input onChange={handleImageChange} className="hidden" id='uploadimg' type="file" ref={imgRef} />
              {imagePreview && (
          <div className="mt-2">
            <img
              src={imagePreview}
              alt="ID Preview"
              className="w-32 h-32 object-cover rounded border"
            />
          </div>
        )}
              </div>
            </div>

            <button  onClick={SubmitStudentData}
              type="submit"
              className="w-full py-3 mt-8 cursor-pointer px-4 bg-black text-white rounded font-medium hover:bg-gray-900 transition-colors"
            >
              Generate ID Card
            </button>
        </div>
      </div>
    </div>
  );
}
