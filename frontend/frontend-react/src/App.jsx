import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./screens/Admin/AdminDashboard";
import AdminStudents from "./screens/Admin/AdminStudents";

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
        {/* <Route path="/admin/teachers" element={<Admin />} />
        <Route path="/admin/courses" element={<Admin />} /> */}

        {/* <Route path="/student" element={<Student />} />
        <Route path="/student/assignments" element={<Admin />} /> */}

        {/* <Route path="/teacher" element={<Student />} />
      <Route path="/teacher" element={<Teacher />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
