import React from 'react'
import StudentList from '../components/StudentList'

function Student() {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-5xl font-extrabold'>Students</h1>
            <div className='pt-10 flex justify-center'>
                <StudentList />
            </div>
        </div>
    )
}

export default Student