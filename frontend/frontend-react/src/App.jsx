import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Admin from "./components/Admin";

function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={
                <section className="container">
                    <LoginForm />
                </section>
            } />

            <Route path="/admin" element={<Admin />} />

            {/* <Route path="/client" element={<Client />} />
            <Route path="/teacher" element={<Teacher />} /> */}
        </Routes>
    </Router>
    )
}

export default App;
