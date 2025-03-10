import React from 'react';
import TeacherHeader from '../components/teacher/common/TeacherHeader';
import StudentHeader from '../components/student/common/Header';
import TeacherSidebar from '../components/teacher/common/TeacherSidebar';
import StudentSidebar from '../components/student/common/Sidebar';
import AdminHeader from '../components/Admin/common/AdminHeader';
import AdminSidebar from '../components/Admin/common/AdminSidebar';

const MainLayout = ({ children, user }) => {
    let Header, Sidebar;

    if (user?.role === 'teacher') {
        Header = TeacherHeader;
        Sidebar = TeacherSidebar;
    } else if (user?.role === 'admin') {
        Header = AdminHeader;
        Sidebar = AdminSidebar;
    } else {
        Header = StudentHeader;
        Sidebar = StudentSidebar;
    }
    return (
        <>
       <div className="flex flex-col bg-darkBlue pr-5 w-full">
    <div className="flex">
        <Sidebar user={user} />
        <div className="flex flex-col flex-1">
            <Header user={user} />
            <div className="py-4 my-4">
                {children}
            </div>
        </div>
    </div>
</div>
        </>
    );
};

export default MainLayout;