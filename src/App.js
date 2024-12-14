import React, { useState } from 'react'
import Dashboard from './Dashboard'
import AddForm from './AddForm';

const App = () => {
  const [addNew, setAddNew] = useState(false);
  return (
    <div>
      <div className='flex mt-5 justify-between'>
        <p className='font-bold text-3xl text-white ml-20'>EMPLOYEE MANAGEMENT SYSTEM</p>
        <button className='mr-28 bg-red-500 text-white text-xl font-bold px-5 py-2 rounded-full hover:scale-y-110'onClick={()=>setAddNew(true)}>ADD</button>
      </div>
      {addNew && <AddForm setAddNew={setAddNew}/>}
      <div>
        <Dashboard/>
      </div>
    </div>
  )
}

export default App
