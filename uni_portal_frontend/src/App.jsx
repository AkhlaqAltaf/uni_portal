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
        ) : (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
