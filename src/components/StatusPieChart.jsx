import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const StatusPie = ({ userTasks = [] }) => {

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

  return (
    <div className="border border-border-secondary rounded-xl p-6">

      <h2 className="text-xl font-semibold">
        Tasks by Status
      </h2>

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
  );
};

export default StatusPie;