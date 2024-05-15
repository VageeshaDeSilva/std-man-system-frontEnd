import React, { useEffect, useState } from 'react'
import { getAllStudents, deleteStudent } from '../services/StudentService';
import "./StudentList.css";
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
        // try {
        //     // const newStudents = students.filter((student) => student.id !== id);
        //     deleteStudent(id).then((response) => {
        //         console.log(response.data);
        //     }).catch((error) => {
        //         console.log(error);
        //     })
        //     console.log(id);
        // }
        // catch (error) {
        //     console.log(error);
        // }
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