import React, { useState, Component } from 'react';
import StudentEditForm from '../Students/StudentEditForm';
import TeacherEditForm from '../Teacher/TeacherEditForm';
import { useParams, withRouter } from 'react-router-dom';
import './New.css';

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: props.match.params.type
        }
    }

    getTypeChecker() {
        const that = this;
        const type = that.state.type;

        return <React.Fragment>
            <div className="student type-item">
                {
                    type == 'teacher' ?
                        <input type="radio" id="student" name="type" value="Student" onChange={() => this.setState({ type: 'student' })} /> :
                        <input type="radio" id="student" name="type" value="Student" onChange={() => this.setState({ type: 'student' })} checked />
                }
                <label for="student">Student</label>
            </div>
            <div className="teacher type-item">
                {
                    type == 'teacher' ?
                        <input type="radio" id="teacher" name="type" value="Teacher" onChange={() => this.setState({ type: 'teacher' })} checked /> :
                        <input type="radio" id="teacher" name="type" value="Teacher" onChange={() => this.setState({ type: 'teacher' })} />
                }
                <label for="teacher">Teacher</label>
            </div>
        </React.Fragment>;
    }

    getForm() {
        return this.state.type == 'teacher' ? <TeacherEditForm isNew={true} /> : <StudentEditForm isNew={true} />;
    }


    render() {

        return (
            <div className="create-user" >
                <div className="title">Create New User</div>
                <div className="type">
                    {this.getTypeChecker()}
                </div>
                {this.getForm()}
            </div >
        );
    }
}

export default withRouter(User);