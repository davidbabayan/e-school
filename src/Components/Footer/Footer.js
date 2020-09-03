import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Footer() {
    const privacyStyle = {
        margin: '0 20px'
    }
    return (
        <div className="footer">
            <span>&copy; Madatech LLC 2020</span>
            <Router>
                <Link to='/privacy-policy'>
                    <span style={privacyStyle}>Privacy Policy</span>
                </Link>
            </Router>
        </div>
    );
}

export default Footer;