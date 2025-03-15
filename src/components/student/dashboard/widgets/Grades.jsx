import React from 'react';

const Grades = () => {
    const grades = [
        { course: 'Mathematics', grade: 'A' },
        { course: 'Physics', grade: 'B+' },
        { course: 'Chemistry', grade: 'A-' },
        { course: 'History', grade: 'B' },
    ];

    return (
        <div className="p-3 md:p-6 bg-green-600/15 text-white rounded-lg shadow-lg">
            <h2 className="text-[2vw] font-bold text-center mb-3 md:mb-6">Grades</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-gray-700 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-green-600/45">
                            <th className="py-1 px-2 md:py-3 md:px-4 text-[1vw] text-left text-gray-200">Course</th>
                            <th className="py-1 px-2 md:py-3 md:px-4 text-[1vw] text-left text-gray-200">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((item, index) => (
                            <tr key={index} className="border-b border-gray-600 hover:bg-green-600/15 text-[1vw]">
                                <td className="py-1 px-2 md:py-3 md:px-4 text-[1vw] text-gray-200">{item.course}</td>
                                <td className="py-1 px-2 md:py-3 md:px-4 text-[1vw] text-gray-200">{item.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Grades;
