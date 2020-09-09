import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const privacyStyle = {
        margin: '0 20px',
        color: 'white'
    }
    return (
        <div className="footer">
            <span>&copy; Madatech LLC 2020</span>
            <Link to='/privacy-policy'>
                <span style={privacyStyle}>Privacy Policy</span>
            </Link>
        </div>
    );
}

export default Footer;