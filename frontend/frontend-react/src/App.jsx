import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
    return (
    <section className="login-section">
        <form className="login-form">
            <h3>E-Tuter</h3>
            <div>
                <Input
                    type={"text"}
                    name={"username"}
                    placeholder={"Username"}
                />
                <Input
                    type={"password"}
                    name={"password"}
                    placeholder={"Password"}
                />
                <Input
                    type={"password"}
                    name={"password-confirm"}
                    placeholder={"Confirm Password"}
                />
            </div>
            <Button
                content={"Sign In"}
            />
        </form>
    </section>
    )
}

export default App;
