import React from "react";
import Tab from "./Tab";
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
                <h1>Im the Feed</h1>
            </div>
            <div className="admin-profile">
                <h1>Im the Profile</h1>
            </div>
        </section>
    )
}

export default Admin;
