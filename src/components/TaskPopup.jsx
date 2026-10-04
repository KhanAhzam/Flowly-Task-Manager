import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const TaskModal = ({ isOpen, onClose, onSave, task, user }) => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    status: "Pending"
  })

  // If editing, fill the form with existing task
  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        priority: task.priority,
        status: task.status
      })
    } else {
      setFormData({
        title: "",
        description: "",
        dueDate: "",
        priority: "Low",
        status: "Pending"
      })
    }
  }, [task, isOpen])

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onSave(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-125 rounded-xl shadow-xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">

          <h2 className="text-xl font-semibold">
            {task ? "Edit Task" : "Create New Task"}
          </h2>

          <button
            onClick={onClose}
            className="cursor-pointer"
          >
            <X size={20} />
          </button>

        </div>


        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-5"
        >

          {/* Task Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Task Name
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task name"
              required
              className="border border-gray-300 rounded-lg w-full px-3 py-2 outline-none"
            />
          </div>


          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Add a description..."
              required
              className="border border-gray-300 rounded-lg w-full px-3 py-2 h-24 outline-none"
            />
          </div>


          {/* Due Date */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Due Date
            </label>

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg w-full px-3 py-2"
            />
          </div>


          {/* Priority + Status */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-semibold mb-1">
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg w-full px-3 py-2"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>


            <div>
              <label className="block text-sm font-semibold mb-1">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg w-full px-3 py-2"
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

          </div>


          {/* Assignee */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Assignee
            </label>

            <input
              type="text"
              value={user.name}
              disabled
              className="border border-gray-300 rounded-lg w-full px-3 py-2 bg-gray-100"
            />
          </div>


          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t pt-4 mt-2">

            <button
              type="button"
              onClick={onClose}
              className="border border-gray-300 px-4 py-2 rounded-lg cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-success-primary text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              {task ? "Save Changes" : "Create Task"}
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default TaskModal