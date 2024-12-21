import React from 'react';

const Schedule = () => {
    const schedule = [
        {
            day: "Monday",
            slots: [
                { time: "08:00 To 09:30", location: "S206 (56M)", course: "Mobile Application Development", teacher: "Muhammad Rafay Hannan" },
                { time: "09:40 To 11:10", location: "S207 (56M)", course: "Mobile Application Development", teacher: "Muhammad Rafay Hannan" },
                { time: "11:20 To 12:50", location: "C-303 (50)", course: "Artificial Intelligence", teacher: "Dr. Mubashir Ahmad" },
                { time: "13:00 To 15:30", location: "C-303 (50)", course: "Artificial Intelligence Lab", teacher: "Dr. Mubashir Ahmad" },
            ],
        },
        {
            day: "Tuesday",
            slots: [
                { time: "09:00 To 10:30", location: "S107 (42)", course: "Design and Analysis of Algorithms", teacher: "Ehazz Mustafa" },
                { time: "10:40 To 12:10", location: "S101 (42)", course: "Design and Analysis of Algorithms", teacher: "Ehazz Mustafa" },
            ],
        },
        {
            day: "Wednesday",
            slots: [
                { time: "09:00 To 10:30", location: "C204 (50)", course: "Principles of Operating Systems", teacher: "Dr. Ghulam Mujtaba" },
                { time: "10:40 To 12:10", location: "C205 (50M)", course: "Compiler Construction", teacher: "Faryal Jahangir" },
            ],
        },
        {
            day: "Thursday",
            slots: [
                { time: "09:00 To 10:30", location: "C106 (50)", course: "Artificial Intelligence", teacher: "Dr. Mubashir Ahmad" },
            ],
        },
        {
            day: "Friday",
            slots: [
                { time: "09:00 To 10:30", location: "S203 (50)", course: "Principles of Operating Systems", teacher: "Dr. Ghulam Mujtaba" },
                { time: "10:40 To 12:10", location: "C205 (50)", course: "Artificial Intelligence Lab", teacher: "Dr. Mubashir Ahmad" },
            ],
        },
    ];

    const timeSlots = Array.from(new Set(schedule.flatMap(day => day.slots.map(slot => slot.time))));

    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Time Table</h1>
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
                <thead>
                    <tr>
                        <th className="border border-gray-300 bg-gray-100 p-2 font-bold text-center w-1/6">Day</th>
                        {timeSlots.map((time, index) => (
                            <th key={index} className="border border-gray-300 bg-gray-100 p-2 font-bold text-center w-1/6">{time}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((daySchedule, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 bg-gray-50 p-2 font-medium text-center align-top">
                                {daySchedule.day}
                            </td>
                            {timeSlots.map((time, timeIndex) => {
                                const slot = daySchedule.slots.find(slot => slot.time === time);
                                return (
                                    <td key={timeIndex} className="border border-gray-300 p-2">
                                        {slot ? (
                                            <div className="border border-gray-200 p-2">
                                                <div className="text-sm">{slot.location}</div>
                                                <div className="font-semibold">{slot.course}</div>
                                                <div className="italic text-gray-600 text-sm">{slot.teacher}</div>
                                            </div>
                                        ) : null}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;