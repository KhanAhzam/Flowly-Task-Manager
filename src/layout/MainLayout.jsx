import React, { useContext } from 'react'
import { Outlet } from "react-router-dom"

import Navbar from './Navbar'
import UserSidebar from '../components/Sidebars/UserSidebar'
import AdminSidebar from '../components/Sidebars/AdminSidebar'

import AuthContext from '../context/AuthContext'

const MainLayout = () => {
    const { user } = useContext(AuthContext);

    return (    
        <div className="h-screen flex flex-col overflow-hidden">                                                        {/* Overflow - hidden */}

            {/* Header/Navbar */}
            <div className="Navbar h-[10%] w-full">
                <Navbar/>
            </div>
            
            {/* Mainbox */}
            <div className="Mainbox flex-1 w-full flex min-h-0">

            <div className="w-[15%]">
                {user.role === "admin" ? <AdminSidebar /> : <UserSidebar />}
            </div>

            <div className="Maincontent flex-1">
                <Outlet/>
            </div>

            </div>

        </div>
    )
}

export default MainLayout
