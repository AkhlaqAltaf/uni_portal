import React from 'react';

const FeeHistory = () => {
    const feeHistory = [
        { semester: "Spring 2024", amount: 45000, status: "Paid", date: "2024-01-15" },
        { semester: "Fall 2023", amount: 42000, status: "Paid", date: "2023-09-15" },
        { semester: "Spring 2023", amount: 40000, status: "Paid", date: "2023-01-15" },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Fee History</h2>
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 text-left">Semester</th>
                        <th className="py-2 px-4 text-left">Amount</th>
                        <th className="py-2 px-4 text-left">Status</th>
                        <th className="py-2 px-4 text-left">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {feeHistory.map((item, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-2 px-4">{item.semester}</td>
                            <td className="py-2 px-4">Rs. {item.amount}</td>
                            <td className="py-2 px-4">
                                <span className="text-green-500">{item.status}</span>
                            </td>
                            <td className="py-2 px-4">{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeeHistory;