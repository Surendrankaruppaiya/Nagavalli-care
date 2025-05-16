import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Bank = () => {
  const navigate = useNavigate();

  return (
    <div className='my-20 px-6 sm:px-10 md:px-14 lg:px-20'>

      {/* Title Section */}
      <div className='flex flex-col items-center justify-center gap-4 text-gray-800 mb-12'>
        <h1 className='text-3xl font-semibold text-center'>🩸 Welcome to Nagavalli Blood Bank</h1>
        <p className='text-sm text-center text-gray-600'>Donate Blood, Save Lives</p>
      </div>

      {/* Image Section */}
      <div className='flex justify-center mb-10'>
        <div className='max-w-md w-full'>
          <img 
            className='w-full h-auto' 
            src={assets.blood} 
            alt="Blood Donation" 
          />
        </div>
      </div>

      {/* Text + Button Section */}
      <div className='flex justify-center'>
        <div className='text-center'>
          <h2 className='text-xl sm:text-1xl font-semibold  mb-4'>
            ❤️ Be a Hero. Donate Today.
          </h2>
          <button 
            onClick={() => { navigate('/BloodBankLandingPage'); window.scrollTo(0, 0); }} 
            className='bg-primary text-white px-8 py-3 rounded-full text-sm sm:text-base hover:scale-105 transition-all'>
            Check Availability
          </button>  
        </div>
      </div>
    </div>
  )
}

export default Bank





