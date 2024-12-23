import React from 'react';
import stdpic from './../../assets/Student.png';

const Profile = () => {
    return (
        <div className="p-6 bg-gray-50">
            <div className="flex">
                {/* Profile Picture */}
                <div className="w-1/4 flex justify-center items-center">
                    <img
                        src={stdpic}  
                        alt="Profile"
                        className="w-full rounded-full"
                    />
                </div>

                {/* Profile Information */}
                <div className="w-3/4 grid grid-cols-2 gap-4 bg-white border border-gray-300 p-4">
                    <div className="flex">
                        <span className="font-semibold w-1/2">Name :</span>
                        <span>Zainab Iqbal</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold w-1/2">Roll No :</span>
                        <span>CIIT/SP22-BCS-044/ATD</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold w-1/2">Father Name :</span>
                        <span>Asif Iqbal</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold w-1/2">Registered Courses :</span>
                        <span>5</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold w-1/2">Total Registered Courses :</span>
                        <span>32</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold w-1/2">Program :</span>
                        <span>BCS</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold w-1/2">Current Section :</span>
                        <span>A</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold w-1/2">Current Advisor :</span>
                        <span>Muhammad Rafay Hannan</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold w-1/2">Date of Birth :</span>
                        <span>Jan 20, 2002</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold w-1/2">CNIC :</span>
                        <span>13503-6525555-2</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold w-1/2">Thesis Title :</span>
                        <span>NA</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
