import React from 'react';
import Timetable from '../components/student/Timetable';

const TimeTable = () => {
    return (
        <div className="p-6">
        {/* <h1 className="text-2xl font-bold mb-4">Time Table</h1> */}
            <div className="bg-white shadow-md rounded-lg p-4">
                <Timetable />
            </div>
        </div>
    );
};

export default TimeTable;