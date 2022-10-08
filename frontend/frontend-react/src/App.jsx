import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Admin from "./components/Admin";

function App() {
    return (
    <BrowserRouter>
        <section className="login-section">
            <LoginForm />
        </section>
        <Routes>
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="/client" element={<Client />} />
            <Route path="/teacher" element={<Teacher />} /> */}
        </Routes>
    </BrowserRouter>
    )
}

export default App;
