import React from 'react'

const AddForm = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-40'>
      <div className='relative bg-[#999999ab] w-[37rem] rounded-lg shadow-lg shadow-black'> 
        <form className='flex justify-center items-center'>
          <div className='m-4'>
          <div className='w-full mt-5'>
            <label htmlFor='firstName' className='text-2xl font-semibold p-2'>First Name</label>
              <input id='firstName' type='text' className='w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-6 placeholder:text-lg' required placeholder='Please Enter Your First Name'/>
          </div>
          <div className='w-full mt-2'>
            <label htmlFor='lastName' className='text-2xl font-semibold p-2'>Last Name</label>
              <input id='lastName' type='text' className='w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-6 placeholder:text-lg' required placeholder='Please Enter Your Last Name'/>
            </div>
          <div className='w-full mt-2'>
            <label htmlFor='dob' className='text-2xl font-semibold p-2'>DOB</label>
              <input id='dob' type="date" className='w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-[5.5rem] placeholder:text-lg' required placeholder='Please Enter Your DOB'/>
            </div>
          <div className='w-full mt-2'>
            <label htmlFor='phoneNumber' className='text-2xl font-semibold p-2'>Phone</label>
              <input id='phoneNumber' type="number" className='w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-[4.2rem] placeholder:text-lg' required placeholder='Please Enter Your Phone Number'/>
            </div>
          <div className='w-full mt-2'>
            <label htmlFor='gender' className='text-2xl font-semibold p-2'>Gender</label>
              <input id='gender' type="text" className='w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-14 placeholder:text-lg' required placeholder='Please Enter Your Gender'/>
            </div>
          <div className='w-full mt-2'>
            <label htmlFor='Designation' className='text-2xl font-semibold p-2'>Designation</label>
              <input id='Designation' type="text" className='w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-1 placeholder:text-lg' required placeholder='Please Enter Your Designation'/>
            </div>
            <div className='flex justify-center items-center w-full'>
              <button className='mt-7 mb-3 bg-blue-700 w-full p-2 text-white text-lg font-bold rounded-lg hover:bg-opacity-70'>ADD</button>
              </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddForm
