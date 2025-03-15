import React from 'react';

const FeeHistory = () => {
    const feeHistory = [
        { semester: "Spring 2024", amount: 45000, status: "Paid", date: "2024-01-15" },
        { semester: "Fall 2023", amount: 42000, status: "Paid", date: "2023-09-15" },
        { semester: "Spring 2023", amount: 40000, status: "Paid", date: "2023-01-15" },
    ];

    return (
        <div className="p-3 md:p-6 border-[1px] border-white/35 text-white rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-[2vw] font-extrabold text-center mb-3 md:mb-6">Fee History</h2>
            <table className="min-w-full border-collapse text-[1vw]">
                <thead>
                    <tr className="bg-[#05945626]/15">
                        <th className="py-1 px-2 md:py-2 md:px-4 text-[1vw] text-left border-b border-[#05945626]">Semester</th>
                        <th className="py-1 px-2 md:py-2 md:px-4 text-[1vw] text-left border-b border-[#05945626]">Amount</th>
                        <th className="py-1 px-2 md:py-2 md:px-4 text-[1vw] text-left border-b border-[#05945626]">Status</th>
                        <th className="py-1 px-2 md:py-2 md:px-4 text-[1vw] text-left border-b border-[#05945626]">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {feeHistory.map((item, index) => (
                        <tr key={index} className="border-b border-[#05945626]/50">
                            <td className="py-1 px-2 md:py-2 md:px-4 text-[1vw]">{item.semester}</td>
                            <td className="py-1 px-2 md:py-2 md:px-4 text-[1vw]">Rs. {item.amount}</td>
                            <td className="py-1 px-2 md:py-2 md:px-4 text-[1vw]">
                                <span className="text-green-400 font-semibold text-[1vw]">{item.status}</span>
                            </td>
                            <td className="py-1 px-2 md:py-2 md:px-4 text-[1vw]">{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeeHistory;
