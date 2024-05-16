import React, { useEffect, useState } from 'react'
import { getAllStudents, deleteStudent } from '../services/StudentService';
import "./StudentList.css";
import { EditIcon, RemoveIcon } from '../assets/Icons';
import { chooseAlert } from './alerts/Alert';

function StudentList() {

    const [students, setStudents] = useState([]);
    useEffect(() => {
        getAllstudents();
    }, [students])

    function getAllstudents() {
        getAllStudents().then((response) => {
            setStudents(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    function deleteFetching(id) {
        deleteStudent(id).then((response) => {
            console.log(response.data);
            getAllstudents();
        }).catch((error) => {
            console.error(error);
        })
    }

    const removeStudent = (id) => {
        chooseAlert("Are you sure to delete this student?", "Yes, I'm Sure!", "No, Don't!", () => { deleteFetching(id) })      
    }


    return (
        <div className='container flex justify-center align-middle mx-10'>
            <table className='table'>
                <thead className=''>
                    <th className='tblHeader'>Name</th>
                    <th className='tblHeader'>Age</th>
                    <th className='tblHeader'>School</th>
                    <th className='tblHeader'>Address</th>
                    <th className='tblHeader'></th>
                </thead>
                <tbody className=''>
                    {
                        students.map(student =>
                            <tr key={student.id}>
                                <td className='tblRows'>{student.name}</td>
                                <td className='tblRows'>{student.age}</td>
                                <td className='tblRows'>{student.school}</td>
                                <td className='tblRows'>{student.address}</td>
                                <td className='tblRows'>
                                    <button className='bg-pink-600 hover:bg-pink-700 text-white font-bold p-2 rounded'
                                        onClick={() => { removeStudent(student.id) }}>
                                        <RemoveIcon />
                                    </button>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 p-2 rounded'
                                        onClick={() => { editStudent(student.id) }}>
                                        <EditIcon/>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StudentList