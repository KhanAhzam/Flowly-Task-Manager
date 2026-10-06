import React from 'react'
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import flowlyLogo from '../assests/flowly_logo.png'
import Button2 from '../components/Buttons/Button2';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { signoutFn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleExit = (e) => {
        signoutFn();
        navigate("/signin");
    }

    return (
        <div className='flex justify-between items-center pl-15 px-4 py-2 h-full bg-primary'>

            {/* Logo */}
            <div className="flex items-center gap-2">
                <img
                    src={flowlyLogo}
                    alt=""
                    className="w-14 h-14 object-contain"
                />

                <span className="text-4xl font-semibold text-secondary">
                    Flowly
                </span>
            </div>

            <Button2 onClick={handleExit} className='rounded-3xl px-5 py-1.5 cursor-pointer text-lg font-semibold'>
                Sign Out
            </Button2>

        </div>
    )
}

export default Navbar
