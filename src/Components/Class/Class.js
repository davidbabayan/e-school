import React from 'react';
import './Class.css';
import { Link } from 'react-router-dom';
import TeacherEditForm from './TeacherEditForm';

function Teacher(props) {
    const cls = {
        topic: 'Math',
        group: '4-C',
        teacher: {
            name: 'David Babayan',
            id: 'someID'
        },
        admins: [
            {
                name: 'Karen Vardanyan',
                id: 'KarenID'
            },
            {
                name: 'Saetn Vardanyan',
                id: 'SeatnID'
            }
        ],
        student: [
            {
                name: 'Narine Gevorgyan',
                id: 'NarineID'
            },
            {
                name: 'Serine Gevorgyan',
                id: 'SerineID'
            },
            {
                name: 'Hayk Gevorgyan',
                id: 'HaykID'
            }
        ]
    };

    return (
        <div className="class">
            <Link to='/classes'>
                <div className="back">Back</div>
            </Link>
            <div className="title">Class Info</div>
            <div className="form">
                <TeacherEditForm classInfo={cls} isNew={false} />
            </div>

        </div>
    );
}

export default Teacher;