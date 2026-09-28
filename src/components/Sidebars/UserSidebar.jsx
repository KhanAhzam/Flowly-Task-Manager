import React from 'react'

import { NavLink } from "react-router-dom";

import { LayoutDashboard, ListTodo, UserGroup, CalendarDays, Bell, Settings } from "lucide-react";

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
    name: "Teams",
    path: "/user/team",
    icon: UserGroup
  },
  {
    name: "Calendar",
    path: "/user/calendar",
    icon: CalendarDays
  },
  {
    name: "Notification",
    path: "/user/notification",
    icon: Bell
  },
  {
    name: "Settings",
    path: "/user/settings",
    icon: Settings
  }
];

const UserSidebar = () => {
  return (
    <div 
      className='h-full flex flex-col py-10 items-center gap-6 bg-primary px-4'
    >
      {sidebarItems.map((item) => (
        <NavLink 
          key={item.name} 
          to={item.path}
          className={({ isActive }) => `flex items-center w-full px-6 gap-5 h-12 rounded-xl
            ${ isActive ? "bg-secondary text-primary" : "text-text-secondary hover:bg-secondary hover:text-primary" }`
          }
        >
          <item.icon size={28}/>
          <span className='text-lg font-semibold'>{item.name}</span>
        </NavLink>
      ))}

      {/* Profile */}
      <div className='rounded-full w-10 h-10 bg-blue-300 flex items-center justify-center'>
        {/* <img src="" alt="" /> */}
        <div className='text-white text-xl'> D </div>
      </div>


    </div>
  )
}

export default UserSidebar