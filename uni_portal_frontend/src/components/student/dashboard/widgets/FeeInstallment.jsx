import React from 'react';

const FeeInstallment = () => {
    const [installments, setInstallments] = React.useState([
        { amount: 15000, dueDate: "2024-04-15" },
        { amount: 15000, dueDate: "2024-05-15" },
        { amount: 15000, dueDate: "2024-06-15" },
    ]);

    return (
        <div className="p-3 md:p-6 border-[1px] border-white/35 text-white rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-[2vw] font-extrabold text-center mb-3 md:mb-6">Fee Installment Plan</h2>
            <div className="space-y-2 md:space-y-4">
                {installments.map((installment, index) => (
                    <div key={index} className="border border-[#05945626] p-2 md:p-4 rounded-md bg-[#05945626]/15 shadow-md">
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-[1vw]">Installment {index + 1}</span>
                            <span className='text-[1vw]'>Rs. {installment.amount}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-300">
                            <span className='text-[1vw]'>Due Date:</span>
                            <span className='text-[1vw]'>{installment.dueDate}</span>
                        </div>
                    </div>
                ))}
                <button className="mt-2 md:mt-4 w-full bg-[#048C51] text-white py-1 md:py-2 rounded-md hover:bg-[#037A45] transition-all duration-300 transform hover:scale-105 text-[1vw]">
                    Apply for Installment Plan
                </button>
            </div>
        </div>
    );
};

export default FeeInstallment;
