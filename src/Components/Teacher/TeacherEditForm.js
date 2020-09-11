import React, { Component, useState } from 'react';
import './TeacherEditForm.css';

class TeacherEditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teacher: {
                firstName: '',
                lastName: '',
                username: '',
                birthday: new Date(Date.now()),
                topic: '',
                email: '',
                phone: ''
            }
        }
    }

    render() {

        const isNew = this.props.isNew;

        if (!isNew) {
            this.setState({ teacher: this.props.studentInfo });
        }

        return (
            <form className="teacher-form" onSubmit={(e) => this.formSubmit(e)}>

                <label class="teacher-form-item-label" htmlFor="firstname">
                    First Name
                </label>
                <input onChange={e => this.setState({ teacher: { ...this.state.teacher, firstName: e.target.value } })}
                    name="firstname" class="firstname" type="text"
                    placeholder="Karen" value={this.state.teacher.firstName} />

                <label class="teacher-form-item-label" htmlFor="lastname">
                    Last Name
                </label>
                <input onChange={e => this.setState({ teacher: { ...this.state.teacher, lastName: e.target.value } })}
                    name="lastname" class="lastname" type="text"
                    placeholder="Karapetyan" value={this.state.teacher.lastName} />

                <label class="teacher-form-item-label" htmlFor="username">
                    Username
                </label>
                <input onChange={e => this.setState({ teacher: { ...this.state.teacher, username: e.target.value } })}
                    name="username" class="username" type="text"
                    placeholder="karen.karapetyan" value={this.state.teacher.username} />

                <label class="teacher-form-item-label" htmlFor="topic">
                    Topic
                </label>
                <input onChange={e => this.setState({ teacher: { ...this.state.teacher, topic: e.target.value } })}
                    name="topic" class="topic" type="text"
                    placeholder="Math" value={this.state.teacher.topic} />

                <label class="teacher-form-item-label" htmlFor="birthday">
                    Birthday
                </label>
                <input onChange={e => { debugger; this.setState({ teacher: { ...this.state.teacher, birthday: new Date(e.target.value) } }) }}
                    name="birthday" class="birthday" type="date"
                    placeholder="12/12/2012" value={this.state.teacher.birthday.toJSON().split('T')[0]} />

                <label class="teacher-form-item-label" htmlFor="email">
                    Email
                </label>
                <input onChange={e => this.setState({ teacher: { ...this.state.teacher, email: e.target.value } })}
                    name="email" class="email" type="text"
                    placeholder="karen.karapetyan@gmail.com" value={this.state.teacher.email} />

                <label class="teacher-form-item-label" htmlFor="phone">
                    Phone
                </label>
                <input onChange={e => { this.setState({ teacher: { ...this.state.teacher, phone: e.target.value } }) }}
                    name="phone" class="phone" type="text"
                    placeholder="+34744224422" value={this.state.teacher.phone} />



                <div className="button-container">
                    <button id='save-teacher-btn' type="submit" className="button">Save</button>
                </div>
            </form>
        );
    }

    formSubmit = (e) => {
        e.preventDefault();

        document.getElementById('save-teacher-btn').innerText = '...saving';

        debugger;

        let userInfo = this.state.userInfo;

        const apiAddress = '';
        fetch(apiAddress, {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                this.resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm = () => {
        document.getElementById('save-teacher-btn').innerText = 'Save';
    }




}

export default TeacherEditForm;