import { Download, ChevronRight } from 'lucide-react';

interface StudentCard {
  id: string;
  firstName: string;
  lastName: string;
  studentId: string;
  department: string;
  academicYear: string;
  photo: string;
  createdAt: string;
  validUntil: string;
  status: 'active' | 'expired';
}

export const MyIds=()=>{
  // Mock data for existing cards
  const existingCards: StudentCard[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      studentId: 'STU12345',
      department: 'Computer Science',
      academicYear: 'First Year',
      photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=120&h=120&fit=crop',
      createdAt: '2024-03-10',
      validUntil: '2025-03-10',
      status: 'active'
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      studentId: 'STU12346',
      department: 'Electrical Engineering',
      academicYear: 'Second Year',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
      createdAt: '2024-03-09',
      validUntil: '2025-03-09',
      status: 'active'
    },
    {
      id: '3',
      firstName: 'Michael',
      lastName: 'Johnson',
      studentId: 'STU12347',
      department: 'Mechanical Engineering',
      academicYear: 'Third Year',
      photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop',
      createdAt: '2024-03-08',
      validUntil: '2025-03-08',
      status: 'active'
    }
  ];

  return (
    <div className=" bg-gray-50 p-8">
      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {existingCards.map(card => (
          <div key={card.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Card Preview */}
            <div className="aspect-[1.586/1] relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src={card.photo}
                    alt={`${card.firstName} ${card.lastName}`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-sm object-cover"
                  />
                  <h3 className="font-semibold text-gray-900">{`${card.firstName} ${card.lastName}`}</h3>
                  <p className="text-sm text-gray-500">{card.studentId}</p>
                </div>
              </div>
            </div>

            {/* Card Details */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Department</span>
                  <span className="text-gray-900">{card.department}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Academic Year</span>
                  <span className="text-gray-900">{card.academicYear}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Valid Until</span>
                  <span className="text-gray-900">{card.validUntil}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button  className="flex-1 cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}