import React, { useContext, useState } from 'react'
import { Pin, PinOff, Search, ChevronDown, Plus, Pencil, Trash2 } from 'lucide-react'

import TaskPopup from '../../components/TaskPopup'
import AuthContext from '../../context/AuthContext'
import tasks from '../../data/tasks'
import accounts from '../../data/accounts'
import formatDate from '../../utils/formatDate'

const UserTasks = () => {
  const { user } = useContext(AuthContext)

  const [taskList, setTaskList] = useState(tasks)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [search, setSearch] = useState("")

  // Create Task
  const handleCreateTask = (formData) => {
    const newTask = {
      id: `T${Date.now()}`,
      assignedTo: user.id,
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      status: formData.status,
      dueDate: formData.dueDate,
      pinned: false
    }
    setTaskList(prev => [...prev, newTask])
    setIsPopupOpen(false)
  }

  // Edit Task
  const handleEditTask = (formData) => {
    setTaskList(prev =>
      prev.map(task =>
        task.id === editingTask.id
          ? {
            ...task,
            ...formData
          }
          : task
      )
    )
    setEditingTask(null)
    setIsPopupOpen(false)
  }

  // Delete Task
  const handleDeleteTask = (taskId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    )
    if (!confirmDelete) return
    setTaskList(prev =>
      prev.filter(task => task.id !== taskId)
    )
  }

  // User's Tasks
  const userTasks = taskList.filter(
    task => task.assignedTo === user.id
  )

  // Search
  const filteredTasks = userTasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-full px-2 pt-10 pb-20 md:pt-5 md:px-10 md:py-10">

      <div className='bg-background shadow-lg rounded-xl pt-5 px-4 md:px-10 py-10 flex flex-col gap-8'>

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
        <div className="flex justify-between gap-2 items-center">

          {/* Left side */}
          <div className="flex items-center gap-2">

            {/* Search */}
            <div className="flex items-center gap-4 border border-success-primary rounded-xl px-3 py-2 md:w-96 h-11">
              <Search
                size={25}
                className="text-success-primary"
              />
              <input
                type="text"
                placeholder="Search tasks..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="outline-none w-full"
              />
            </div>

          </div>

          {/* Create New Task */}
          <button
            onClick={() => {
              setEditingTask(null)
              setIsPopupOpen(true)
            }}
            className="bg-success-primary text-text-secondary px-4 py-2 rounded-2xl font-semibold h-11 flex items-center gap-2 cursor-pointer"
          >
            <Plus size={20} />
            <span className='hidden md:block'>Create New Task</span>
          </button>

        </div>

        {/* Task Table */}
        <div className="border shadow-lg border-border-secondary rounded-xl overflow-x-auto">

          <div className="min-w-[1300px]">

          {/* Table Header */}
          <div className="text-sm grid grid-cols-[50px_2fr_1.2fr_1fr_1fr_1fr_100px] items-center bg-border-secondary/40 gap-5 border-b border-border-secondary px-4 py-3 font-semibold text-text-primary">

            <div></div>
            <div>TASK NAME</div>
            <div>ASSIGNEE</div>
            <div>DUE DATE</div>
            <div>PRIORITY</div>
            <div>STATUS</div>
            <div>ACTIONS</div>

          </div>

          {/* Tasks */}
          {filteredTasks.length === 0 ? (
            <div className="p-10 text-center text-gray-500 font-semibold">
              No tasks found.
            </div>
          ) : (
            filteredTasks.map((task) => {
              const creator = accounts.find(
                account => account.id === task.createdBy
              )
              return (
                <div
                  key={task.id}
                  className="grid grid-cols-[50px_2fr_1.2fr_1fr_1fr_1fr_100px] items-center px-4 py-4 gap-5 border-b border-border-secondary last:border-b-0"
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
                      <Pin
                        size={20}
                        className="text-text-tertiary group-hover:text-success-primary"
                      />
                    )}

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

                  {/* Assignee */}
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-success-primary text-secondary flex items-center justify-center text-lg font-semibold">
                      {creator?.name.charAt(0)}
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

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {/* Edit */}
                    <button
                      onClick={() => {
                        setEditingTask(task)
                        setIsPopupOpen(true)
                      }}
                      className="text-text-tertiary hover:text-success-primary cursor-pointer"
                    >
                      <Pencil size={20} />
                    </button>


                    {/* Delete */}
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="text-text-tertiary hover:text-error-primary cursor-pointer"
                    >
                      <Trash2 size={20} />
                    </button>

                  </div>

                </div>
              )
            })
          )}
          </div>
          
        </div>

      </div>

      {/* Task Popup */}
      <TaskPopup
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false)
          setEditingTask(null)
        }}
        onSave={
          editingTask
            ? handleEditTask
            : handleCreateTask
        }
        task={editingTask}
        user={user}
      />

    </div>
  )
}

export default UserTasks