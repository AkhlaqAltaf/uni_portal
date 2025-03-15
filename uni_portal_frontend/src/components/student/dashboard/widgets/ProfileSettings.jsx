import React, { useState } from 'react';

const ProfileSettings = () => {
    const [profile, setProfile] = useState({
        email: 'student@example.com',
        phone: '+92-300-1234567',
        address: 'Islamabad, Pakistan',
        notifications: true
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle profile update
    };

    return (
        <div className="p-3 md:p-6 border-[1px] border-white/35 text-white rounded-lg shadow-md">
            <h2 className="text-[2vw] font-bold text-center mb-3 md:mb-6">Profile Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                <div>
                    <label className="block text-[1vw] font-semibold">Email</label>
                    <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="w-full p-1 md:p-2 border-[#05945626] bg-green-600/30 rounded focus:outline-none focus:ring-2 focus:bg-green-600/70 text-white text-[1vw]"
                    />
                </div>
                <div>
                    <label className="block text-[1vw] font-semibold">Phone</label>
                    <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        className="w-full p-1 md:p-2 border-[#05945626] bg-green-600/30 rounded focus:outline-none focus:ring-2 focus:bg-green-600/70 text-white text-[1vw]"
                    />
                </div>
                <div>
                    <label className="block text-[1vw] font-semibold">Address</label>
                    <textarea
                        value={profile.address}
                        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                        className="w-full p-1 md:p-2  border-[#05945626] bg-green-600/30 rounded focus:outline-none focus:ring-2 focus:bg-green-600/70 text-white text-[1vw]"
                    />
                </div>
                <div className="flex items-center gap-1 md:gap-2 text-[1vw]">
                    <input
                        type="checkbox"
                        checked={profile.notifications}
                        onChange={(e) => setProfile({ ...profile, notifications: e.target.checked })}
                        className="form-checkbox text-[1vw]"
                    />
                    <label className="text-[1vw]">Receive email notifications</label>
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        type="submit"
                        className="bg-[#048C51] hover:bg-[#03924C] text-white py-2 px-2 md:px-4 rounded shadow-md text-[1vw]"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileSettings;
