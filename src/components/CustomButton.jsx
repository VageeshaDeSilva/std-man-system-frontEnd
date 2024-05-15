import React from 'react'

function CustomButton(props) {
    return (
        <>
            <button className='flex gap-3 px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring'
                onClick={props.onClick}
            >
                {props.title} {props.icon}
            </button>
        </>
    )
}

export default CustomButton