import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // To include default styles

const PendingTasks = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Data for pending tasks with task priority
  const tasksData = {
    studentApprovals: [
      { id: 1, task: 'Verify student registration', priority: 'high', description: 'Urgent verification needed for new students', progress: 80 },
      { id: 2, task: 'Approve document submission', priority: 'normal', description: 'Documents pending approval from students', progress: 45 },
      { id: 3, task: 'Verify international student status', priority: 'urgent', description: 'Urgent, needs to be cleared immediately', progress: 90 },
    ],
    feeCollection: [
      { id: 1, task: 'Confirm overdue fees', priority: 'high', description: 'Overdue fees for 20 students', progress: 60 },
      { id: 2, task: 'Send payment reminders', priority: 'normal', description: 'Reminders for fee payment sent to students', progress: 50 },
    ],
    examScheduling: [
      { id: 1, task: 'Schedule final exams', priority: 'urgent', description: 'Finalize scheduling for the final exams', progress: 85 },
      { id: 2, task: 'Confirm exam proctors', priority: 'high', description: 'Proctors need to be confirmed for the exam', progress: 70 },
    ],
    facultyRequests: [
      { id: 1, task: 'Approve faculty leave', priority: 'normal', description: 'Pending leave approval for a faculty member', progress: 40 },
      { id: 2, task: 'Review faculty schedules', priority: 'high', description: 'High priority, faculty schedules need review', progress: 75 },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Function to get the color based on task priority
  const getPriorityColor = (priority) => {
    if (priority === 'urgent') return 'bg-red-500'; // Red for urgent
    if (priority === 'high') return 'bg-orange-500'; // Orange for high
    return 'bg-green-500'; // Green for normal
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Pending Tasks Overview</h1>

      {/* Category Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <button
          onClick={() => handleCategoryClick('studentApprovals')}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          View Pending Student Approvals
        </button>
        <button
          onClick={() => handleCategoryClick('feeCollection')}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          View Fee Collection
        </button>
        <button
          onClick={() => handleCategoryClick('examScheduling')}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          View Exam Scheduling
        </button>
        <button
          onClick={() => handleCategoryClick('facultyRequests')}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          View Faculty Requests
        </button>
      </div>

      {/* Conditional rendering of tasks */}
      {selectedCategory && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Pending {selectedCategory === 'studentApprovals' ? 'Student Approvals' :
                      selectedCategory === 'feeCollection' ? 'Fee Collection' :
                      selectedCategory === 'examScheduling' ? 'Exam Scheduling' : 'Faculty Requests'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasksData[selectedCategory].map((task) => (
              <div key={task.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="w-24 h-24 mb-4">
                  <CircularProgressbar
                    value={task.progress}
                    text={`${task.progress}%`}
                    styles={{
                      path: {
                        stroke: getPriorityColor(task.priority),
                        strokeWidth: 10,
                      },
                      trail: {
                        stroke: '#e6e6e6',
                        strokeWidth: 10,
                      },
                      text: {
                        fill: getPriorityColor(task.priority),
                        fontSize: '16px',
                        fontWeight: 'bold',
                      },
                    }}
                  />
                </div>
                <h3 className="font-medium text-lg text-center mb-2">{task.task}</h3>
                <p className="text-sm text-gray-500 text-center mb-2">{task.description}</p>
                <span className={`text-xs py-1 px-2 rounded-full ${getPriorityColor(task.priority)} text-white`}>
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingTasks;
