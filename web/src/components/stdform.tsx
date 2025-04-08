import React, { useState } from 'react';
import { Upload, Camera } from 'lucide-react';

export const StudentInfoForm=()=>{
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentId: '',
    department: '',
    academicYear: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className=" h-2/3 bg-white p-8">
      <div className=" mx-auto">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">Student Information</h1>
          <p className="text-gray-600 mt-1">Enter the student details to generate an ID card</p>
        </div>

        <div className="bg-white rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-1">
                  Complete Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
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
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
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
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="1101"
                  className="w-full px-4 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>


            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-900 mb-1">
                Rack Number
              </label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="STU12345"
                className="w-full px-4 py-2.5 rounded border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-900 mb-1">
               Class/Devision
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors appearance-none bg-white"
              >
                <option value="">1st Div A</option>
                <option value="computer-science">1st Div B</option>
                <option value="electrical">2nd Div A</option>
                <option value="mechanical">2nd Div B</option>
                <option value="civil">3rd Div A</option>
                <option value="business">3rd Div B</option>
                <option value="">4th Div A</option>
                <option value="computer-science">4th Div B</option>
                <option value="electrical">5th Div A</option>
                <option value="mechanical">5th Div B</option>
                <option value="civil">6th Div A</option>
                <option value="business">6th Div B</option>
              </select>
            </div>

            <div>
              <label htmlFor="academicYear" className="block text-sm font-medium text-gray-900 mb-1">
                Bus Route No
              </label>
              <select
                id="academicYear"
                name="academicYear"
                value={formData.academicYear}
                onChange={handleChange}
                className="w-full px-4 py-1 rounded border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors appearance-none bg-white"
              >
                <option value="">Route A</option>
                <option value="">Route B</option>
                <option value="">Route C</option>
                <option value="">Route D</option>
                <option value="">Route E</option>
               
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Photo
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex items-center gap-2 px-6 rounded border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <Upload size={18} />
                  Upload
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 cursor-pointer px-4 bg-black text-white rounded font-medium hover:bg-gray-900 transition-colors"
            >
              Generate ID Card
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
