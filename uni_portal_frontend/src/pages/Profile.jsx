import React from 'react';

const Profile = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Student Profile</h1>
            <div className="mt-4">
                <h2 className="text-xl">Personal Information</h2>
                {/* Add personal information fields here */}
            </div>
            <div className="mt-4">
                <h2 className="text-xl">Enrolled Courses</h2>
                {/* List enrolled courses here */}
            </div>
            <div className="mt-4">
                <h2 className="text-xl">Grades</h2>
                {/* Display grades here */}
            </div>
        </div>
    );
};

export default Profile;