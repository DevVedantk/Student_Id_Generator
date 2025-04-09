import { IdCardDownload } from './IdCardDownload';


export const MyIds=({data}:any)=>{


  return (
    <div className=" bg-gray-50 p-8">
         <IdCardDownload data={data}/>
    </div>
  );
}