import { useLocation } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
export const Design1 = () => {

    const data = useLocation().state;
    return (
        <div className="flex items-center justify-center">

      
        <div className="bg-gray-100 flex items-center justify-center p-1">
            <div className="w-[400px] bg-white rounded-lg overflow-hidden shadow-xl border-2 border-blue-900">
                <div className="bg-white p-2 text-center">
                    <h1 className="text-2xl font-bold text-blue-900 mb-1">WALNUT SCHOOL PUNE</h1>
                    <p className="text-sm text-gray-600">WALNUT SCHOOL</p>
                </div>
                <div className="text-center py-2 bg-blue-900 text-white text-xl font-bold">
                    STUDENT ID CARD
                </div>

                <div className="p-4 flex justify-center">
                    <div className="w-28 h-32 bg-blue-100 rounded-lg overflow-hidden">
                        <img crossOrigin="anonymous"
                            src={data.Photo}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Details */}
                <div className="flex flex-col items-center px-4 pb-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{data.Name}</h2>
                    <div className="flex flex-col">
                        <p className="text-lg text-gray-600 mb-1">ROLL NO : {data.RollNo}</p>
                        <p className="text-lg text-gray-600 mb-1">RACK NO : {data.RackNumber}</p>
                        <p className="text-lg text-gray-600 mb-1">BUS ROUTE NO : {data.BusRoute}</p>
                        <p className="text-lg text-gray-600 mb-2">ALLERGIES :{data.Allergy} </p>
                        <p className="text-gray-600">Valid upto 31ST DEC 2025</p>
                    </div>

                    {/* Barcode and Signature */}
                    <div className="flex justify-between items-end px-8 mt-3">
                        <div className="text-left">
                            <div className="mt-4">
                                <QRCodeSVG
                                    value={JSON.stringify(data)}
                                    title="student data present in it"
                                    size={128}
                                    bgColor="#ffffff"
                                    fgColor="#000000"
                                    level="L"
                                    imageSettings={{
                                        src: "https://static.zpao.com/favicon.png",
                                        height: 16,
                                        width: 16,
                                        opacity: 1,
                                        excavate: true,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-blue-600 text-white p-2 text-center text-sm">
                    <p className="font-semibold mb-1">Inspired By Walnut Research institute in Pune, Maharashtra</p>
                    <p>Yashod Apt, 15th Lane Prabhat Road,</p>
                    <p> Pune, Maharashtra 411004, India</p>
                </div>
            </div>
        </div>


<div>
    <button className="h-10 w-32 bg-blue-300 cursor-pointer rounded-xl">Download</button>
</div>
</div>
    );
}