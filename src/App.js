import React, { useState } from 'react'
import Dashboard from './Dashboard'
import AddForm from './AddForm';
import { empData as initialData } from './constant';
const App = () => {
  const [addNew, setAddNew] = useState(false);
  const [empData, setEmpData] = useState(initialData);
  const handleNewEmpData = (newEmpData) => {
    setEmpData((prevData) => [...prevData, newEmpData]);
  };
  const removeEmp = (phoneNumber) => {
    const newData = empData.filter((emp) => emp.phoneNumber !== phoneNumber);
    setEmpData(newData);
  };
  return (
    <div>
      <div className='flex mt-5 justify-between'>
        <p className='font-bold text-3xl text-white ml-20'>EMPLOYEE MANAGEMENT SYSTEM</p>
        <button className='mr-28 bg-red-500 text-white text-xl font-bold px-5 py-2 rounded-full hover:scale-y-110'onClick={()=>setAddNew(true)}>ADD</button>
      </div>
      {addNew && <AddForm setAddNew={setAddNew} handleNewEmpData={handleNewEmpData}/>}
      <div>
        <Dashboard empData={empData} removeEmp={removeEmp}/>
      </div>
    </div>
  )
}

export default App
