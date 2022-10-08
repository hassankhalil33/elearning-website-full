import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
    return (
    <form>
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
    )
}

export default App;
