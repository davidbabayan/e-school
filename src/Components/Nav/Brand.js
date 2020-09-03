import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Brand() {
    return (
        <Router>
            <Link to='/'>
                <div className='nav-brand'>
                    <FontAwesomeIcon className='nav-brand-icon' icon={faGraduationCap} />
                    <span>e-School</span>
                </div>
            </Link>
        </Router>
    );
}

export default Brand;