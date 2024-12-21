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
                    <Link to="/settings" className="hover:text-gray-400">Settings</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;