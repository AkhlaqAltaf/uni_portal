import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaMicrosoft,
  FaCertificate,
  FaBook,
  FaSchool,
  FaCalendarAlt,
  FaClipboardList,
  FaCogs,
  FaWallet,
  FaUniversity,
  FaClipboardCheck,
  FaGraduationCap,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Sidebar = () => {
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [isCoursePortalDropdownOpen, setCoursePortalDropdownOpen] =
    useState(false);
  const [isSiblingDropdownOpen, setSiblingDropdownOpen] = useState(false);
  const [isScholarshipDropdownOpen, setScholarshipDropdownOpen] =
    useState(false);
  const [isFeeDropdownOpen, setFeeDropdownOpen] = useState(false);
  const [isSettingsDropdownOpen, setSettingsDropdownOpen] = useState(false);

  const toggleCoursesDropdown = () => {
    setCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  const toggleCoursePortalDropdown = () => {
    setCoursePortalDropdownOpen(!isCoursePortalDropdownOpen);
  };

  const toggleSiblingDropdown = () => {
    setSiblingDropdownOpen(!isSiblingDropdownOpen);
  };

  const toggleFeeDropdown = () => {
    setFeeDropdownOpen(!isFeeDropdownOpen);
  };

  const toggleSettingsDropdown = () => {
    setSettingsDropdownOpen(!isSettingsDropdownOpen);
  };
  const toggleScholarshipDropdown = () => {
    setScholarshipDropdownOpen(!isScholarshipDropdownOpen);
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white w-64 h-full p-4 shadow-lg">
      <h2 className="text-xl font-extrabold mb-6 text-center text-gray-200 border-b-2 border-gray-600 pb-2">
        Student Portal
      </h2>
      <ul className="space-y-2">
        <li>
          <Link
            to="/"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaHome className="mr-3" /> Home
          </Link>
        </li>
        {/* <li>
          <Link
            to="/profile"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaUser className="mr-3" /> Profile
          </Link>
        </li> */}
        {/* <li>
          <Link
            to="/dashboard"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaMicrosoft className="mr-3" /> Microsoft Office 365 / Teams
          </Link>
<<<<<<< HEAD
        </li>

        </li> */}
        {/* <li>
          <Link
            to="/dashboard"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaClipboardList className="mr-3" /> Data Verification
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaCertificate className="mr-3" /> Corona Certificates
          </Link>
        </li> */}

        <li>
          <button
            onClick={toggleCoursesDropdown}
            className="w-full flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300 text-left"
          >
            <FaBook className="mr-3" />
            Courses
            <span className="ml-auto">{isCoursesDropdownOpen ? "▲" : "▼"}</span>
          </button>
          {isCoursesDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-1">
              <li>
                <Link
                  to="/courses/CourseSummary"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Summary
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/class-proceedings"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Class Proceedings
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/quiz-marks"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Quiz Assignment Marks
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button
            onClick={toggleCoursePortalDropdown}
            className="w-full flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300 text-left"
          >
            <FaClipboardCheck className="mr-3" />
            Course Portal
            <span className="ml-auto">
              {isCoursePortalDropdownOpen ? "▲" : "▼"}
            </span>
          </button>
          {isCoursePortalDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-1">
              <li>
                <Link
                  to="/course-portal/mcq-test"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  MCQ Test
                </Link>
              </li>
              <li>
                <Link
                  to="/course-portal/subjective-test"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Subjective Test
                </Link>
              </li>
              <li>
                <Link
                  to="/course-portal/course-content"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Course Content
                </Link>
              </li>
              <li>
                <Link
                  to="/course-portal/assignments-summary"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Assignments Summary
                </Link>
              </li>
              <li>
                <Link
                  to="/course-portal/pending-assignments"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Pending Assignments
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaUniversity className="mr-3" /> Boarding
          </Link>
        </li>
        <li>
          <Link
            to="/library"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaBook className="mr-3" /> Library
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaSchool className="mr-3" /> Hostel
          </Link>
        </li>
        <li>
          <button
            onClick={toggleSiblingDropdown}
            className="w-full flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300 text-left"
          >
            <FaGraduationCap className="mr-3" />
            Sibling Info
            <span className="ml-auto">{isSiblingDropdownOpen ? "▲" : "▼"}</span>
          </button>
          {isSiblingDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-1">
              <li>
                <Link
                  to="/sibling-info/add-sibling-info"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Add Sibling Info
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            to="/result"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaClipboardCheck className="mr-3" /> Result
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaClipboardList className="mr-3" /> OBE
          </Link>
        </li>
        <li>
          <Link
            to="/timetable"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaCalendarAlt className="mr-3" /> Timetable
          </Link>
        </li>
        <li>
          <button
            onClick={toggleFeeDropdown}
            className="w-full flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300 text-left"
          >
            <FaWallet className="mr-3" />
            Fee
            <span className="ml-auto">{isFeeDropdownOpen ? "▲" : "▼"}</span>
          </button>
          {isFeeDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-1">
              <li>
                <Link
                  to="/fee/challan"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Challan
                </Link>
              </li>
              <li>
                <Link
                  to="/fee/history"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  to="/fee/installment"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Fee Installment
                </Link>
              </li>
              <li>
                <Link
                  to="/fee/installment-status"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Fee Installment Status
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button
            onClick={toggleScholarshipDropdown}
            className="w-full flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300 text-left"
          >
            <FaGraduationCap className="mr-3" />
            Scholarship
            <span className="ml-auto">
              {isScholarshipDropdownOpen ? "▲" : "▼"}
            </span>
          </button>
          {isScholarshipDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-1">
              <li>
                <Link
                  to="/scholarship-status"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  View Scholarship Status
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaUniversity className="mr-3" /> University Clearance
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
          >
            <FaClipboardList className="mr-3" /> Application Processing System
          </Link>
        </li>
        <li>
          <button
            onClick={toggleSettingsDropdown}
            className="w-full flex items-center px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-300 text-left"
          >
            <FaCogs className="mr-3" />
            Settings
            <span className="ml-auto">
              {isSettingsDropdownOpen ? "▲" : "▼"}
            </span>
          </button>
          {isSettingsDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-1">
              <li>
                <Link
                  to="/settings/profile"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/settings/change-password"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Change Password
                </Link>
              </li>
              <li>
                <Link
                  to="/settings/login-history"
                  className="block px-2 py-1 hover:text-gray-400"
                >
                  Login History
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
