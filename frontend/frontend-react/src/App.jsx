import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./screens/Admin/AdminDashboard";
import AdminStudents from "./screens/Admin/AdminStudents";
import AdminTeachers from "./screens/Admin/AdminTeachers";
import AdminCourses from "./screens/Admin/AdminCourses";
import TeacherDashboard from "./screens/Teacher/TeacherDashboard";
import TeacherStudents from "./screens/Teacher/TeacherStudents";
import TeacherAssignments from "./screens/Teacher/TeacherAssignments";
import TeacherAnnouncements from "./screens/Teacher/TeacherAnnouncements";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <section className="login-section">
              <LoginForm />
            </section>
          }
        />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/teachers" element={<AdminTeachers />} />
        <Route path="/admin/courses" element={<AdminCourses />} />

        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/" element={<TeacherStudents />} />
        <Route path="/teacher/" element={<TeacherAssignments />} />
        <Route path="/teacher/" element={<TeacherAnnouncements />} />


        {/* <Route path="/student" element={<Student />} />
        <Route path="/student/assignments" element={<Admin />} /> */}

      </Routes>
    </Router>
  )
}

export default App;
