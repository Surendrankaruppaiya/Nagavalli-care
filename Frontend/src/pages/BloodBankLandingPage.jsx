import React, { useState } from 'react';
import { assets } from '../assets/assets';

const bloodInventory = {
  "A+": 2,
  "O+": 3,
  "B+": 1,
  "AB+": 0,
  "O-": 1,
  "A-": 0,
  "B-": 2,
  "AB-": 1
};

const BloodBankLandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const bloodCount = bloodInventory[searchQuery.toUpperCase()];
    if (bloodCount !== undefined) {
      setResult(`${searchQuery.toUpperCase()} : ${bloodCount} package(s) available`);
    } else {
      setResult('Blood group not found or unavailable');
    }
  };

  return (
    <>
      
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">🩸 Nagavalli Blood Bank</h1>
        <p className="text-sm text-gray-600 mb-4">Real-time Blood Availability & Donation Portal</p>
        <div className="flex justify-center">
          <img className="w-32 sm:w-40 md:w-48" src={assets.donate} alt="Donate Blood" />
        </div>
      </div>

      
      <div className="flex flex-col items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Enter blood group (e.g., A+)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-60 text-center"
        />
        <button
          onClick={handleSearch}
          className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition-all"
        >
          Search
        </button>
        {result && <p className="text-base font-semibold text-green-600">{result}</p>}
      </div>

    
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-red-600 uppercase mb-4">Learn About Donation</h2>
        <p className="text-gray-700 mb-6">
          One Blood Donation can save up to <span className="font-bold text-red-500">Three Lives</span>
        </p>
      </div>

      
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-4 text-left">Blood Type</th>
              <th className="py-3 px-4 text-left">Donate Blood To</th>
              <th className="py-3 px-4 text-left">Receive Blood From</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-3 px-4">A+</td>
              <td className="py-3 px-4">A+, AB+</td>
              <td className="py-3 px-4">A+, A-, O+, O-</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">O+</td>
              <td className="py-3 px-4">O+, A+, B+, AB+</td>
              <td className="py-3 px-4">O+, O-</td>
            </tr>
            <tr>
              <td className="py-3 px-4">B+</td>
              <td className="py-3 px-4">B+, AB+</td>
              <td className="py-3 px-4">B+, B-, O+, O-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BloodBankLandingPage;
