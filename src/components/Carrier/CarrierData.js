import React from 'react';

const careers = [
  {
    title: 'Online Quran Teacher',
    description: 'We are looking for qualified Quran teachers who can teach online courses to students globally.',
    qualifications: ['Fluent in Arabic', 'Strong Tajweed knowledge', 'Previous teaching experience'],
    applyLink: '/apply/quran-teacher',
  },
  {
    title: 'Student Support Representative',
    description: 'Help students with their queries, course registration, and technical issues.',
    qualifications: ['Good communication skills', 'Experience in customer support'],
    applyLink: '/apply/student-support',
  },
];

function CarrierData() {
  return (
    <div className="py-16 bg-blueGray-800">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-12">Carrier</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careers.map((career, index) => (
            <div key={index} className="p-8 bg-yellow-500 shadow-lg rounded-lg mt-5">
              <h3 className="text-2xl font-semibold mb-4">{career.title}</h3>
              <p className="mb-4">{career.description}</p>
              <ul className="mb-4">
                {career.qualifications.map((qual, i) => (
                  <li key={i} className="text-sm text-gray-600">- {qual}</li>
                ))}
              </ul>
              <a
                href={career.applyLink}
                className="text-blue-500 hover:underline"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarrierData;
