import ViewAllStudents from "../components/Admin/dashboard/Widgets/ViewAllStudents";
import EnrollmentStatus from "../components/Admin/dashboard/Widgets/Enrollment Status";
import AddNewStudent from "../components/Admin/dashboard/Widgets/AddNewStudent";
import Dashboard from "../components/Admin/dashboard/AdminDashboard";
import { useInRouterContext } from "react-router-dom";
export const adminRoutes = [
    { path: "/", element: <Dashboard /> },
   
    { path: "/Students/ViewAllStudents", element: <ViewAllStudents /> },
    { path: "/Students/AddNewStudent", element: <AddNewStudent /> },
    { path: "/Students/EnrollmentStatus", element: <EnrollmentStatus /> },

]