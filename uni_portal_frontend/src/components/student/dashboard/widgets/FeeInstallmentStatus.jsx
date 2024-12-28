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
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Installment Status</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-100 p-4 rounded-md">
                    <div className="text-sm text-blue-600">Total Amount</div>
                    <div className="text-xl font-semibold">Rs. {installmentStatus.totalAmount}</div>
                </div>
                <div className="bg-green-100 p-4 rounded-md">
                    <div className="text-sm text-green-600">Paid Amount</div>
                    <div className="text-xl font-semibold">Rs. {installmentStatus.paidAmount}</div>
                </div>
                <div className="bg-red-100 p-4 rounded-md">
                    <div className="text-sm text-red-600">Remaining Amount</div>
                    <div className="text-xl font-semibold">Rs. {installmentStatus.remainingAmount}</div>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Installment Details</h3>
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 text-left">No.</th>
                            <th className="py-2 px-4 text-left">Amount</th>
                            <th className="py-2 px-4 text-left">Status</th>
                            <th className="py-2 px-4 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {installmentStatus.installments.map((installment) => (
                            <tr key={installment.no} className="border-b">
                                <td className="py-2 px-4">{installment.no}</td>
                                <td className="py-2 px-4">Rs. {installment.amount}</td>
                                <td className="py-2 px-4">
                                    <span className={installment.status === "Paid" ? "text-green-500" : "text-red-500"}>
                                        {installment.status}
                                    </span>
                                </td>
                                <td className="py-2 px-4">{installment.status === "Paid" ? installment.date : installment.dueDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeeInstallmentStatus;