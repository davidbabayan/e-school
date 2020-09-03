import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Pricing.css';

function Pricing() {
    return (
        <div className="pricing">
            <p className='title'>Pricing</p>
            <div className="price">
                <div className="monthly">2500֏ / $5<br />Monthly</div>
                <div className="separate"></div>
                <div className="yearly">27500֏ / $55<br />Yearly</div>
            </div>
            <div className="info">
                <ul>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                        Create, Edit and Remove Students
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                        Create, Edit and Remove Teachers
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                        Manage Classes on Teams
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                        Manage Licensing
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                        7 day money back guarantee
                    </li>
                    <li>
                        <FontAwesomeIcon className='coming' icon={faBookmark} />
                        Manage E-Mail Options (Cooming Soon)
                    </li>
                    <li>
                        <FontAwesomeIcon className='coming' icon={faBookmark} />
                        Manage Planner Permissions (Cooming Soon)
                    </li>
                    <li>
                        <FontAwesomeIcon className='coming' icon={faBookmark} />
                        Manage Stream Permissions (Cooming Soon)
                    </li>
                    <li>
                        <FontAwesomeIcon className='coming' icon={faBookmark} />
                        Manage Finances through PowerApps App (Cooming Soon)
                    </li>
                </ul>
            </div>
            <hr />
            <div className="demo">
                <div>Still thinking?</div>
                <Router>
                    <Link to='/demo'>
                        <div className='to-demo'>
                            Watch Demo
                        </div>
                    </Link>
                </Router>
            </div>
        </div>
    );
}

export default Pricing;