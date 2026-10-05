import React, { useState } from "react"
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import { ChevronDown } from "lucide-react"

const AdminAnalyticsCharts = ({ tasks = [], users = [] }) => {

  // null = ALL USERS
  const [selectedUser, setSelectedUser] = useState("all")


  // --------------------------------
  // TASKS TO SHOW IN PIE CHART
  // --------------------------------

  const selectedTasks =
    selectedUser === "all"
      ? tasks
      : tasks.filter(
          task => task.assignedTo === selectedUser
        )


  // --------------------------------
  // PIE DATA
  // --------------------------------

  const statusData = [
    {
      name: "Pending",
      value: selectedTasks.filter(
        task => task.status === "Pending"
      ).length,
      fill: "#f59e0b"
    },
    {
      name: "Completed",
      value: selectedTasks.filter(
        task => task.status === "Completed"
      ).length,
      fill: "#10b981"
    }
  ]


  return (
    <div className="border border-border-secondary rounded-xl p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-semibold">
            Tasks by Status
          </h2>

          <p className="text-text-tertiary">
            {selectedUser === "all"
              ? "All users"
              : users.find(
                  user => user.id === selectedUser
                )?.name
            }
          </p>
        </div>


        {/* Dropdown */}
        <div className="relative">

          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="appearance-none border border-border-secondary rounded-xl px-4 py-2 pr-10 outline-none cursor-pointer bg-white font-semibold"
          >

            <option value="all">
              All Users
            </option>

            {users.map(user => (
              <option
                key={user.id}
                value={user.id}
              >
                {user.name}
              </option>
            ))}

          </select>

          <ChevronDown
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
          />

        </div>

      </div>


      {/* Pie */}
      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={statusData}
              dataKey="value"
              nameKey="name"
              innerRadius={75}
              outerRadius={120}
              paddingAngle={3}
              stroke="none"
            />

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>


      {/* Legend */}
      <div className="flex justify-center gap-8">

        {statusData.map(item => (

          <div
            key={item.name}
            className="flex items-center gap-2"
          >

            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: item.fill
              }}
            />

            <span>
              {item.name} ({item.value})
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default AdminAnalyticsCharts