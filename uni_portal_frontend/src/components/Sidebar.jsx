import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar=() => {
    return (
        <div className="bg-gray-800 text-white w-64 h-full p-4">
            <h2 className="text-lg font-bold mb-4">Student Portal</h2>
            <ul>
                <li className="mb-2">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                </li>
                <li className="mb-2">
                    <Link to="/profile" className="hover:text-gray-400">Profile</Link>
                </li>
                
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Microsoft Office 365 / Teams</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Data Verification</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Corona Certificates</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Courses</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Course Portal</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Exam Entry Coupon</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Boarding</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Library</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Hostel</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Sibling Info</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Result</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">OBE</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Timetable</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Fee</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Library</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Scholarship</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">University clearance</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Application Processing system</Link>
                </li>
                <li className="mb-2">
                    <Link to="/settings" className="hover:text-gray-400">Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;