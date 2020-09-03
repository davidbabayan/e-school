import * as React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import Brand from './Brand';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

function Nav() {
    return (
        <Router>
            <div className="mobile-nav">
                <MobileNav />
            </div>
            <div className='desktop-nav'>
                <DesktopNav />
            </div>
        </Router>
    );
}

export default Nav;