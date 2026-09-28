import React from 'react'
import { Outlet } from "react-router-dom"

import Navbar from './Navbar'
import UserSidebar from '../components/Sidebars/UserSidebar'

const UserLayout = () => {
  return (    
    <div className="h-screen flex flex-col overflow-hidden">                                                        {/* Overflow - hidden */}

        {/* Header/Navbar */}
        <div className="Navbar h-24 w-full">
          <Navbar/>
        </div>
        
        {/* Mainbox */}
        <div className="Mainbox flex-1 w-full flex min-h-0">

          <div className="Sidebar w-32">
            <UserSidebar/>
          </div>

          <div className="Maincontent flex-1">
            <Outlet/>
          </div>

        </div>

    </div>
  )
}

export default UserLayout
