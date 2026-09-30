import React, { useContext } from 'react'

import accounts from '../../data/accounts'
import tasks from '../../data/tasks'
import AuthContext from '../../context/AuthContext'
import MemberCard from '../../components/MemberCard'

const UserTeam = () => {

    const { user } = useContext(AuthContext)

    // Add task statistics to every account
    const teamMembers = accounts.map(member => {

        const memberTasks = tasks.filter(
            task => task.assignedTo === member.id
        )

        return {
            ...member,

            totalTasks: memberTasks.length,

            completedTasks: memberTasks.filter(
                task => task.status === "Completed"
            ).length,

            pendingTasks: memberTasks.filter(
                task => task.status === "Pending"
            ).length
        }
    })


    // Separate admins and users
    const admins = teamMembers.filter(
        member => member.role === "admin"
    )

    const users = teamMembers.filter(
        member => member.role === "user"
    )


    return (
        <div className="p-10">
            <div className="shadow-lg rounded-xl pt-5 p-10 flex flex-col gap-10">

                {/* Header */}
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold text-text-tertiary">
                        Team
                    </h1>
                    <div className="text-[44px] leading-10 font-semibold">
                        All Members.
                    </div>
                </div>

                {/* Admins */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl font-semibold">
                        Admins
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {admins.map(member => (
                            <MemberCard
                                key={member.id}
                                member={member}
                            />
                        ))}
                    </div>
                </div>

                {/* Users */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl font-semibold">
                        Users
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {users.map(member => (
                            <MemberCard
                                key={member.id}
                                member={member}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserTeam