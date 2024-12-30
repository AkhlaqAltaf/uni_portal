import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./components/Login";
import TeacherDashboard from "./components/teacher/dashboard/TeacherDashboard";
import Dashboard from "./components/student/dashboard/Dashboard";
import MyCourses from "./components/teacher/dashboard/widgets/MyCourses";
import CourseMaterials from "./components/teacher/dashboard/widgets/CourseMaterials";
import CourseSchedule from "./components/teacher/dashboard/widgets/CourseSchedule";
import MarkAttendance from "./components/teacher/dashboard/widgets/MarkAttendance";
import ViewRecords from "./components/teacher/dashboard/widgets/ViewRecords";
import Reports from "./components/teacher/dashboard/widgets/Reports";
import GradeAssignments from "./components/teacher/dashboard/widgets/GradeAssignments";
import GradeQuizzes from "./components/teacher/dashboard/widgets/GradeQuizzes";
import GradeExams from "./components/teacher/dashboard/widgets/GradeExams";
import CreateAssignments from "./components/teacher/dashboard/widgets/CreateAssignments";
import ManageAssignments from "./components/teacher/dashboard/widgets/ManageAssignments";
import ViewSubmission from "./components/teacher/dashboard/widgets/ViewSubmission";
import CreateExam from "./components/teacher/dashboard/widgets/CreateExam";
import ManageExams from "./components/teacher/dashboard/widgets/ManageExams";
import Result from "./components/teacher/dashboard/widgets/Results";
import Timetable from "./components/teacher/dashboard/widgets/Timetable";
import Profile from "./components/teacher/dashboard/widgets/Profile";
import ChangePassword from "./components/teacher/dashboard/widgets/ChangePassword";
import Preferences from "./components/teacher/dashboard/widgets/Preferences";
import AdminDashboard from "./components/Admin/dashboard/AdminDashboard";

import CourseSummary from "./components/student/dashboard/widgets/CourseSummary";
import ClassProceedings from "./components/student/dashboard/widgets/ClassProceedings";
import QuizAssignmentMarks from "./components/student/dashboard/widgets/QuizAssignmentMarks";
import McqsTestTable from "./components/student/dashboard/widgets/McqsTestTable";
import SubjectiveTestTable from "./components/student/dashboard/widgets/SubjectiveTestTable";
import CourseContent from "./components/student/dashboard/widgets/CourseContent";
import AssignmentSummary from "./components/student/dashboard/widgets/AssignmentSummary";
import PendingAssignments from "./components/student/dashboard/widgets/PendingAssignments";

import Challan from "./components/student/dashboard/widgets/Challan";
import FeeHistory from "./components/student/dashboard/widgets/FeeHistory";
import FeeInstallment from "./components/student/dashboard/widgets/FeeInstallment";
import FeeInstallmentStatus from "./components/student/dashboard/widgets/FeeInstallmentStatus";

import ProfileSettings from "./components/student/dashboard/widgets/ProfileSettings";
import Change_Password from "./components/student/dashboard/widgets/ChangePassword";
import LoginHistory from "./components/student/dashboard/widgets/LoginHistory";

import LibraryComponent from "./components/student/dashboard/widgets/LibraryComponent";
import AddSibling from "./components/student/dashboard/widgets/AddSiblingInfo";
import ScholarshipStatus from "./components/student/dashboard/widgets/ScholarshipStatus";


const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <MainLayout user={user}>
      <Routes>
        {user.role === "teacher" ? (
          <>
            <Route path="/" element={<TeacherDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/teacher/courses/mycourses" element={<MyCourses />} />
            <Route
              path="/teacher/courses/materials"
              element={<CourseMaterials />}
            />
            <Route
              path="/teacher/courses/schedule"
              element={<CourseSchedule />}
            />
            <Route
              path="/teacher/attendance/mark"
              element={<MarkAttendance />}
            />
            <Route
              path="/teacher/attendance/viewrecords"
              element={<ViewRecords />}
            />
            <Route path="/teacher/attendance/reports" element={<Reports />} />

            <Route
              path="/teacher/grading/assignments"
              element={<GradeAssignments />}
            />
            <Route path="/teacher/grading/quizzes" element={<GradeQuizzes />} />
            <Route path="/teacher/grading/exams" element={<GradeExams />} />
            <Route
              path="/teacher/assignments/create"
              element={<CreateAssignments />}
            />
            <Route
              path="/teacher/assignments/manage"
              element={<ManageAssignments />}
            />
            <Route
              path="/teacher/assignments/submissions"
              element={<ViewSubmission />}
            />

            <Route path="/teacher/exams/create" element={<CreateExam />} />
            <Route path="/teacher/exams/manage" element={<ManageExams />} />
            <Route path="/teacher/exams/results" element={<Result />} />

            <Route path="/teacher/timetable" element={<Timetable />} />

            <Route path="/teacher/settings/profile" element={<Profile />} />
            <Route
              path="/teacher/settings/password"
              element={<ChangePassword />}
            />
            <Route
              path="/teacher/settings/preferences"
              element={<Preferences />}
            />
          </>
        ) : user.role === "Admin" ? (
          <>
            {/* Admin routes */}
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
           
          </>
        ) : (
          <>
            {/* Student routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses/CourseSummary" element={<CourseSummary />} />
            <Route path="/courses/class-proceedings" element={<ClassProceedings />} />
            <Route path="/courses/quiz-marks" element={<QuizAssignmentMarks />} />

            <Route path="/course-portal/mcq-test" element={<McqsTestTable />} />
            <Route path="/course-portal/subjective-test" element={<SubjectiveTestTable />} />
            <Route path="/course-portal/course-content" element={<CourseContent />} />
            <Route path="/course-portal/assignments-summary" element={<AssignmentSummary />} />
            <Route path="/course-portal/pending-assignments" element={<PendingAssignments />} />

            <Route path="/fee/challan" element={<Challan />} />
            <Route path="/fee/history" element={<FeeHistory />} />
            <Route path="/fee/installment" element={<FeeInstallment />} />
            <Route path="/fee/installment-status" element={<FeeInstallmentStatus />} />

            <Route path="/settings/profile" element={<ProfileSettings />} />
            <Route path="/settings/change-password" element={<Change_Password />} />
            <Route path="/settings/login-history" element={<LoginHistory />} />
            <Route path="/library" element={<LibraryComponent />} />
            <Route path="/scholarship-status" element={<ScholarshipStatus />} />
            <Route path="/info/sibling" element={<AddSibling />} />
            {/* 
            

            
            
            <Route path="/settings/profile" element={<ProfileSettings />} />
            <Route path="/settings/password" element={<stdChangePassword />} />
            <Route path="/settings/login-history" element={<LoginHistory />} /> */}
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
