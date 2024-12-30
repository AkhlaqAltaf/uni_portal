import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome, FaUser, FaMicrosoft, FaCertificate, FaBook, FaSchool,
  FaCalendarAlt, FaClipboardList, FaCogs, FaWallet, FaUniversity,
  FaClipboardCheck, FaGraduationCap
} from "react-icons/fa";

const MenuItem = ({ to, icon: Icon, children, onClick, isDropdown, isOpen, isActive }) => (
  <li>
    {to ? (
      <Link
        to={to}
        className={`flex items-center px-4 py-2.5 rounded-lg transition-all duration-300
                   ${isActive 
                     ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white shadow-lg' 
                     : 'hover:bg-white/10'}`}
      >
        <Icon className={`w-5 h-5 mr-3 transition-transform duration-300
                       ${isActive ? 'scale-110 text-purple-400' : ''}`} />
        <span className="font-medium">{children}</span>
      </Link>
    ) : (
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg
                 transition-all duration-300 hover:bg-white/10 group"
      >
        <div className="flex items-center">
          <Icon className="w-5 h-5 mr-3 group-hover:text-purple-400 transition-colors" />
          <span className="font-medium">{children}</span>
        </div>
        {isDropdown && (
          <span className={`transform transition-transform duration-300 
                          ${isOpen ? 'rotate-180' : ''}`}>
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
      className="block px-4 py-2 rounded-lg transition-all duration-300
                 text-gray-300 hover:bg-white/5 hover:text-purple-300"
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
    <div className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 
                    text-white w-64 min-h-screen backdrop-blur-lg shadow-xl 
                    border-r border-white/10">
      <div className="px-4 py-6 space-y-4">
        <nav>
          <ul className="space-y-1.5">
            <MenuItem 
              to="/" 
              icon={FaHome} 
              isActive={isActive('/')}
            >
              Home
            </MenuItem>

            <MenuItem 
              icon={FaBook}
              onClick={() => toggleDropdown('student-management')}
              isDropdown
              isOpen={dropdowns.courses}
            >
              Student Management
            </MenuItem>
            {dropdowns.courses && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn">
                <SubMenuItem to="/student-management/view-all-students">View All Students</SubMenuItem>
                <SubMenuItem to="/student-management/add-new-student">Add New Student</SubMenuItem>
                <SubMenuItem to="/student-management/enrollment-status">Enrollment Status</SubMenuItem>
                <SubMenuItem to="/student-management/performance-reports">Performance Reports</SubMenuItem>
              </ul>
            )}

            <MenuItem 
              icon={FaClipboardCheck}
              onClick={() => toggleDropdown('faculty-management')}
              isDropdown
              isOpen={dropdowns.coursePortal}
            >
             Faculty Management
            </MenuItem>
            {dropdowns.coursePortal && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn">
                <SubMenuItem to="/faculty-management/view-all-faculty">View All Faculty</SubMenuItem>
                <SubMenuItem to="/faculty-management/add-new-faculty">Add New Faculty</SubMenuItem>
                <SubMenuItem to="/faculty-management/assign-courses">Assign Courses</SubMenuItem>
                <SubMenuItem to="/faculty-management/faculty-performance">Faculty Performance</SubMenuItem>
                
              </ul>
            )}

            <MenuItem 
              to="/ course-management" 
              icon={FaUniversity} 
              isActive={isActive('/course-management')}
            >
             Course Management
            </MenuItem>
            {dropdowns.coursePortal && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn">
                <SubMenuItem to="/course-management/manage-courses">Manage Courses</SubMenuItem>
                <SubMenuItem to="/course-management/qdd-new-course">Add New Course</SubMenuItem>
                <SubMenuItem to="/course-management/course-schedules">Course Schedules</SubMenuItem>
                <SubMenuItem to="/course-management/Enrollment-requests">Enrollment Requests</SubMenuItem>
                
              </ul>
            )}

            <MenuItem 
              to="/examination&-results" 
              icon={FaBook} 
              isActive={isActive('/examination&-results')}
            >
            Examination & Results
            </MenuItem>
            {dropdowns.coursePortal && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn">
                <SubMenuItem to="/examination&-results/manage-exams<">Manage Exams</SubMenuItem>
                <SubMenuItem to="/examination&-results/upload-results">Upload Results</SubMenuItem>
                <SubMenuItem to="/examination&-results/view-results-analytics">View Results Analytics</SubMenuItem>
                
                
              </ul>
            )}


            <MenuItem 
              to="/fee-management" 
              icon={FaSchool} 
              isActive={isActive('/fee-management')}
            >
           Fee Management
            </MenuItem>
            {dropdowns.coursePortal && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn">
                <SubMenuItem to="/fee-management/fee-collection">Fee Collection</SubMenuItem>
                <SubMenuItem to="/fee-management/pending-payments">Pending Payments</SubMenuItem>
                <SubMenuItem to="/fee-management/payment-history">Payment History</SubMenuItem>
                
                
              </ul>
            )}
            

            <MenuItem 
              icon={FaGraduationCap}
              onClick={() => toggleDropdown('sibling')}
              isDropdown
              isOpen={dropdowns.sibling}
            >
              Sibling Info
            </MenuItem>
            {dropdowns.sibling && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
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
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
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
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
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
      <div className="px-4 py-6 space-y-4">
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
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1">
                <SubMenuItem to="/settings/portal-settings">Portal Settings</SubMenuItem>
                <SubMenuItem to="/settings/role-management">Role Management</SubMenuItem>
                <SubMenuItem to="/settings/privacy-settings">Privacy Settings</SubMenuItem>
              </ul>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;