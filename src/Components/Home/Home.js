import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import Brand from '../Nav/Brand';

function Home() {
    return (
        <div className='home'>
            <div className="home-intro">
                <div className="home-intro-text">
                    <div className="home-intro-text-slogan">
                        Manage Your Office 365 Educational Tenant with No Technical Knowledge!
                    </div>
                    <div className="home-intro-text-buttons">
                        <Link to='/demo'>
                            <div className="home-intro-text-button-demo" href="#">Watch Demo</div>
                        </Link>
                        <Link to='/pricing'>
                            <div className="home-intro-text-button-plans" href="#">View Plans</div>
                        </Link>
                    </div>
                </div>
                <div className="home-intro-img">
                    <img className="home-intro-img-source" src="./intro-pic.jpg" />
                </div>
            </div>
            <hr className="seperator" />
            <div className='brand'>
                <FontAwesomeIcon className='brand-icon' icon={faGraduationCap} />
                <span>e-School</span>
                <p>A Way to Teach Smarter!</p>
            </div>
            <div className="create-tenant section">
                <img src="./new-tenant.png" alt="" className="icon" />
                <div className="text">
                    <p className="title">Get Free Office 365</p>
                    <p className="body">
                        Apply and get Office 365 tenant for your organization!
                        We will register it and connect to our system!
                    </p>
                    <div className="apply-link">
                        <a target='_blank' href='http://bit.ly/freeoffice365reg'>
                            <span>Apply for free Office 365</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="create-user section section-reverse">
                <div className="text">
                    <p className="title">Create new Student or Teacher Account</p>
                    <p className="body">
                        Create new accounts from user friendly interface and the
                        users will be assigned proper license automatically!
                        Fill simple form and done! Your user is created! Use simple
                        form to set proper permissions and your tenant is almost ready
                        to work!
                    </p>
                </div>
                <img src="./new-student.jpg" alt="" className="icon" />
            </div>
            <div className="create-class section">
                <img src="./new-class.jpg" alt="" className="icon" />
                <div className="text">
                    <p className="title">Create new Class</p>
                    <p className="body">
                        Create new class by filling simple form. Add teacher and students.
                        The system will carry the rest. We will automatically create
                        new Teams class with all functionally you need! Moving a student?
                        No Worries! Our system will carry premissions! New study
                        year? No worries again! With a few simple steps our system will
                        create all the new classes and will add students!
                    </p>
                </div>
            </div>
            <div className="pricing-info">
                <p className="title">Getting interesting?</p>
                <Link to='/pricing'><span className="pricing-btn" href="#">View Pricing</span></Link>
                <a className="pricing-btn" href="#">Apply For Office 365</a>
            </div>
        </div>
    );
}

export default Home;