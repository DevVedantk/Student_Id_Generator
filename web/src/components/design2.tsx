import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import * as htmlToImage from 'html-to-image';


export const Design2=()=>{

    const data=useLocation().state;
    const imageToPngRef=useRef(null);

    
        const htmlToImageConvert = async () => {
            try {
                //@ts-ignore
                const dataUrl = await htmlToImage.toPng(imageToPngRef.current, { cacheBust: true });
                const link = document.createElement('a');
                link.download = 'Student_Id_card.png';
                link.href = dataUrl;
                link.click();
            } catch (error) {
                console.error("Image conversion failed:", error);
            }
        };
        
  return (
    <div>
    <div className="min-h-screen flex bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div ref={imageToPngRef} className="w-[350px] bg-white shadow-2xl relative">
        {/* Top Design Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600 to-indigo-600 -z-10 transform translate-x-8 -translate-y-8"></div>
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center mb-4">
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-800">STUDENT</h1>
              <p className="text-sm text-gray-500">ID CARD</p>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="px-6 py-4 flex items-center">
          <div className="w-24 h-30 rounded-lg overflow-hidden border-4 border-indigo-100">
            <img crossOrigin="anonymous"
              src={data.Photo}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-800">{data.Name}</h2>
            <div className="flex items-center">
              <span className=" text-sm font-medium text-indigo-600">Roll No: {data.RollNo}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Rack No. : {data.RackNumber}</p>
            <p className="text-sm text-gray-500 mt-1">Bus Route: {data.BusRoute}</p>
            <p className="text-sm text-gray-500 mt-1">Allergies: {data.Allergy}</p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-indigo-50">
          <div className="space-y-3">
            <div className="flex flex-col items-center justify-center">
              <h1 className="ml-3 text-sm text-gray-600">Inspired By Walnut Research institute in Pune,</h1> <h1 className="ml-3 text-sm text-gray-600"> Maharashtra</h1> 
            </div>
            <div className="flex items-center justify-center">
              <span className="ml-3 text-sm text-gray-600"> Valid till : </span>
              <span className="ml-1 text-sm text-gray-600">31st Dec 2025</span>
            </div>
          </div>
        </div>

        {/* Footer with QR Code */}
        <div className="p-6 flex items-center justify-between border-t border-gray-100">
          <div className="w-20 h-32">
          <div className=" bg-green-400">
                                <QRCodeSVG
                                    value={JSON.stringify(data)}
                                    title="student data present in it"
                                    size={128}
                                    bgColor="#ffffff"
                                    fgColor="#000000"
                                    level="L"
                                />
                            </div>
          </div>
        </div>
      </div>


    <div className="p-8">
        <button onClick={htmlToImageConvert} className="text hover:bg-gray-900 h-10 w-36 bg-gray-500 text-white rounded-3xl cursor-pointer font-normal mt-2">Download</button>
    </div>
    </div>

    </div>
  );
}