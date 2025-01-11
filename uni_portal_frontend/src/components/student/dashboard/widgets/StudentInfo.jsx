import React from "react";
import stdpic from "../../../../assets/Student.png";
import {
  FaIdCard,
  FaUserTie,
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaUserCog,
  FaBirthdayCake,
  FaPassport,
  FaScroll,
} from "react-icons/fa";

const StudentInfo = () => {
  return (
    <div className="p-3 bg-gradient-to-br from-gray-100 to-indigo-50 rounded-2xl shadow-lg w-full max-w-full mx-auto">
      <div className="flex flex-col lg:flex-row gap-3">
        {/* Profile Picture Section */}
        <div className="lg:w-1/3 flex flex-col justify-center items-center">
          <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-indigo-400 shadow-md flex justify-center items-center">
            <img
              src={stdpic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-lg font-semibold text-gray-800">
            Zainab Iqbal
          </p>
        </div>

        {/* Profile Information Section */}
        <div className="lg:w-2/3 bg-white rounded-xl shadow-sm p-3 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <InfoItem
              icon={<FaIdCard />}
              label="Roll No"
              value="CIIT/SP22-BCS-044/ATD"
            />
            <InfoItem
              icon={<FaUserTie />}
              label="Father Name"
              value="Asif Iqbal"
            />
            <InfoItem icon={<FaBook />} label="Registered Courses" value="5" />
            <InfoItem
              icon={<FaBook />}
              label="Total Registered Courses"
              value="32"
            />
            <InfoItem icon={<FaGraduationCap />} label="Program" value="BCS" />
            <InfoItem icon={<FaUsers />} label="Current Section" value="A" />
            <InfoItem
              icon={<FaUserCog />}
              label="Current Advisor"
              value="Muhammad Rafay Hannan"
            />
            <InfoItem
              icon={<FaBirthdayCake />}
              label="Date of Birth"
              value="Jan 20, 2002"
            />
            <InfoItem
              icon={<FaPassport />}
              label="CNIC"
              value="13503-6525555-2"
            />
            <InfoItem icon={<FaScroll />} label="Thesis Title" value="NA" />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="p-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-sm">
    <div className="flex items-start">
      <div className="text-indigo-600 text-lg mr-3">{icon}</div>
      <div className="flex-1">
        <p className="text-xs font-medium text-gray-500">{label}</p>
        <p className="text-sm text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

export default StudentInfo;


