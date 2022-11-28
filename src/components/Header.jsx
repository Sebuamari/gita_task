import React from "react";
import { Link } from "react-router-dom";
import '../styles/App.scss';

const Header = () => {
    return (
        <header className="header">
            <h2>Online Shop Admin</h2>
            <nav>
                <Link to="/App">Products</Link>
                <Link to="/Customers">Customers</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/Reports">Reports</Link>
            </nav>
        </header>
    );
}

export default Header;