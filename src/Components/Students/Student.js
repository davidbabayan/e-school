import React from 'react';
import StudentEditForm from './StudentEditForm'
import './Student.css';
import { Link } from 'react-router-dom';

function Student(props) {
    const student = {
        firstName: 'David',
        lastName: 'Babayan',
        username: 'david.babayan',
        birthday: new Date('12/12/2000'),
        admissionYear: new Date('2006'),
        currentGrade: 12,
        groupPrefix: 'C',
        email: 'davidbabayan@gmail.com',
        phone: '+37455222559'
    };

    return (
        <div className="student">
            <Link to='/students'>
                <div className="back">Back</div>
            </Link>
            <div className="title">User Info</div>
            <div className="form">
                <StudentEditForm studentInfo={student} isNew={false} />
            </div>

        </div>
    );
}

export default Student;