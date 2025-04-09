import { StudentDataTypes } from './studentform';
import { IdCardDownload } from './IdCardDownload';


export const MyIds=({data}:any)=>{
  // Mock data for existing cards
  console.log("ye aya hain udhaa sein",data);
  //@ts-ignore
  const existingCards: StudentDataTypes[] =JSON.parse(localStorage.getItem("studentData"));
  console.log("this is our whole data",existingCards);


  return (
    <div className=" bg-gray-50 p-8">
         <IdCardDownload data={data}/>
    </div>
  );
}