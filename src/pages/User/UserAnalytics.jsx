import React, { useContext, useState } from 'react'
import { CircleCheckBig, Loader, ScrollText, Pin, PinOff } from 'lucide-react';

import tasks from '../../data/tasks';

import TaskSummaryCard from '../../components/TaskSummaryCard';
import AuthContext from '../../context/AuthContext';
import AnalyticsCharts from '../../components/AnalyticsCharts';
// import formatDate from '../../utils/formatDate';

const UserAnalytics = () => {
  const { user } = useContext(AuthContext);
  const userTasks = tasks.filter(task => task.assignedTo === user.id)

  const totalTasks = userTasks.length;
  const pendingTasks = userTasks.filter(task => task.status === "Pending").length
  const completedTasks = userTasks.filter(task => task.status === "Completed").length

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
          <h1 className="text-2xl font-semibold text-text-tertiary">Analytics</h1>
          <div className="text-[44px] leading-10 font-semibold ">
            All Analysis.
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

        {/* Pie Charts */}
        <AnalyticsCharts userTasks={userTasks} />

      </div>
    </div>
  )
}

export default UserAnalytics
