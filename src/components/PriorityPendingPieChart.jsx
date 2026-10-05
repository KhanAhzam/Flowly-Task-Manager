import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const PriorityPendingPieChart = ({ userTasks = [] }) => {

  const pendingTasks = userTasks.filter(
    task => task.status === "Pending"
  );

  const priorityData = [
    {
      name: "High",
      value: pendingTasks.filter(
        task => task.priority === "High"
      ).length,
      fill: "#ef4444",
    },
    {
      name: "Medium",
      value: pendingTasks.filter(
        task => task.priority === "Medium"
      ).length,
      fill: "#f59e0b",
    },
    {
      name: "Low",
      value: pendingTasks.filter(
        task => task.priority === "Low"
      ).length,
      fill: "#10b981",
    },
  ];

  return (
    <div className="border border-border-secondary rounded-xl p-6">

      <h2 className="text-xl font-semibold">
        Pending Tasks by Priority
      </h2>

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
  );
};


export default PriorityPendingPieChart
