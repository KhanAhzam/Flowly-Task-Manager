import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CircleCheckBig, Loader, ScrollText, ChevronDown } from 'lucide-react';

import tasks from '../../data/tasks';
import accounts from '../../data/accounts'

import TaskSummaryCard from '../../components/TaskSummaryCard';
import TopThreeCard from '../../components/TopThreeCard'
import AnalyticsCharts from '../../components/AnalyticsCharts';

const AdminAnalytics = () => {
  const users = accounts.filter(account => account.role === "user")

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(task => task.status === "Pending").length
  const completedTasks = tasks.filter(task => task.status === "Completed").length

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

  const userTaskStats = users.map(user => {
    const userTasks = tasks.filter(task => task.assignedTo === user.id)
    const completed = userTasks.filter(task => task.status === "Completed").length
    const total = userTasks.length

    const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100)

    return {
      ...user,
      totalTasks: total,
      completedTasks: completed,
      pendingTasks: userTasks.filter(task => task.status === "Pending").length,
      completionRate
    }
  })

  // Highest number of assigned tasks
  const topAssigned = [...userTaskStats].sort((a, b) => b.totalTasks - a.totalTasks).slice(0, 3)

  // Highest completion rate
  const topCompletion = [...userTaskStats].sort((a, b) => b.completionRate - a.completionRate).slice(0, 3)

  return (
    <div className="min-h-full px-2 pt-10 pb-20 md:pt-5 md:px-10 md:py-10">

      <div className='bg-background shadow-lg rounded-xl pt-5 px-4 md:px-10 py-10 flex flex-col gap-12 '>

        {/* Header */}
        <div className='flex flex-col gap-3'>
          <h1 className="text-2xl font-semibold text-text-tertiary">Analytics</h1>
          <div className="text-[44px] leading-10 font-semibold ">
            All Analysis.
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
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

        {/* Top 3 Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <TopThreeCard
            title="Top Assigned To"
            members={topAssigned}
            valueKey="totalTasks"
          />

          <TopThreeCard
            title="Top Completion Rate"
            members={topCompletion}
            valueKey="completionRate"
            valueSuffix="%"
            subtitle={(member) =>
              `${member.completedTasks} / ${member.totalTasks} completed`
            }
          />

        </div>

        {/* Pie charts */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">

          <AnalyticsCharts userTasks={tasks} />

        </div>
        

      </div>

    </div>
  )
}

export default AdminAnalytics
