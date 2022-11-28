import React from "react";
import { Link } from "react-router-dom";
import sign from "../images/coming-soon.jpg"

const Orders = () => {
    return (
        <div className="coming-soon-page">
            <h1>Orders Page</h1>
            <div className="main-container">
                <img src={sign} alt="coming soon" />
                <Link to="/App">Back to Products</Link>
            </div>
        </div>
    );
}

export default Orders;