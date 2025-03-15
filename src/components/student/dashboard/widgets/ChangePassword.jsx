import React, { useState } from 'react';

const ChangePassword = () => {
    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle password change
    };

    return (
        <div className="p-3 md:p-6 border-[1px] border-white/35 text-white rounded-lg shadow-md">
            <h2 className="text-[2vw] font-bold text-center mb-3 md:mb-6">Change Password</h2>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                <div>
                    <label className="block text-[1vw] font-semibold">Current Password</label>
                    <input
                        type="password"
                        value={passwords.current}
                        onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                        className="w-full p-1 md:p-2 border-[#05945626] bg-green-600/20 rounded focus:outline-none focus:ring-2 focus:ring-green-600/70 text-white text-[1vw]"
                    />
                </div>
                <div>
                    <label className="block text-[1vw] font-semibold">New Password</label>
                    <input
                        type="password"
                        value={passwords.new}
                        onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                        className="w-full p-1 md:p-2 border-[#05945626] bg-green-600/20 rounded focus:outline-none focus:ring-2 focus:ring-green-600/70 text-white text-[1vw]"
                    />
                </div>
                <div>
                    <label className="block text-[1vw] font-semibold">Confirm New Password</label>
                    <input
                        type="password"
                        value={passwords.confirm}
                        onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                        className="w-full p-1 md:p-2 border-[#05945626]rounded focus:outline-none focus:ring-2 bg-green-600/20 focus:ring-green-600/70 text-white text-[1vw]"
                    />
                </div>
                <div className="flex justify-between mt-3 md:mt-6 ">
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-1 px-2 md:py-2 md:px-4 rounded shadow-md text-[1vw]"
                    >
                        Update Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
