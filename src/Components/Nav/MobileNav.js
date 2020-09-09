import * as React from 'react';
import { useState, Fragment } from 'react';
import { Link, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import Hamburger from 'hamburger-react'
import './Nav.css';
import Brand from './Brand';

function MobileNav() {
    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <div className='nav'>

                <Hamburger color='#fff' toggled={isOpen} toggle={setOpen} />
                <Brand />
                <ul className='nav-auth'>
                    <Link to='/login'>
                        <li>
                            <div>
                                <FontAwesomeIcon className='nav-brand-icon' icon={faSignInAlt} />
                                <span>Login</span>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
            {isOpen ?
                <div id='navMenu' className="nav-mobile-menu">
                    <ul>
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
                </div> : <div></div>
            }
        </Fragment>
    );
}

export default MobileNav;