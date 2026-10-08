import React from 'react'

import formatDate from '../utils/formatDate'
import team_card_image from "../assests/team_card_image.png"

const MemberCard = ({ member, showTaskStats = true }) => {
    return (
        <div className="border shadow border-border-secondary rounded-xl p-6"
            style={{
                backgroundImage: `url(${team_card_image})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center"
            }}
        >

            {/* Member Info */}
            <div className="flex items-center gap-6">

                {/* Profile */}
                <div className="w-30 h-30 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-white text-4xl font-semibold">
                        {member.name.charAt(0).toUpperCase()}
                    </span>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold">
                        {member.name}
                    </h2>
                    <span className="text-text-tertiary capitalize">
                        {member.jobRole}
                    </span>
                    <span className="text-text-tertiary">
                        {member.email}
                    </span>
                    <span className="text-text-tertiary">
                        Joined - {formatDate(member.joinDate)}
                    </span>
                </div>

            </div>

            {/* Task Statistics */}
            {showTaskStats && (
                <div className="grid grid-cols-3 border border-gray-200 rounded-lg mt-6 overflow-hidden">

                    <div className="p-3 text-center border-r border-gray-200">
                        <div className="font-semibold">
                            {member.totalTasks}
                        </div>

                        <div className="text-xs text-text-tertiary">
                            Tasks
                        </div>
                    </div>


                    <div className="p-3 text-center border-r border-gray-200">
                        <div className="font-semibold">
                            {member.completedTasks}
                        </div>

                        <div className="text-xs text-text-tertiary">
                            Completed
                        </div>
                    </div>


                    <div className="p-3 text-center">
                        <div className="font-semibold">
                            {member.pendingTasks}
                        </div>

                        <div className="text-xs text-text-tertiary">
                            Pending
                        </div>
                    </div>

                </div>
            )}

        </div>
    )
}

export default MemberCard