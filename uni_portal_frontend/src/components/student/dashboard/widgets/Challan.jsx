import React from 'react';

const Challan = () => {
    const challanData = {
        challanNo: "CHN-2024-001",
        dueDate: "2024-04-15",
        amount: 45000,
        status: "Unpaid"
    };

    return (
        <div className="p-3 md:p-6 border-[1px] border-white/35 text-white rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-[2vw] font-extrabold text-center mb-3 md:mb-6">Fee Challan</h2>
            <div className="space-y-2 md:space-y-4">
                <div className="flex justify-between border-b border-[#05945626] pb-2 text-[1vw]">
                    <span className="font-medium text-[1vw]">Challan No:</span>
                    <span className='text-[1vw]'>{challanData.challanNo}</span>
                </div>
                <div className="flex justify-between border-b border-[#05945626] pb-2 text-[1vw]">
                    <span className="font-medium text-[1vw]">Due Date:</span>
                    <span className='text-[1vw]'>{challanData.dueDate}</span>
                </div>
                <div className="flex justify-between border-b border-[#05945626] pb-2">
                    <span className="font-medium text-[1vw]">Amount:</span>
                    <span className='text-[1vw]'>Rs. {challanData.amount}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-[1vw]">Status:</span>
                    <span className={`font-semibold text-[1vw] ${challanData.status === 'Unpaid' ? 'text-red-400 text-[1vw]' : 'text-green-400 text-[1vw]'}`}>
                        {challanData.status}
                    </span>
                </div>
                <button className="mt-2 md:mt-4 w-full bg-[#048C51] text-white py-2 rounded-md hover:bg-[#036B3E] transition-all duration-300 transform hover:scale-105 text-[1vw]">
                    Download Challan
                </button>
            </div>
        </div>
    );
};

export default Challan;
