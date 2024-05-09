import React,{useEffect, useState} from 'react'
import { getAllStudents } from '../services/StudentService';
import "./StudentList.css";

function StudentList() {

    const [students, setStudents] = useState([]);
    useEffect(() => {
        getAllStudents().then((response)=>{
            setStudents(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }, [students])

    return (
        <div>
            <table>
                <thead>
                    <th className='tblHeader'>Name</th>
                    <th className='tblHeader'>Age</th>
                    <th className='tblHeader'>School</th>
                    <th className='tblHeader'>Address</th>
                </thead>
                <tbody>
                    {
                        students.map(student=>
                            <tr key={student.id}>
                                <td className='tblRows'>{student.name}</td>
                                <td className='tblRows'>{student.age}</td>
                                <td className='tblRows'>{student.school}</td>
                                <td className='tblRows'>{student.address}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StudentList