import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, ListTodo, UserGroup, ChartPie, Plus, LogOut} from "lucide-react";
// { LayoutDashboard, ListTodo, UserGroup, ChartPie, CircleHelp, ArrowUpRight}

import AuthContext from "../context/AuthContext";

const MobileNavbar = () => {
    const navigate = useNavigate();
    const { user, signoutFn } = useContext(AuthContext);
    const [profileOpen, setProfileOpen] = useState(false);

    const navItems = [
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
    ];

    const handleExit = () => {
        signoutFn();
        navigate("/signin");
    }

    return (
        <div className="relative">

            {/* Profile Popup */}
            {profileOpen && (
                <div className="flex flex-col gap-3 absolute bottom-18 right-4 w-56 bg-background rounded-2xl shadow-2xl border border-border-primary/70 p-4">

                    {/* User */}
                    <div className="py-2 flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-success-primary text-secondary flex items-center justify-center font-semibold">
                            {user.name.charAt(0)}
                        </div>

                        <div className="min-w-0">
                            <div className="font-semibold truncate">
                                {user.name}
                            </div>

                            <div className="text-xs text-text-tertiary">
                                {user.jobRole}
                            </div>
                        </div>

                    </div>

                    <div className="border-b border-border-secondary"></div>

                    {/* Sign Out */}
                    <button className="py-2 w-full flex items-center gap-3 px-3 rounded-xl text-error-primary hover:bg-error-secondary" onClick={handleExit}>
                        <LogOut size={18} />
                        <span>Sign Out</span>
                    </button>

                </div>
            )}

            {/* Bottom Navigation */}
            <div className="bg-primary rounded-full px-5 py-2 my-4 mx-4 flex items-center justify-around shadow-2xl">

                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink key={item.name} to={item.path} onClick={() => setProfileOpen(false)}
                            className={({ isActive }) => `w-11 h-11 rounded-full flex items-center justify-center transition
                                ${isActive
                                        ? "bg-secondary text-primary"
                                        : "text-text-secondary"
                                }`
                            }
                        >
                            <Icon size={22} strokeWidth={2}/>
                        </NavLink>
                    );
                })}

                {/* Profile */}
                <button onClick={() => setProfileOpen(prev => !prev)} className="w-10 h-10 rounded-full bg-success-primary text-secondary flex items-center justify-center font-semibold">
                    {user.name.charAt(0)}
                </button>

            </div>

        </div>
    );
};

export default MobileNavbar;