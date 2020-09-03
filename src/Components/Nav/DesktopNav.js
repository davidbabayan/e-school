import * as React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import Brand from './Brand';

function DesktopNav() {
    return (
        <Router>
            <div className='nav'>
                <div className='nav-left'>
                    <Brand />
                    <ul className='nav-menu'>
                        <Link to='/'>
                            <li>
                                <div>Home</div>
                            </li>
                        </Link>
                        <Link to='/about'>
                            <li>
                                <div>About Us</div>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='nav-right'>
                    <ul className='nav-auth'>
                        <Link to='/login'>
                            <li>
                                <div>
                                    <FontAwesomeIcon className='nav-brand-icon' icon={faSignInAlt} />
                                    Login
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </Router>
    );
}

export default DesktopNav;