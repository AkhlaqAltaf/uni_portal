import React from 'react';
import { FaSearch, FaBell, FaUser, FaSignOutAlt } from 'react-icons/fa';
import StudentInfo from "../../student/dashboard/widgets/StudentInfo"

const Header = () => {
    return (
        <>
        <div className="rounded-lg border-white/45 p-2 sm:p-6 px-2 md:px-16 border bg-[#2C2F48] bg-opacity-50 mt-4">
       <StudentInfo/>                            
</div>
        </>
    );
};

export default Header;