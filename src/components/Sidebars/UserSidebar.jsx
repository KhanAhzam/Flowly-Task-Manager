import React, { useContext } from 'react'

import { LayoutDashboard, ListTodo, UserGroup, ChartPie } from "lucide-react";
import { NavLink } from "react-router-dom";
import AuthContext from '../../context/AuthContext';

const sidebarItems = [
  {
    name: "Dashboard",
    path: "/user/dashboard",
    icon: LayoutDashboard
  },
  {
    name: "Tasks",
    path: "/user/tasks",
    icon: ListTodo
  },
  {
    name: "Team",
    path: "/user/team",
    icon: UserGroup
  },
  {
    name: "Analytics",
    path: "/user/analytics",
    icon: ChartPie
  }
];

const UserSidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='h-full flex flex-col py-8 items-center bg-primary px-4 justify-between'>

      {/* Sidebar Options */}
      <div
        className='flex flex-col items-center gap-3'
      >
        {sidebarItems.map((item) => (
          <NavLink 
          key={item.name} 
          to={item.path}
          className={({ isActive }) => `flex items-center w-full px-6 gap-6 h-12 rounded-xl
          ${ isActive ? "bg-secondary text-primary" : "text-text-secondary hover:bg-secondary hover:text-primary" }`
        }
        >
            <item.icon size={24}/>
            <span className='text-lg font-semibold'>{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Profile */}
      <div className='rounded-2xl h-13 px-4 bg-secondary flex items-center gap-5 cursor-pointer'>

        {/* Image */}
        <div className='rounded-full w-10 h-10 bg-error-primary flex items-center justify-center'>
          {/* <img src="" alt="" /> */}
          <div className='text-white text-xl'> D </div>
        </div>

        {/* Name - Role */}
        <div className='flex flex-col items-center'>
          <div className='text-sm text-primary font-semibold'>
            {user.name}
          </div>
          <div className='text-xs text-primary font-semibold'>
            Software Engineer
          </div>
        </div>

      </div>

    </div>
  )
}

export default UserSidebar