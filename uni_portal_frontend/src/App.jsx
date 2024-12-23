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
const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/result" element={<Result />} />
        <Route path="/courses/CourseSummary" element={<CourseSummary />} />
        <Route
          path="/courses/class-proceedings"
          element={<ClassProceedings />}
        />
        <Route path="/courses/quiz-marks" element={<QuizAssignmentMarks />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
