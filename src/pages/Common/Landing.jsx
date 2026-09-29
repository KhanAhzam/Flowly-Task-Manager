import React from 'react'

import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <button 
                className='bg-black text-white cursor-pointer rounded-2xl p-4 text-4xl' 
                onClick={() => navigate("/signin")} >
                CLICK HERE
            </button>
        </div>
    )
}

export default Landing
