import React from 'react';
import StudentInfo from './widgets/StudentInfo';
import Schedule from './widgets/Schedule';
import Attendance from './widgets/Attendance';

const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
            <div className="grid gap-4">
                
                <div className="bg-white shadow-md rounded-lg p-4">
                    <StudentInfo />
                </div>
                
                
                <div className="grid grid-cols-2 gap-4">
                   
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <Schedule />
                    </div>
                    
                    
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <Attendance />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;