import React, { useEffect, useState } from 'react'
import { getAllStudents } from '../services/StudentService';
import "./StudentList.css";
import CustomButton from './CustomButton';
import { RemoveIcon } from '../assets/Icons';

function StudentList() {

    const [students, setStudents] = useState([]);
    useEffect(() => {
        getAllStudents().then((response) => {
            setStudents(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [students])

    const deleteStudent = (id) => {
        if (window.confirm("Are you sure?")) {
            const newStudents = students.filter((student) => student.id !== id);
            // setStudents(newStudents);
            console.log(id);
        }
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
                                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded'
                                        onClick={() => { deleteStudent(student.id) }}>
                                        <RemoveIcon />
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