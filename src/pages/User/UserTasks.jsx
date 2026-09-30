import React, { useContext, useState } from 'react'
import { Pin, PinOff, Search, ChevronDown, Plus } from 'lucide-react'

import AuthContext from '../../context/AuthContext'
import tasks from '../../data/tasks'
import formatDate from '../../utils/formatDate'

const UserTasks = () => {
  const { user } = useContext(AuthContext)
  const [search, setSearch] = useState("")

  // Pulling out tasks assigned to signed-in user
  const userTasks = tasks.filter(
    task => task.assignedTo === user.id
  )

  // Search
  const filteredTasks = userTasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-10">
      <div className="shadow-lg rounded-xl pt-5 p-10 flex flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-text-tertiary">
            Taskboard
          </h1>
          <div className="text-[44px] leading-10 font-semibold">
            All Tasks.
          </div>
        </div>


        {/* Search + Filters + New Task */}
        <div className="flex justify-between items-center">

          {/* Left side */}
          <div className="flex items-center gap-2">

            {/* Search */}
            <div className="flex items-center gap-4 border border-success-primary rounded-xl px-3 py-2 w-96 h-11">
              <Search size={25} className="text-success-primary" />
              <input
                type="text"
                placeholder="Search tasks..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="outline-none w-full"
              />

            </div>


            {/* Status Filter */}
            <button className="flex items-center gap-2 border border-border-secondary rounded-2xl pr-2 pl-4 py-2 font-semibold bg-success-primary text-text-secondary h-11 cursor-pointer">
              Status
              <ChevronDown size={20} />
            </button>


            {/* Priority Filter */}
            <button className="flex items-center gap-2 border border-border-secondary rounded-2xl pr-2 pl-4 py-2 font-semibold bg-success-primary text-text-secondary h-11 cursor-pointer">
              Priority
              <ChevronDown size={20} />
            </button>


            {/* Assignee Filter */}
            <button className="flex items-center gap-2 border border-border-secondary rounded-2xl pr-2 pl-4 py-2 font-semibold bg-success-primary text-text-secondary h-11 cursor-pointer">
              Assignee
              <ChevronDown size={20} />
            </button>

          </div>

          {/* New Task */}
          <button className="bg-success-primary text-text-secondary px-4 py-2 rounded-2xl font-semibold h-11 flex items-center gap-2 cursor-pointer">
            <Plus size={20} />
            Create New Task
          </button>

        </div>


        {/* Task Table */}
        <div className="border border-border-secondary rounded-xl overflow-hidden">

          {/* Table Header */}
          <div className="grid grid-cols-[50px_2fr_1.2fr_1fr_1fr_1fr] items-center bg-border-secondary gap-5 border-b border-border-secondary px-4 py-3 font-semibold text-text-primary">

            <div></div>

            <div>TASK NAME</div>

            <div>ASSIGNEE</div>

            <div>DUE DATE</div>

            <div>PRIORITY</div>

            <div>STATUS</div>

          </div>


          {/* Tasks */}
          {filteredTasks.length === 0 ? (

            <div className="p-10 text-center text-gray-500 font-semibold">
              No tasks found.
            </div>

          ) : (

            filteredTasks.map((task) => (

              <div
                key={task.id}
                className="grid grid-cols-[50px_2fr_1.2fr_1fr_1fr_1fr] items-center px-4 py-4 gap-5 border-b border-border-secondary last:border-b-0"
              >

                {/* Pin */}
                <div className="group cursor-pointer p-3 rounded-full">
                  {task.pinned ? (
                    <>
                      <Pin
                        size={20}
                        className="group-hover:hidden text-success-primary"
                      />
                      <PinOff
                        size={20}
                        className="hidden group-hover:block text-error-secondary"
                      />
                    </>
                  ) : (
                    <>
                      <Pin
                        size={20}
                        className="text-text-tertiary group-hover:text-success-primary"
                      />
                    </>
                  )}

                </div>

                {/* Task Name */}
                <div className="pr-5">
                  <div className="font-semibold text-lg">
                    {task.title}
                  </div>

                  <div className="text-text-tertiary">
                    {task.description}
                  </div>

                </div>

                {/* Assignee */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-success-primary text-secondary flex items-center justify-center text-lg font-semibold">
                    {user.name.charAt(0)}
                  </div>
                  <span className="">
                    {user.name}
                  </span>
                </div>

                {/* Due Date */}
                <div className="text-text-primary">
                  {formatDate(task.dueDate)}
                </div>

                {/* Priority */}
                <div>
                  <span
                    className={`font-semibold px-4 py-1 rounded-2xl text-sm
                      
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

            ))

          )}

        </div>

      </div>
    </div>
  )
}

export default UserTasks