import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Admin from "./components/Admin";

function App() {
    return (
    <Routes>
        <Route path="/" element={
            <section className="container">
                <LoginForm />
            </section>
        } />

        <Route path="/admin" element={
            <section className="container">
                <Admin />
            </section>
        } />
        
        {/* <Route path="/client" element={<Client />} />
        <Route path="/teacher" element={<Teacher />} /> */}
    </Routes>
    )
}

export default App;
