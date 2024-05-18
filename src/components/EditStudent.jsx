import React, { useEffect, useState } from 'react'
import CustomButton from './CustomButton'
import { basicAlert, chooseAlert } from './alerts/Alert';
import { getStudent,updateStudent } from '../services/StudentService';
import { useNavigate,useParams } from 'react-router-dom';
import { AddIcon,BackIcon } from '../assets/Icons';

function EditStudent() {

  const {id}=useParams();

  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [school, setSchool] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(id){
      getStudent(id).then((response)=>{
        setName(response.data.name);
        setAge(response.data.age);
        setSchool(response.data.school);
        setAddress(response.data.address);
      }).catch((error) => {
        basicAlert("error", "Oops...", "Something went wrong!");
        console.log(error);
      });
    }
  },[id]);  
  
  const studentData = {
    name: name,
    age: age,
    school: school,
    address: address
  };

  function saveFetching(id,studentData) {
    updateStudent(id,studentData).then((response) => {
      console.log("successfully updated");
      // console.log(response.data);
    })
      .catch((error) => {
        basicAlert("error", "Oops...", "Something went wrong, NOT saved!");
        console.log(error);
      });
  }

  const editStdnt = () => {

    if (name === '' || age === '' || school === '' || address === '') {
      basicAlert("error", "Oops...", "Please fill all the fields!");
      return
    }

    chooseAlert("Are you sure to save this student details?", "Yes, I'm Sure!", "No, Don't!", ()=>{saveFetching(id,studentData)});
  }

  return (
    <>
      <div className="max-w-sm mx-auto mt-5 bg-white rounded-md shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-violet-600 text-white">
          <h1 className="text-lg font-bold">Edit Student Details</h1>
        </div>
        <div className="px-6 py-4">

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="name">
              Name
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="age">
              Age
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age" type="number" placeholder="20" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="school">
              School
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="school" type="text" placeholder="Okapathana Vidyalaya" value={school} onChange={(e) => setSchool(e.target.value)} />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="adress">
              Address
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" placeholder="No.1, Street Name" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>

          <div className="flex items-center justify-between">
            <CustomButton title="Save" icon={<AddIcon />} onClick={() => { editStdnt() }}/>
            <CustomButton title='Back' icon={<BackIcon />} onClick={() => { navigate('/student') }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default EditStudent