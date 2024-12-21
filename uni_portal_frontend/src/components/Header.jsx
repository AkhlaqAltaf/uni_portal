import React from 'react';

const Header= () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-xl font-bold">Student Portal</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/profile" className="hover:underline">Profile</a></li>
                    <li><a href="/settings" className="hover:underline">Settings</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;