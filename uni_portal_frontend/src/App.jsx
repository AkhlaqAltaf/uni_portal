// filepath: src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Timetable from './pages/TimeTable';
import Result from './pages/Result';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </MainLayout>
  );
};

export default App;