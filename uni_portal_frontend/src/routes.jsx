import Dashboard from "./components/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Timetable from "./pages/TimeTable";
import Result from "./pages/Result";
import LibraryComponent from "./components/widgets/LibraryComponent";
import CourseSummary from "./components/widgets/CourseSummary";
import ClassProceedings from "./components/widgets/ClassProceedings";
import QuizAssignmentMarks from "./components/widgets/QuizAssignmentMarks";
import McqsTestTable from "./components/widgets/McqsTestTable";
import SubjectiveTestTable from "./components/widgets/SubjectiveTestTable";
import CourseContent from "./components/widgets/CourseContent";
import AssignmentSummary from "./components/widgets/AssignmentSummary";
import PendingAssignments from "./components/widgets/PendingAssignments";
import AddSibling from "./components/widgets/AddSiblingInfo";
import ScholarshipStatus from "./components/widgets/ScholarshipStatus";
import Challan from "./components/widgets/Challan";
import FeeHistory from "./components/widgets/FeeHistory";
import FeeInstallment from "./components/widgets/FeeInstallment";
import FeeInstallmentStatus from "./components/widgets/FeeInstallmentStatus";
import ProfileSettings from "./components/widgets/ProfileSettings";
import ChangePassword from "./components/widgets/ChangePassword";
import LoginHistory from "./components/widgets/LoginHistory";

const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/profile", element: <Profile /> },
  { path: "/settings", element: <Settings /> },
  { path: "/timetable", element: <Timetable /> },
  { path: "/result", element: <Result /> },
  { path: "/library", element: <LibraryComponent /> },
  { path: "/courses/CourseSummary", element: <CourseSummary /> },
  { path: "/courses/class-proceedings", element: <ClassProceedings /> },
  { path: "/courses/quiz-marks", element: <QuizAssignmentMarks /> },
  { path: "/course-portal/mcq-test", element: <McqsTestTable /> },
  { path: "/course-portal/subjective-test", element: <SubjectiveTestTable /> },
  { path: "/course-portal/course-content", element: <CourseContent />},
  {
    path: "/course-portal/assignments-summary",
    element: <AssignmentSummary />,
  },
  {
    path: "/course-portal/pending-assignments",
    element: <PendingAssignments />,
  },
  { path: "/sibling-info/add-sibling-info", element: <AddSibling /> },
  { path: "/scholarship-status", element: <ScholarshipStatus /> },
  { path: "/fee/challan", element: <Challan /> },
  { path: "/fee/history", element: <FeeHistory /> },
  { path: "/fee/installment", element: <FeeInstallment /> },
  { path: "/fee/installment-status", element: <FeeInstallmentStatus /> },
  { path: "/settings/profile", element: <ProfileSettings /> },
  { path: "/settings/change-password", element: <ChangePassword /> },
  { path: "/settings/login-history", element: <LoginHistory /> },
];

export default routes;
