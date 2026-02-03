import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { EmergencyProvider } from './context/EmergencyContext';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import RoleSelection from './pages/RoleSelection';
import Login from './pages/Login';
import StudentDashboard from './pages/student/Dashboard';
import FacultyDashboard from './pages/faculty/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';

// Student Modules
import StudentUpdates from './pages/student/Updates';
import StudentAttendance from './pages/student/Attendance';
import StudentClubs from './pages/student/Clubs';
import StudentLostFound from './pages/student/LostFound';
import StudentTalent from './pages/student/Talent';

function App() {
  return (
    <AuthProvider>
      <EmergencyProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/roles" element={<RoleSelection />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes (Wrapped in Layout) */}
            <Route element={<Layout />}>
              {/* Student Routes */}
              <Route path="/student/dashboard" element={<StudentDashboard />} />
              <Route path="/student/updates" element={<StudentUpdates />} />
              <Route path="/student/attendance" element={<StudentAttendance />} />
              <Route path="/student/clubs" element={<StudentClubs />} />
              <Route path="/student/lost-found" element={<StudentLostFound />} />
              <Route path="/student/talent" element={<StudentTalent />} />

              {/* Faculty Routes */}
              <Route path="/faculty/dashboard" element={<FacultyDashboard />} />

              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </EmergencyProvider>
    </AuthProvider>
  );
}

export default App;
