import React from 'react'
const EmpCard = ({data}) => {
  return (
    <div className='flex justify-center items-center mt-3'>
          <div className='flex justify-evenly items-center w-[23rem] h-[5rem] bg-[#d8d8cfab] rounded-full cursor-pointer hover:scale-y-105'>
              <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt='user' className='w-[4.5rem] h-[4.5rem] rounded-full'/>
              <p className='font-bold text-xl font-serif w-[15rem]'>{data?.firstName} {data?.lastName}</p> 
              <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/remove-01-512.png" alt='cross' className='w-7 hover:scale-y-105 -ml-8'/>
      </div>
    </div>
  )
}

export default EmpCard
