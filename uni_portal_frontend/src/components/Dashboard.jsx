// filepath: src/components/Dashboard.jsx
import React from 'react';
import Calendar from './widgets/Calendar';
import Courses from './widgets/Courses';
import Grades from './widgets/Grades';
import Schedule from './widgets/Schedule';
import Timetable from './widgets/Timetable';

const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <Calendar />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <Courses />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <Grades />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <Schedule />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <Timetable />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;