import React from 'react'
import EmpCard from './EmpCard'
import { empData } from './constant'

const Dashboard = () => {
  return (
      <div className='flex justify-center items-center'>
          <div className='flex border-[1px] border-white w-[86rem] h-[38rem] mt-4'>
              <div className='w-[30%] h-full overflow-y-scroll scroll-smooth'>
                  {empData.map((i) => {
                      return <EmpCard key={i?.id} data={i} />
                  })
                  }
              </div>
              <div className='w-[70%] h-full'></div>
      </div>
    </div>
  )
}

export default Dashboard
