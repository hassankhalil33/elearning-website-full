import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Admin from "./components/Admin";

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

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/students" element={<Admin />} />
        <Route path="/admin/teachers" element={<Admin />} />
        <Route path="/admin/courses" element={<Admin />} />

        {/* <Route path="/client" element={<Student />} />
      <Route path="/teacher" element={<Teacher />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
