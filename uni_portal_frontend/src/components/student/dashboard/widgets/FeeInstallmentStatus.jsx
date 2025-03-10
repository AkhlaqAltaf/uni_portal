import React from 'react';

const FeeInstallmentStatus = () => {
    const installmentStatus = {
        totalAmount: 45000,
        paidAmount: 30000,
        remainingAmount: 15000,
        nextDueDate: "2024-04-15",
        installments: [
            { no: 1, amount: 15000, status: "Paid", date: "2024-02-15" },
            { no: 2, amount: 15000, status: "Paid", date: "2024-03-15" },
            { no: 3, amount: 15000, status: "Pending", dueDate: "2024-04-15" },
        ]
    };

    return (
        <div className="p-3 md:p-6 border-[1px] border-white/35 text-white rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-[2vw] font-extrabold text-center mb-3 md:mb-6">Installment Status</h2>
            
            {/* Amount Summary */}
            <div className="grid grid-cols-3 gap-4 mb-3 md:mb-6">
                <div className="p-2 md:p-4 rounded-md shadow-md border border-[#05945626] bg-[#05945626]/15">
                    <div className="text-white/80 text-[1vw]">Total Amount</div>
                    <div className="font-semibold text-[1.3vw]">Rs. {installmentStatus.totalAmount}</div>
                </div>
                <div className="p-2 md:p-4 rounded-md shadow-md border border-[#05945626] bg-[#05945626]/15">
                    <div className=" text-green-400 text-[1vw]">Paid Amount</div>
                    <div className="font-semibold text-[1.3vw]">Rs. {installmentStatus.paidAmount}</div>
                </div>
                <div className="p-2 md:p-4 rounded-md shadow-md border border-[#05945626] bg-[#05945626]/15">
                    <div className=" text-red-400 text-[1vw]">Remaining Amount</div>
                    <div className="font-semibold text-[1.3vw]">Rs. {installmentStatus.remainingAmount}</div>
                </div>
            </div>

            {/* Installment Details Table */}
            <div className="mt-3 md:mt-6">
                <h3 className="text-[2vw] font-semibold mb-2 md:mb-4">Installment Details</h3>
                <table className="min-w-full border-collapse border border-[#05945626]/35 text-[1vw]">
                    <thead>
                        <tr className="bg-[#05945626]/15">
                            <th className="py-1 px-2 md:py-2 md:px-4 text-left">No.</th>
                            <th className="py-1 px-2 md:py-2 md:px-4 text-left">Amount</th>
                            <th className="py-1 px-2 md:py-2 md:px-4 text-left">Status</th>
                            <th className="py-1 px-2 md:py-2 md:px-4 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {installmentStatus.installments.map((installment) => (
                            <tr key={installment.no} className="border-b border-white/20">
                                <td className="py-1 px-2 md:py-2 md:px-4">{installment.no}</td>
                                <td className="py-1 px-2 md:py-2 md:px-4">Rs. {installment.amount}</td>
                                <td className="py-1 px-2 md:py-2 md:px-4">
                                    <span className={installment.status === "Paid" ? "text-green-400" : "text-red-400"}>
                                        {installment.status}
                                    </span>
                                </td>
                                <td className="py-1 px-2 md:py-2 md:px-4 text-[1vw]">
                                    {installment.status === "Paid" ? installment.date : installment.dueDate}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Apply for Installment Button */}
            <button className="mt-3 md:mt-6 w-full bg-[#048C51] text-white py-1 md:py-2 rounded-md hover:bg-[#037A45] transition-all duration-300 transform hover:scale-105 text-[1vw]">
                Apply for Installment Plan
            </button>
        </div>
    );
};

export default FeeInstallmentStatus;
