import React from 'react'

const TaskSummaryCard = ({ title, value, description, icon: Icon }) => {
    return (
        <div className="bg-background flex flex-col justify-between border border-border-secondary shadow-lg px-6 md:px-4 lg:px-6 py-6 rounded-2xl h-40">

            {/* Top */}
            <div className="flex justify-between items-center">
                <div className="text-text-tertiary font-semibold text-lg lg:text-xl">
                    {title}
                </div>

                <div className="bg-success-secondary p-3 rounded-xl">
                    <Icon className="text-success-primary w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </div>
            </div>

            {/* Bottom */}
            <div className="flex items-end gap-4">
                <div className="text-4xl font-bold">
                    {value}
                </div>

                <div className="text-success-primary font-bold">
                    {description}
                </div>
            </div>

        </div>
    )
}

export default TaskSummaryCard
