import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircleCheckBig, Loader, ScrollText, Pin, PinOff } from 'lucide-react';

import AuthContext from '../../context/AuthContext';
import TaskSummaryCard from '../../components/TaskSummaryCard';
import tasks from '../../data/tasks';
import accounts from '../../data/accounts';
import formatDate from '../../utils/formatDate';

const AdminDashboard = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(task => task.status === "Pending").length
  const completedTasks = tasks.filter(task => task.status === "Completed").length
  const pinnedAdminTasks = tasks.filter(task => task.pinnedByAdmin === true)

  const summaryCards = [
    {
      title: "Total Tasks",
      value: totalTasks,
      description: "All tasks",
      icon: ScrollText
    },
    {
      title: "Pending",
      value: pendingTasks,
      description: "Active",
      icon: Loader
    },
    {
      title: "Completed",
      value: completedTasks,
      description: "Completed",
      icon: CircleCheckBig
    }
  ]

  return (
    <div className="min-h-full p-10">

      <div className='bg-background shadow-lg rounded-xl pt-5 p-10 flex flex-col gap-12 '>

        {/* Header */}
        <div className='flex flex-col gap-3'>
          <h1 className="text-2xl font-semibold text-text-tertiary">Dashboard</h1>
          <div className="text-[44px] leading-10 font-semibold ">
            Welcome, {user.name}.
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {summaryCards.map((card) => (
            <TaskSummaryCard
              key={card.title}
              title={card.title}
              value={card.value}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>

        {/* Pinned Tasks */}
        <div className="flex flex-col gap-4">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Pinned Tasks
            </h2>

            <button className="text-lg font-semibold text-success-primary cursor-pointer"
              onClick={() => navigate("/admin/tasks")}
            >
              View all
            </button>
          </div>

          {/* Task Table */}
          <div className="shadow-lg border border-border-secondary rounded-xl overflow-x-auto">

            <div className="min-w-[1200px]">

              {/* Table Header */}
              <div className="text-sm grid grid-cols-[50px_2fr_1.2fr_1fr_1fr_1fr] items-center bg-border-secondary/40 gap-5 border-b border-border-secondary px-4 py-3 font-semibold text-text-primary">

                <div></div>
                <div>TASK NAME</div>
                <div>ASSIGNED TO</div>
                <div>DUE DATE</div>
                <div>PRIORITY</div>
                <div>STATUS</div>

              </div>

              {/* Tasks */}
              {pinnedAdminTasks.length === 0 ? (
                <div className="p-10 text-center text-text-tertiary font-semibold">
                  No pinned tasks.
                </div>
              ) : (
                pinnedAdminTasks.map((task) => {

                  const creator = accounts.find(
                    account => account.id === task.assignedTo
                  )

                  return (
                    <div key={task.id} className="grid grid-cols-[50px_2fr_1.2fr_1fr_1fr_1fr] items-center px-4 py-4 gap-5 border-b border-border-secondary last:border-b-0">

                      {/* Pin */}
                      <div className="group cursor-pointer p-3 rounded-full">
                        <Pin
                          size={20}
                          className="group-hover:hidden text-success-primary"
                        />

                        <PinOff
                          size={20}
                          className="hidden group-hover:block text-error-secondary"
                        />
                      </div>

                      {/* Task Name */}
                      <div className="pr-5 min-w-0">
                        <div className="font-semibold text-lg">
                          {task.title}
                        </div>

                        <div className="text-text-tertiary truncate">
                          {task.description}
                        </div>
                      </div>

                      {/* Assigned To */}
                      <div className="flex items-center gap-2">

                        <div className="w-9 h-9 rounded-full bg-success-primary text-secondary flex items-center justify-center text-lg font-semibold">
                          {creator?.name?.charAt(0)}
                        </div>

                        <span>
                          {creator?.name}
                        </span>

                      </div>

                      {/* Due Date */}
                      <div className="text-text-primary">
                        {formatDate(task.dueDate)}
                      </div>

                      {/* Priority */}
                      <div>
                        <span className={`font-semibold px-4 py-1 rounded-2xl text-sm
                    ${task.priority === "High"
                              ? "text-urgency-high-primary bg-urgency-high-secondary"
                              : task.priority === "Medium"
                                ? "text-urgency-medium-primary bg-urgency-medium-secondary"
                                : "text-urgency-low-primary bg-urgency-low-secondary"
                            }
                  `}
                        >
                          {task.priority}
                        </span>
                      </div>

                      {/* Status */}
                      <div>
                        {task.status === "Completed" ? (
                          <span className="text-sm font-semibold text-success-primary bg-success-secondary px-4 py-1 rounded-2xl">
                            Completed
                          </span>
                        ) : (
                          <span className="text-sm font-semibold text-warning-primary bg-warning-secondary px-4 py-1 rounded-2xl">
                            Pending
                          </span>
                        )}
                      </div>

                    </div>
                  )
                })
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard
