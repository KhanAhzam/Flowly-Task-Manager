import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CircleCheckBig, Loader, ScrollText, Pin, PinOff } from 'lucide-react';

import TaskSummaryCard from '../../components/TaskSummaryCard';
import AuthContext from '../../context/AuthContext';
import tasks from '../../data/tasks';
import formatDate from '../../utils/formatDate';


const UserDashboard = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const userTasks = tasks.filter(task => task.assignedTo === user.id)

  const totalTasks = userTasks.length;
  const pendingTasks = userTasks.filter(task => task.status === "Pending").length
  const completedTasks = userTasks.filter(task => task.status === "Completed").length
  const pinnedTasks = userTasks.filter(task => task.pinned)

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
    <div className="p-10">
      <div className='shadow-lg rounded-xl pt-5 p-10 flex flex-col gap-12'>

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
        <div className='flex flex-col gap-4'>

          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Pinned Tasks
            </h2>
            <button className="text-lg font-semibold text-success-primary cursor-pointer" onClick={() => navigate("/user/tasks")}>
              View all
            </button>
          </div>

          {/* Tasks */}
          <div className="border border-border-secondary rounded-xl overflow-hidden">
            {pinnedTasks.length === 0 ? (
              <div className="p-6 text-center text-text-tertiary font-semibold text-2xl">
                No pinned tasks.
              </div>
            ) : (
              pinnedTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex justify-between items-center px-5 py-4 border-b border-border-secondary last:border-b-0"
                >
                  
                  {/* Left Side */}
                  <div className='flex gap-5 items-center'>

                    {/* Pin */}
                    <div className="group cursor-pointer p-3 rounded-full">
                      <Pin
                          size={20}
                          className="group-hover:hidden text-success-primary"
                      />
                      <PinOff
                          size={20}
                          className="hidden group-hover:block"
                      />
                    </div>

                    {/* Task information */}
                    <div>
                      <div className="text-lg font-semibold">
                        {task.title}
                      </div>
                      <div className="text-text-tertiary">
                        {task.description}
                      </div>
                    </div>

                  </div>               

                  {/* Due Date + Priority + Status */}
                  <div className="flex items-center gap-6">

                    <span className="text-sm text-text-tertiary">
                      Due {formatDate(task.dueDate)}
                    </span>

                    <span className="text-sm text-text-tertiary">
                      {task.priority}
                    </span>

                    {task.status === 'Pending' ? (
                      <span className="text-sm font-semibold text-warning-primary bg-warning-secondary px-4 py-1 rounded-2xl">
                        {task.status}
                      </span>
                    ) : (
                      <span className="text-sm font-semibold text-success-primary bg-success-secondary px-4 py-1 rounded-2xl">
                        {task.status}
                      </span>
                    )}

                  </div>

                </div>
              ))
            )}
          </div>

        </div>

      </div>

    </div>
  )
}


export default UserDashboard
