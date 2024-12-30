import React from 'react';


const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-6">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Admin Dashboard</h1>

            <div className="grid gap-6">
                {/* Teacher Info Widget */}
                <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-lg p-6 border border-blue-200">
                    {/* <TeacherInfo /> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Schedule Widget */}
                    <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-lg p-6 border border-blue-200">
                        {/* <TeacherSchedule /> */}
                    </div>

                    {/* Attendance Widget */}
                    <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-lg p-6 border border-blue-200">
                        {/* <TeacherAttendance /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;