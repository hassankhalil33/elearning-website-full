import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tab from "./Tab";
import Profile from "./Profile";
import tabs from "../content/admin_tabs";

function Admin() {
    return (
        <section className="admin-section">
            <div className="admin-sidebar">
                <h1>E-Tuter</h1>
                {tabs.map((tab, index) => {
                    return (
                    <Tab 
                        key={index}
                        content={tab.content}
                        icon={tab.icon}
                    />
                    )
                })}
            </div>

            <div className="admin-feed">
                <h1>Dashboard</h1>
            </div>
            
            <div className="admin-profile">
                <h1>Profile</h1>
                <Profile 
                    fullName={"Hassan Khalil"}
                    type={"admin"}
                />
            </div>
        </section>
    )
}

export default Admin;
