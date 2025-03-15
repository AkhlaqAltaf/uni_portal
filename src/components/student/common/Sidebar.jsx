import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome, FaUser, FaMicrosoft, FaCertificate, FaBook, FaSchool,
  FaCalendarAlt, FaClipboardList, FaCogs, FaWallet, FaUniversity,
  FaClipboardCheck, FaGraduationCap
} from "react-icons/fa";

import stdpic from "../../../assets/Student.png";

import "../../../assets/styles.css"

// import Info from "../dashboard/widgets/StudentInfo";
// import StudentInfo from '../dashboard/widgets/StudentInfo';


const MenuItem = ({ to, icon: Icon, children, onClick, isDropdown, isOpen, isActive }) => (
  <li>
    {to ? (
      <Link
        to={to}
        className={`flex items-center px-1 py-2  sm:px-4 sm:py-5 transition-all duration-300 border-b-[1px] border-white/45
                   ${isActive 
                     ? 'bg-green-600 text-white shadow-lg' 
                     : ''}`}
      >
        <Icon className={`w-2 h-2 sm:w-5 sm:h-5 mr-2 sm:mr-6 transition-transform duration-300
                       ${isActive ? 'scale-110 bg-green-600 hover:bg-green-500' : ''}`} />
        <span className="font-normal text-[1.5vw] sm:text-[1vw] md:text-[1vw]">{children}</span>
      </Link>
    ) : (
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between px-1 py-2 sm:px-4 sm:py-5
          transition-all duration-300 group border-b-[1px] border-white/45
          ${isActive || isOpen ? 'sm:scale-110 bg-green-600 hover:bg-green-500 ' : ''}`}
      >
        <div className="flex items-center">
          <Icon className="w-2 h-2 sm:w-5 sm:h-5 mr-3 sm:mr-6  transition-colors" />
          <span className="font-normal text-[1.5vw] sm:text-[1vw] md:text-[1vw]">{children}</span>
        </div>
        {isDropdown && (
          <span className={`transform transition-transform duration-300 
                          ${isOpen ? 'rotate-180 text-[1.5vw] sm:text-[1vw] md:text-[1vw]' : 'text-[1.5vw] sm:text-[1vw] md:text-[1vw]'}`}>
            ▼
          </span>
        )}
      </button>
    )}
  </li>
);

const SubMenuItem = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="block px-2 py-1 sm:px-4 sm:py-2 rounded-lg transition-all duration-300
                 text-gray-300 hover:bg-green-600/15 text-[1.5vw]  sm:text-[1vw] md:text-[1vw] "
    > 
      {children}
    </Link>
  </li>
);

const Sidebar = () => {
  const location = useLocation();
  const [dropdowns, setDropdowns] = useState({
    courses: false,
    coursePortal: false,
    sibling: false,
    scholarship: false,
    fee: false,
    settings: false
  });

  const toggleDropdown = (key) => {
    setDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    // <div className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 
    //                 text-white w-64 min-h-screen backdrop-blur-lg shadow-xl 
    //                 border-r border-white/10">
    <div className="
    text-white w-3/12 sm:w-2/12    shadow-xl 
     border-white/45 border-[1px]  overflow-y-auto sticky top-0 custom-scrollbar m-4 mr-2 sm:m-4 rounded-lg bg-[#2C2F48] bg-opacity-50 flex-shrink-0">
                      {/* <StudentInfo/> */}
                      <div className="relative">
                                    <img
                                      src={stdpic}
                                      alt="Profile"
                                      className=" w-12 h-12 md:w-32 md:h-32 rounded-full shadow-xl transform transition duration-300 group-hover:scale-110 mt-2 sm:mt-10 mx-auto"
                                    />
                                  </div>
                                  <div>
                                    <h1 className="text-center mt-2 text-[2vw] font-thin">John Doe</h1>
                                  </div>
      <div className="pt-2 sm:pt-6 space-y-4">
        <nav>
          <ul className="space-y-1 sm:space-y-1.5">
            <MenuItem 
              to="/" 
              icon={FaHome} 
              isActive={isActive('/')}
            >
              Home
            </MenuItem>

            <MenuItem 
              icon={FaBook}
              onClick={() => toggleDropdown('courses')}
              isDropdown
              isOpen={dropdowns.courses}
            >
              Courses
            </MenuItem>
            {dropdowns.courses && (
              <ul className="mt-2 ml-1 pl-0 sm:ml-4 sm:pl-4 border-l border-purple-500/30 sm:space-y-1
                           animate-fadeIn ">
                <SubMenuItem to="/courses/CourseSummary">Summary</SubMenuItem>
                <SubMenuItem to="/courses/class-proceedings">Class Proceedings</SubMenuItem>
                <SubMenuItem to="/courses/quiz-marks">Quiz Assignment Marks</SubMenuItem>
              </ul>
            )}

            <MenuItem 
              icon={FaClipboardCheck}
              onClick={() => toggleDropdown('coursePortal')}
              isDropdown
              isOpen={dropdowns.coursePortal}
            >
              Course Portal
            </MenuItem>
            {dropdowns.coursePortal && (
              <ul className="mt-2 ml-1 pl-0 sm:ml-4 sm:pl-4 border-l border-purple-500/30 sm:space-y-1
                           animate-fadeIn">
                <SubMenuItem to="/course-portal/mcq-test">MCQ Test</SubMenuItem>
                <SubMenuItem to="/course-portal/subjective-test">Subjective Test</SubMenuItem>
                <SubMenuItem to="/course-portal/course-content">Course Content</SubMenuItem>
                <SubMenuItem to="/course-portal/assignments-summary">Assignments Summary</SubMenuItem>
                <SubMenuItem to="/course-portal/pending-assignments">Pending Assignments</SubMenuItem>
              </ul>
            )}

            <MenuItem 
              to="/boarding" 
              icon={FaUniversity} 
              isActive={isActive('/boarding')}
            >
              Boarding
            </MenuItem>

            <MenuItem 
              to="/library" 
              icon={FaBook} 
              isActive={isActive('/library')}
            >
              Library
            </MenuItem>

            <MenuItem 
              to="/hostel" 
              icon={FaSchool} 
              isActive={isActive('/hostel')}
            >
              Hostel
            </MenuItem>

            <MenuItem 
              icon={FaGraduationCap}
              onClick={() => toggleDropdown('sibling')}
              isDropdown
              isOpen={dropdowns.sibling}
            >
              Sibling Info
            </MenuItem>
            {dropdowns.sibling && (
              <ul className="mt-2 ml-1 pl-0 sm:ml-4 sm:pl-4 border-l border-purple-500/30 sm:space-y-1
                           animate-fadeIn">
                <SubMenuItem to="/sibling-info/add-sibling-info">Add Sibling Info</SubMenuItem>
              </ul>
            )}

            <MenuItem 
              to="/result" 
              icon={FaClipboardCheck} 
              isActive={isActive('/result')}
            >
              Result
            </MenuItem>

            <MenuItem 
              to="/obe" 
              icon={FaClipboardList} 
              isActive={isActive('/obe')}
            >
              OBE
            </MenuItem>

            <MenuItem 
              to="/timetable" 
              icon={FaCalendarAlt} 
              isActive={isActive('/timetable')}
            >
              Timetable
            </MenuItem>

            <MenuItem 
              icon={FaWallet}
              onClick={() => toggleDropdown('fee')}
              isDropdown
              isOpen={dropdowns.fee}
            >
              Fee
            </MenuItem>
            {dropdowns.fee && (
              <ul className="mt-2 ml-1 pl-0 sm:ml-4 sm:pl-4 border-l border-purple-500/30 sm:space-y-1
                           animate-fadeIn">
                <SubMenuItem to="/fee/challan">Challan</SubMenuItem>
                <SubMenuItem to="/fee/history">History</SubMenuItem>
                <SubMenuItem to="/fee/installment">Fee Installment</SubMenuItem>
                <SubMenuItem to="/fee/installment-status">Fee Installment Status</SubMenuItem>
              </ul>
            )}

            <MenuItem 
              icon={FaGraduationCap}
              onClick={() => toggleDropdown('scholarship')}
              isDropdown
              isOpen={dropdowns.scholarship}
            >
              Scholarship
            </MenuItem>
            {dropdowns.scholarship && (
              <ul className="mt-2 ml-1 pl-0 sm:ml-4 sm:pl-4 border-l border-purple-500/30 sm:space-y-1
                           animate-fadeIn">
                <SubMenuItem to="/scholarship-status">View Scholarship Status</SubMenuItem>
              </ul>
            )}

            <MenuItem 
              to="/university-clearance" 
              icon={FaUniversity} 
              isActive={isActive('/university-clearance')}
            >
              University Clearance
            </MenuItem>

            <MenuItem 
              to="/application-processing" 
              icon={FaClipboardList} 
              isActive={isActive('/application-processing')}
            >
              Application Processing System
            </MenuItem>
          </ul>
        </nav>
      </div>

      {/* Settings Section - Move above */}
      <div className="">
        <nav>
          <ul className="space-y-1.5">
            <MenuItem 
              icon={FaCogs}
              onClick={() => toggleDropdown('settings')}
              isDropdown
              isOpen={dropdowns.settings}
            >
              Settings
            </MenuItem>
            {dropdowns.settings && (
              <ul className="mt-2 ml-1 pl-0 sm:ml-4 sm:pl-4 border-l border-purple-500/30 sm:space-y-1
                           animate-fadeIn">
                <SubMenuItem to="/settings/profile">Profile</SubMenuItem>
                <SubMenuItem to="/settings/change-password">Change Password</SubMenuItem>
                <SubMenuItem to="/settings/login-history">Login History</SubMenuItem>
              </ul>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;