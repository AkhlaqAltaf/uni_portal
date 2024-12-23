import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Attendance = () => {
    const attendanceData = [
        { course: "Mobile App Dev", attendance: 85 },
        { course: "AI", attendance: 90 },
        { course: "DAA", attendance: 80 },
        { course: "OS", attendance: 95 },
        { course: "Compiler", attendance: 88 },
    ];

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Attendance</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={attendanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" strokeWidth={0.5} />
                    <XAxis dataKey="course" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="attendance" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Attendance;