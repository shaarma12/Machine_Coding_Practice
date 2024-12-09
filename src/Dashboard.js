import React, { useState } from 'react'
import EmpCard from './EmpCard'
import { empData } from './constant'

const Dashboard = () => {
  const [onclickData, setonclickData] = useState(null);
  console.log("Data", onclickData);
  return (
      <div className='flex justify-center items-center'>
          <div className='flex border-[1px] border-white w-[86rem] h-[38rem] mt-4'>
              <div className='w-[30%] h-full overflow-y-scroll scroll-smooth'>
                  {empData.map((i) => {
                    return <EmpCard key={i?.id} data={i} onClick={()=>setonclickData(i)} />
                  })
                  }
              </div>
        <div className='w-[70%] h-full'>
          {onclickData&&<div className='flex flex-col justify-center items-center'>
            {onclickData?.sex === "Male"?<img src='https://cdn-icons-png.flaticon.com/512/11498/11498755.png' className='w-[15rem] mt-12' />:<img src='https://cdn-icons-png.flaticon.com/512/11498/11498793.png' className='w-[15rem] mt-12' />}
            <div className='flex mt-4'>
              <p className='text-white font-bold text-4xl mr-2'>{onclickData?.firstName}</p>
              <p className='text-white font-bold text-4xl'>{onclickData?.lastName}</p>
            </div>
              <p className='text-white font-bold text-2xl mt-1 ml-2'>{onclickData?.Designation}</p>
            <p className='text-white font-bold text-xl mt-1 ml-2'>{onclickData?.dob}</p>
            <p className='text-white font-bold text-xl mt-1 ml-2'>{onclickData?.sex}</p>
              <p className='text-white font-bold text-xl mt-1 ml-2'>{onclickData?.phoneNumber}</p>
             
          </div>}
              </div>
      </div>
    </div>
  )
}

export default Dashboard
