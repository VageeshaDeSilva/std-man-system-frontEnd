import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { basicAlert, chooseAlert } from './alerts/Alert';

function AddStudent() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [school, setSchool] = useState('');
  const [address, setAddress] = useState('');

  function printDetails(){
    console.log("name", name);
    console.log("age", age);
    console.log("school", school);
    console.log("address", address);
  }

  const addStudent = () => {

    if(name === '' || age === '' || school === '' || address === '') {
      basicAlert("error","Oops...","Please fill all the fields!");
      return     
    }
    chooseAlert("Are you sure to add this student?","Yes, I'm Sure!","No, Don't!",printDetails,clearFields);
  }

  const clearFields = () => {
    setName('');
    setAge('');
    setSchool('');
    setAddress('');
  }

  return (
    <>
      <div className="max-w-sm mx-auto mt-5 bg-white rounded-md shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-violet-600 text-white">
          <h1 className="text-lg font-bold">Add Student Details</h1>
        </div>
        <div className="px-6 py-4">

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="name">
              Name
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="age">
              Age
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age" type="number" placeholder="20" value={age} onChange={(e) => setAge(e.target.value)}/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="school">
              School
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="school" type="text" placeholder="Okapathana Vidyalaya" value={school} onChange={(e) => setSchool(e.target.value)}/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="adress">
              Address
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" placeholder="No.1, Street Name" value={address} onChange={(e) => setAddress(e.target.value)}/>
          </div>

          <CustomButton title="Add" onClick={() => { addStudent() }} />
        </div>
      </div>
    </>
  )
}

export default AddStudent