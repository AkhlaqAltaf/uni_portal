import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./components/Login";
import TeacherDashboard from "./components/teacher/dashboard/TeacherDashboard";
import Dashboard from "./components/student/dashboard/Dashboard";

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
      {user.role === 'teacher' ? (
          <>
            <Route path="/" element={<TeacherDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
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