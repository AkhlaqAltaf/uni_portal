import React from 'react';

const LoginHistory = () => {
    const loginHistory = [
        { date: '2024-03-15 10:30 AM', ip: '192.168.1.1', device: 'Chrome on Windows' },
        { date: '2024-03-14 02:15 PM', ip: '192.168.1.1', device: 'Safari on iPhone' },
        { date: '2024-03-13 09:45 AM', ip: '192.168.1.1', device: 'Chrome on Windows' },
    ];

    return (
        <div className="p-3 md:p-6 border-[1px] border-white/35 text-white rounded-lg shadow-md">
            <h2 className="text-[2vw] font-bold text-center mb-3 md:mb-6">Login History</h2>
            <table className="min-w-full">
                <thead>
                    <tr className="bg-green-600/40">
                        <th className="py-1 px-2 md:py-2 md:px-4 text-[1vw] text-left  font-semibold">Date & Time</th>
                        <th className="py-1 px-2 md:py-2 md:px-4 text-[1vw] text-left  font-semibold">IP Address</th>
                        <th className="py-1 px-2 md:py-2 md:px-4 text-[1vw] text-left  font-semibold">Device</th>
                    </tr>
                </thead>
                <tbody>
                    {loginHistory.map((login, index) => (
                        <tr key={index} className="border-b border-gray-700">
                            <td className="py-1 px-2 md:py-2 md:px-4 text-[1vw]">{login.date}</td>
                            <td className="py-1 px-2 md:py-2 md:px-4 text-[1vw]">{login.ip}</td>
                            <td className="py-1 px-2 md:py-2 md:px-4 text-[1vw]">{login.device}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoginHistory;
