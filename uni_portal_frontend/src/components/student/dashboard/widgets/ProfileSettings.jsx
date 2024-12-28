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
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea
                        value={profile.address}
                        onChange={(e) => setProfile({...profile, address: e.target.value})}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={profile.notifications}
                        onChange={(e) => setProfile({...profile, notifications: e.target.checked})}
                        className="mr-2"
                    />
                    <label className="text-sm text-gray-700">Receive email notifications</label>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default ProfileSettings;