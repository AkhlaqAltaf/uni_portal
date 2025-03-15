import React from 'react';
import Grades from '../dashboard/widgets/Grades';

const Result = () => {
    return (
        <div className="p-3 md:p-6 border-[1px] border-white/25">
            <h1 className="text-[2vw] font-bold mb-2 md:mb-4 text-white ">Result Card</h1>
            <div className="bg-[#2C2F48] bg-opacity-50 shadow-md rounded-lg p-2 md:p-4">
                <Grades />
            </div>
        </div>
    );
};

export default Result;