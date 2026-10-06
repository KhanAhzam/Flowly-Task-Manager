import React, { useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    ListTodo,
    UserGroup,
    ChartPie,
    CircleHelp,
    ArrowUpRight,
    LogOut,
    ChevronsUpDown
} from "lucide-react"

import flowlyLogo from '../assests/flowly_logo.png'
import AuthContext from '../context/AuthContext'
import helper_card_image from '../assests/helper_card_image.png'
import Button1 from '../components/Buttons/Button1';

const Sidebar = () => {
    const navigate = useNavigate();
    const { user, signoutFn } = useContext(AuthContext)

    const sidebarItems = [
        {
            name: "Dashboard",
            path: `/${user.role}/dashboard`,
            icon: LayoutDashboard
        },
        {
            name: "Tasks",
            path: `/${user.role}/tasks`,
            icon: ListTodo
        },
        {
            name: "Team",
            path: `/${user.role}/team`,
            icon: UserGroup
        },
        {
            name: "Analytics",
            path: `/${user.role}/analytics`,
            icon: ChartPie
        }
    ]

    const handleExit = () => {
        signoutFn();
        navigate("/signin");
    }

    return (
        <div className=" h-full flex flex-col justify-between bg-secondary shadow-lg rounded-r-[28px] overflow-hidden px-4 py-6 pb-10">

            {/* Upper Section */}
            <div>
                {/* Logo */}
                <div className="flex items-center pl-6 gap-2 px-3 pb-8">
                    <img src={flowlyLogo} alt="Flowly" className="w-15 h-15 object-contain" />
                    <span className="text-4xl font-bold text-primary">
                        Flowly
                    </span>
                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-2">
                    {sidebarItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `flex items-center gap-4 h-12 px-4 mx-4 rounded-lg
                                ${isActive
                                    ? "bg-primary text-secondary"
                                    : "text-primary hover:bg-primary hover:text-secondary"
                                }`
                            }
                        >

                            <item.icon
                                size={25}
                                strokeWidth={2}
                            />

                            <span className="text-lg font-semibold">
                                {item.name}
                            </span>

                        </NavLink>

                    ))}
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-5">

                {/* Helper Card */}
                <div className="rounded-2xl p-4 min-h-36 flex flex-col justify-evenly"
                    style={{
                        backgroundImage: `url(${helper_card_image})`,
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center"
                    }}
                >

                    <CircleHelp
                        size={18}
                        className="text-primary"
                    />

                    <div className='flex flex-col gap-1'>
                        <div className="text-sm font-semibold text-primary">
                            Need a hand?
                        </div>
                        <a href="mailto:flowlysupportdev@gmail.com" className="flex items-center gap-2 text-xs font-medium text-primary hover:underline decoration-primar">
                            Contact support
                            <ArrowUpRight size={13} />
                        </a>
                    </div>


                </div>

                {/* User Profile */}
                <div className="w-[80%] mx-auto flex items-center px-3 gap-3 mb-2 border-t border-b border-border-primary/50 py-8">

                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-success-primary flex items-center justify-center">
                        <span className="text-white text-lg">
                            {user.name.charAt(0)}
                        </span>
                    </div>

                    {/* User Info */}
                    <div className="flex flex-col flex-1 min-w-0">
                        <span className=" text-sm font-semibold text-text-primary">
                            {user.name}
                        </span>
                        <span className=" text-xs text-text-tertiary truncate">
                            Software Engineer
                        </span>
                    </div>

                </div>

                {/* Sign Out */}
                <Button1 className="w-[60%] mx-auto h-10 py-6 flex justify-center items-center gap-3 rounded-2xl"
                    onClick={handleExit}
                >
                    <span className="text-lg font-semibold">
                        Sign Out
                    </span>
                </Button1>

            </div>

        </div>
    )
}

export default Sidebar