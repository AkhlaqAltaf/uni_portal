import React from 'react';

const Challan = () => {
    const challanData = {
        challanNo: "CHN-2024-001",
        dueDate: "2024-04-15",
        amount: 45000,
        status: "Unpaid"
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Fee Challan</h2>
            <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Challan No:</span>
                    <span>{challanData.challanNo}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Due Date:</span>
                    <span>{challanData.dueDate}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Amount:</span>
                    <span>Rs. {challanData.amount}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Status:</span>
                    <span className="text-red-500 font-semibold">{challanData.status}</span>
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    Download Challan
                </button>
            </div>
        </div>
    );
};

export default Challan;