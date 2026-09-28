import React from 'react'
import { useContext} from 'react';
import { useNavigate } from "react-router-dom";

import Button1_SignOut from '../components/Buttons/Button1_SignOut'
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { signoutFn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleExit = (e) => {
        signoutFn();
        navigate("/signin");
    }

    return (
        <div className='flex justify-between items-center px-4 py-2 h-full bg-[#6D54B5]'>
        
            <div className="logo text-white text-5xl">
                LOGO
            </div>

            <div className="signout">
                <Button1_SignOut onClick={handleExit}>
                    Sign Out
                </Button1_SignOut>
            </div>

        </div>
    )
}

export default Navbar
