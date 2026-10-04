import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const AnalyticsCharts = ({ userTasks = [] }) => {

    // Status data
    const statusData = [
        {
            name: "Pending",
            value: userTasks.filter(task => task.status === "Pending").length,
            fill: "#f59e0b",
        },
        {
            name: "Completed",
            value: userTasks.filter(task => task.status === "Completed").length,
            fill: "#10b981",
        },
    ];

    // Pending data
    const pendingTasks = userTasks.filter(task => task.status === "Pending")

    // Priority data
    const priorityData = [
        {
            name: "High",
            value: pendingTasks.filter(task => task.priority === "High").length,
            fill: "#ef4444",
        },
        {
            name: "Medium",
            value: pendingTasks.filter(task => task.priority === "Medium").length,
            fill: "#f59e0b",
        },
        {
            name: "Low",
            value: pendingTasks.filter(task => task.priority === "Low").length,
            fill: "#10b981",
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* STATUS */}
            <div className="border border-border-secondary rounded-xl p-6">

                {/* Header */}
                <h2 className="text-lg font-semibold">
                    Tasks by Status
                </h2>

                {/* Pie */}
                <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={statusData}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={55}
                                outerRadius={90}
                                paddingAngle={2}
                                stroke="none"
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-6">
                    {statusData.map(item => (
                        <div
                            key={item.name}
                            className="flex items-center gap-2"
                        >
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.fill }}
                            />
                            <span>
                                {item.name} ({item.value})
                            </span>
                        </div>
                    ))}
                </div>

            </div>


            {/* PRIORITY */}
            <div className="border border-border-secondary rounded-xl p-6">

                {/* Header */}
                <h2 className="text-lg font-semibold">
                    Pending Tasks by Priority
                </h2>

                {/* Pie */}
                <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={priorityData}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={55}
                                outerRadius={90}
                                paddingAngle={2}
                                stroke="none"
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-6">
                    {priorityData.map(item => (
                        <div
                            key={item.name}
                            className="flex items-center gap-2"
                        >
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.fill }}
                            />
                            <span>
                                {item.name} ({item.value})
                            </span>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default AnalyticsCharts;