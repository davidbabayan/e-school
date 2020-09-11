import React from 'react';
import './Teacher.css';
import { Link } from 'react-router-dom';
import TeacherEditForm from './TeacherEditForm';

function Teacher(props) {
    const teacher = {
        firstName: 'David',
        lastName: 'Babayan',
        username: 'david.babayan',
        birthday: new Date('12/12/2000'),
        topic: 'Math',
        email: 'davidbabayan@gmail.com',
        phone: '+37455222559'
    };

    return (
        <div className="teacher">
            <Link to='/teachers'>
                <div className="back">Back</div>
            </Link>
            <div className="title">User Info</div>
            <div className="form">
                <TeacherEditForm studentInfo={teacher} isNew={false} />
            </div>

        </div>
    );
}

export default Teacher;