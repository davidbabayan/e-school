import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import ContactForm from './ContactForm';

function About() {
    return (
        <div className="about">
            <div className="madatech-info">
                <div className="we">
                    We are
                </div>
                <div className="arrow-down">
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
                <a href="http://www.madatech.me">
                    <div className="logo">
                        <img src="/madatech.png" alt="" />
                        <span>Madatech</span>
                    </div>
                </a>
                <div className="edu-love">
                    <span>... and </span>
                    <div className="slogan">
                        <span>WE </span>
                        <FontAwesomeIcon className='heart' icon={faHeart} />
                        <span> EDU</span>
                    </div>
                </div>
                <div className="about-madatech">
                    <p>
                        Madatech has been established as an IT business solutions
                        provider for SMB. We believe that by improving environment
                        we improve our productivity. So we are eager to improve our
                        clients IT environment. Our company represents over 30 IT
                        brands in Armenia.
                    </p>
                    <p>
                        We work closely with Microsoft to bring the best of their
                        platforms and even extand them. We are developing automation
                        solutions using Microsoft 365, Dynamics 365 and Azure.
                        This tool is great example of what we usually do! We took
                        Office 365 for Education and developed solution to help you
                        automate creating classes and assigning proper roles and permissions!
                    </p>
                    <p>
                        We would love to hear your feedback and proposals and any other
                        offer. Simply fill out this simple form and we will respond as soon as
                        possible!
                    </p>
                </div>
                <div className="contact-section">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default About;