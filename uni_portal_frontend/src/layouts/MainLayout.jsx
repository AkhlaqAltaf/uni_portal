import React from 'react';
import TeacherHeader from '../components/teacher/common/TeacherHeader';
import StudentHeader from '../components/student/common/Header';
import TeacherSidebar from '../components/teacher/common/TeacherSidebar';
import StudentSidebar from '../components/student/common/Sidebar';

const MainLayout = ({ children, user }) => {
    // Select components based on user role
    const Header = user?.role === 'teacher' ? TeacherHeader : StudentHeader;
    const Sidebar = user?.role === 'teacher' ? TeacherSidebar : StudentSidebar;

    return (
        <div className="flex flex-col h-screen">
            <Header user={user} />
            <div className="flex flex-1">
                <Sidebar user={user} />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;