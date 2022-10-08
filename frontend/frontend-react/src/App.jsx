import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
    return (
    <section className="login-section">
        <div>
            <form className="login-from">
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
                <Button />
            </form>
        </div>
    </section>
    )
}

export default App;
