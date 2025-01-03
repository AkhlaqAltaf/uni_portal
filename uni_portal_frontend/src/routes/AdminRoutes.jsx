import ViewAllStudents from "../components/Admin/dashboard/Widgets/ViewAllStudents";
import EnrollmentStatus from "../components/Admin/dashboard/Widgets/Enrollment Status";
import AddNewStudent from "../components/Admin/dashboard/Widgets/AddNewStudent";
import Dashboard from "../components/Admin/dashboard/AdminDashboard";
import PerformanceReport from "../components/Admin/dashboard/Widgets/PerformanceReport";
import { useInRouterContext } from "react-router-dom";
import ViewAllFaculty from "../components/Admin/dashboard/Widgets/ViewAllFaculty";
import AddNewFaculty from "../components/Admin/dashboard/Widgets/AddNewFaculty";
import AssignCourseToFaculty from "../components/Admin/dashboard/Widgets/AssignCourses";
import AssignCourses from "../components/Admin/dashboard/Widgets/AssignCourses";
import FacultyPerformance from "../components/Admin/dashboard/Widgets/FacultyPerformace";
import ManageCourses from "../components/Admin/dashboard/Widgets/ManageCourses";
import AddNewCourse from "../components/Admin/dashboard/Widgets/AddNewCourse";
import CourseSchedule from "../components/Admin/dashboard/Widgets/CourseSchedule";
import EnrollmentRequests from "../components/Admin/dashboard/Widgets/EnrollmentRequests";
export const adminRoutes = [
    { path: "/", element: <Dashboard /> },
   
    { path: "/Students/ViewAllStudents", element: <ViewAllStudents /> },
    { path: "/Students/AddNewStudent", element: <AddNewStudent /> },
    { path: "/Students/EnrollmentStatus", element: <EnrollmentStatus /> },
    { path: "/Students/PerformanceReport", element:  <PerformanceReport/>},
    { path: "/Faculty/ViewAllFaculty", element:  <ViewAllFaculty/>},
    { path: "/Faculty/AddNewFaculty", element:  <AddNewFaculty/>},
    { path: "/Faculty/AssignCourses", element:  <AssignCourses/>},
    { path: "/Faculty/FacultyPerformance", element:  <FacultyPerformance/>},
    { path: "/Courses/ManageCourses", element:  <ManageCourses/>},
    { path: "/Courses/AddnewCourse", element:  <AddNewCourse/>},
    { path: "/Courses/CourseSchedule", element:  <CourseSchedule/>},
    { path: "/Courses/EnrollmentRequests", element:  <EnrollmentRequests/>},

]