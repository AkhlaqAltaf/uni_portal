import Dashboard from "../components/student/dashboard/Dashboard";
import Profile from "../components/student/pages/Profile";
import Settings from "../components/student/pages/Settings";
import Timetable from "../components/student/pages/TimeTable";
import Result from "../components/student/pages/Result";
import LibraryComponent from "../components/student/pages/LibraryComponent";
import CourseSummary from "../components/student/pages/CourseSummary";
import ClassProceedings from "../components/student/pages/ClassProceedings";
import QuizAssignmentMarks from "../components/student/pages/QuizAssignmentMarks";
import McqsTestTable from "../components/student/pages/McqsTestTable";
import SubjectiveTestTable from "../components/student/pages/SubjectiveTestTable";
import CourseContent from "../components/student/pages/CourseContent";
import AssignmentSummary from "../components/student/pages/AssignmentSummary";
import PendingAssignments from "../components/student/pages/PendingAssignments";
import AddSibling from "../components/student/pages/AddSiblingInfo";
import ScholarshipStatus from "../components/student/pages/ScholarshipStatus";
import Challan from "../components/student/pages/fee/Challan";
import FeeHistory from "../components/student/pages/fee/FeeHistory";
import FeeInstallment from "../components/student/pages/fee/FeeInstallment";
import FeeInstallmentStatus from "../components/student/pages/fee/FeeInstallmentStatus";
import ProfileSettings from "../components/student/pages/settings/ProfileSettings";
import ChangePassword from "../components/student/pages/settings/ChangePassword";
import LoginHistory from "../components/student/pages/settings/LoginHistory";


import TeacherDashboard from "../components/teacher/dashboard/TeacherDashboard";


export const teacherRoutes = [
  { path: "/teacher", element: <TeacherDashboard />, role: "teacher" },

];

export const studentRoutes = [
  { path: "/student", element: <Dashboard />, role: "student" },
  { path: "/student/profile", element: <Profile /> },
  { path: "/student/settings", element: <Settings /> },
  { path: "/student/timetable", element: <Timetable /> },
  { path: "/student/result", element: <Result /> },
  { path: "/student/library", element: <LibraryComponent /> },
  { path: "/student/courses/summary", element: <CourseSummary /> },
  { path: "/student/courses/proceedings", element: <ClassProceedings /> },
  { path: "/student/courses/quiz-marks", element: <QuizAssignmentMarks /> },
  { path: "/student/courses/mcq-test", element: <McqsTestTable /> },
  { path: "/student/courses/subjective-test", element: <SubjectiveTestTable /> },
  { path: "/student/courses/content", element: <CourseContent /> },
  { path: "/student/courses/assignments", element: <AssignmentSummary /> },
  { path: "/student/courses/pending-assignments", element: <PendingAssignments /> },
  { path: "/student/info/add-sibling", element: <AddSibling /> },
  { path: "/student/scholarship", element: <ScholarshipStatus /> },
  { path: "/student/fee/challan", element: <Challan /> },
  { path: "/student/fee/history", element: <FeeHistory /> },
  { path: "/student/fee/installment", element: <FeeInstallment /> },
  { path: "/student/fee/status", element: <FeeInstallmentStatus /> },
  { path: "/student/settings/profile", element: <ProfileSettings /> },
  { path: "/student/settings/password", element: <ChangePassword /> },
  { path: "/student/settings/login-history", element: <LoginHistory /> },
];

export default routes;