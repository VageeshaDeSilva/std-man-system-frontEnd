import React from 'react'
import StudentList from '../components/StudentList'
import './Student.css'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../components/CustomButton';

function Student() {

    const navigate = useNavigate();

    const addStudent = () => {
        navigate('/addStudent');
    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-5xl font-bold'>Students</h1>
            {/* <button className="btn-addStd" onClick={()=>{addStudent()}}>
                Add Student
            </button> */}
            <div className='ml-60 mt-10'>
                <CustomButton title='Add Student' onClick={() => { addStudent() }} />
            </div>
            <div className='pt-10 flex justify-center'>
                <StudentList />
            </div>
        </div>
    )
}

export default Student