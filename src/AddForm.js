import React, { useEffect, useRef, useState } from "react";

const AddForm = ({ setAddNew,handleNewEmpData }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
    sex: "",
    Designation: "",
  });
  const formRef = useRef();

  // Closing of Modal form when click outside of the form.
  useEffect(() => {
    const handleClick = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setAddNew(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setAddNew]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value   // overriding of the data.
    });
  };
 // on-submit of the form
  const handleSubmit = async(e) => {
    e.preventDefault();
    handleNewEmpData(data);
    setAddNew(false);
    setTimeout(() => alert("New User Added SuccessFully!"), 500);

    //when we have to store it through POST API.

    // try {
    //   const response = await fetch('https://your-api-endpoint.com/employees', {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "applicaton/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok)
    //   {
    //     const result = await response.json();
    //     setData(false);
    //     alert("New User Added SuccessFully!");
    //     console.log(result);
    //   }
    //   else {
    //     console.error("Something went Wrong!");
    //     alert("User is not Added!");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
      <div
        className="relative bg-[#999999ab] w-[37rem] rounded-lg shadow-lg shadow-black border border-black"
        ref={formRef}
      >
        <form className="flex justify-center items-center" onSubmit={handleSubmit}>
          <div className="m-4">
            <div className="w-full mt-5">
              <label htmlFor="firstName" className="text-2xl font-semibold p-2">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-6 placeholder:text-lg"
                required
                placeholder="Please Enter Your First Name"
                onChange={handleChange}
              />
            </div>
            <div className="w-full mt-2">
              <label htmlFor="lastName" className="text-2xl font-semibold p-2">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-6 placeholder:text-lg"
                required
                placeholder="Please Enter Your Last Name"
                onChange={handleChange}
              />
            </div>
            <div className="w-full mt-2">
              <label htmlFor="dob" className="text-2xl font-semibold p-2">
                DOB
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                className="w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-[5.5rem] placeholder:text-lg"
                required
                placeholder="Please Enter Your DOB"
                onChange={handleChange}
              />
            </div>
            <div className="w-full mt-2">
              <label
                htmlFor="phoneNumber"
                className="text-2xl font-semibold p-2"
              >
                Phone
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="number"
                className="w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-[4.2rem] placeholder:text-lg"
                required
                placeholder="Please Enter Your Phone Number"
                onChange={handleChange}
              />
            </div>
            <div className="w-full mt-2">
              <label htmlFor="gender" className="text-2xl font-semibold p-2">
                Gender
              </label>
              <input
                id="gender"
                name="sex"
                type="text"
                className="w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-14 placeholder:text-lg"
                required
                placeholder="Please Enter Your Gender"
                onChange={handleChange}
              />
            </div>
            <div className="w-full mt-2">
              <label
                htmlFor="Designation"
                className="text-2xl font-semibold p-2"
              >
                Designation
              </label>
              <input
                id="Designation"
                name="Designation"
                type="text"
                className="w-[25rem] h-[2rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-500 p-2 ml-1 placeholder:text-lg"
                required
                placeholder="Please Enter Your Designation"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center items-center w-full">
              <button type="submit" className="mt-7 mb-3 bg-blue-700 w-full p-2 text-white text-lg font-bold rounded-lg hover:bg-opacity-70">
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
