import React from 'react';

const LoginHistory = () => {
    const loginHistory = [
        { date: '2024-03-15 10:30 AM', ip: '192.168.1.1', device: 'Chrome on Windows' },
        { date: '2024-03-14 02:15 PM', ip: '192.168.1.1', device: 'Safari on iPhone' },
        { date: '2024-03-13 09:45 AM', ip: '192.168.1.1', device: 'Chrome on Windows' },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Login History</h2>
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 text-left">Date & Time</th>
                        <th className="py-2 px-4 text-left">IP Address</th>
                        <th className="py-2 px-4 text-left">Device</th>
                    </tr>
                </thead>
                <tbody>
                    {loginHistory.map((login, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-2 px-4">{login.date}</td>
                            <td className="py-2 px-4">{login.ip}</td>
                            <td className="py-2 px-4">{login.device}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoginHistory;