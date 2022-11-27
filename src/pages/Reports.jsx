import React from "react";
import { Link } from "react-router-dom";
import sign from "../images/coming-soon.jpg"

const Reports = () => {
    return (
        <div className="coming-soon-page">
            <h1>Reports Page</h1>
            <div className="main-container">
                <img src={sign} alt="coming soon" />
                <Link to="/">Back to Products</Link>
            </div>
        </div>
    );
}

export default Reports;