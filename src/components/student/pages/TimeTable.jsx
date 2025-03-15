import React from 'react';
import WeeklyTimetable from '../dashboard/widgets/Timetable';

const TimeTable = () => {
    return (
        <div className="p-1 md:p-6">
        {/* <h1 className="text-2xl font-bold mb-4">Time Table</h1> */}
            <div className="bg-[#2C2F48] bg-opacity-50 border-[1px] border-white/15 shadow-md rounded-lg p-2 md:p-4 text-[1vw]">
                <WeeklyTimetable />
            </div>
        </div>
    );
};

export default TimeTable;