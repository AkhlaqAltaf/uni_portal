import React from 'react';
import AdminInfo from './Widgets/AdminInfo';
import PendingTasks from './Widgets/PendingTasks';
import FacultyPerformance from './Widgets/FacultyPerformace';


const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-[#1d2241]  p-6">
            <h1 className="text-4xl font-extrabold text-center text-white mb-6">Admin Dashboard</h1>

            <div className="grid gap-6">
                {/* Teacher Info Widget */}
                <div className="bg-[#1d2241] shadow-lg rounded-lg p-6 ">
                  <AdminInfo/>
                  
                </div>
                <div className="bg-[#193344] rounded-lg p-6 border-2 border-[#06814f]">
                <PendingTasks/>
                  
                </div>
                <div className="bg-[#193344] shadow-lg  rounded-lg p-6 border-2 border-[#06814f]">
                <FacultyPerformance/>
                  
                </div>


               

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Schedule Widget */}
                    <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-lg p-6 border border-blue-200">
                   
                    </div>

                    {/* Attendance Widget */}
                    <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-lg p-6 border border-blue-200">
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;