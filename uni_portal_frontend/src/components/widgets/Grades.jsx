import React from 'react';

const Grades = () => {
    const grades = [
        { course: 'Mathematics', grade: 'A' },
        { course: 'Physics', grade: 'B+' },
        { course: 'Chemistry', grade: 'A-' },
        { course: 'History', grade: 'B' },
    ];

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Grades</h2>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Course</th>
                        <th className="py-2 px-4 border-b">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((item, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b">{item.course}</td>
                            <td className="py-2 px-4 border-b">{item.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Grades;