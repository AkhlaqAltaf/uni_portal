import React from 'react';
import StudentInfo from './widgets/StudentInfo';
import Schedule from './widgets/Schedule';
import Attendance from './widgets/Attendance';
import { MissingDocuments } from './widgets/MissingDocuments';
import { CGPAChart } from './widgets/CgpaChart';


// import  MissingDocuments from './widgets/MissingDocuments';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-darkBlue mt-[-15px]">
            {/* <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Student Dashboard</h1> */}

            <div className="grid gap-6">
                {/* Student Info Widget */}
                <div className='grid gap-6 rounded-lg'>
                 {/* <div className="rounded-lg border-white/45 p-2 sm:p-6 px-2 md:px-16 border bg-[#2C2F48] bg-opacity-50 ">
                    <StudentInfo />
                    
                </div>  */}

                <div className="rounded-lg border-white/45 sm:p-6 sm:px-16 border bg-[#2C2F48] bg-opacity-50 ">
                    <MissingDocuments />
                    
                </div>



                <div className="w-12/12 rounded-lg border-white/45 sm:p-6 border bg-opacity-50">
                    <CGPAChart />
                    
                </div>
                <div>
                    {/* <CGPAChart/ */}
                </div>
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                    {/* Schedule Widget */}
                    {/* <div className="bg-gradient-to-br from-white to-green-50 shadow-lg rounded-lg p-6 border border-green-200">
                        <Schedule />
                    </div> */}

                    {/* Attendance Widget */}
                    {/* <div className="bg-gradient-to-br from-white to-green-50 shadow-lg rounded-lg p-6 border border-green-200">
                        <Attendance />
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Dashboard;
