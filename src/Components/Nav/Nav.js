import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import Brand from './Brand';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

function Nav() {
    return (
        <React.Fragment>
            <div className="mobile-nav">
                <MobileNav />
            </div>
            <div className='desktop-nav'>
                <DesktopNav />
            </div>
        </React.Fragment>
    );
}

export default Nav;