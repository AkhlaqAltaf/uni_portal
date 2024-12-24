// filepath: src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Timetable from "./pages/TimeTable";
import Result from "./pages/Result";
import MainLayout from "./layouts/MainLayout";
import CourseSummary from "./components/widgets/CourseSummary";
import ClassProceedings from "./components/widgets/ClassProceedings";
import QuizAssignmentMarks from "./components/widgets/QuizAssignmentMarks";
import McqsTestTable from "./components/widgets/McqsTestTable";
import AssignmentSummary from "./components/widgets/AssignmentSummary";
import PendingAssignments from "./components/widgets/PendingAssignments";
import AddSibling from "./components/widgets/AddSiblingInfo";
import LibraryComponent from "./components/widgets/LibraryComponent";
const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/result" element={<Result />} />
        <Route path="library" element={<LibraryComponent />} />
        <Route path="/courses/CourseSummary" element={<CourseSummary />} />
        <Route
          path="/courses/class-proceedings"
          element={<ClassProceedings />}
        />
        <Route path="/courses/quiz-marks" element={<QuizAssignmentMarks />} />
        <Route path="/course-portal/mcq-test" element={<McqsTestTable />} />
        <Route
          path="/course-portal/assignments-summary"
          element={<AssignmentSummary />}
        />
        <Route
          path="/course-portal/pending-assignments"
          element={<PendingAssignments />}
        />

        <Route path="/sibling-info/add-sibling-info" element={<AddSibling />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
