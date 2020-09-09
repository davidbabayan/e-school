import React, { Component, useState } from 'react';

class StudentEditForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        username: '',
        birthday: new Date(),
        admissionYear: new Date(),
        currentGrade: 0,
        groupPrefix: '',
        email: '',
        phone: ''
    }

    render() {

        const isNew = this.props.isNew;

        if (!isNew) {
            this.state = this.props.studentInfo;
        }

        return (
            <form className="student-form" onSubmit={(e) => this.formSubmit(e)}>

                <label class="student-form-item-label" htmlFor="firstname">
                    First Name
                </label>
                <input onChange={e => this.setState({ firstName: e.target.value })}
                    name="firstname" class="firstname" type="text"
                    placeholder="Karen" value={this.state.firstName} />

                <label class="student-form-item-label" htmlFor="lastname">
                    Last Name
                </label>
                <input onChange={e => this.setState({ lastName: e.target.value })}
                    name="lastname" class="lastname" type="text"
                    placeholder="Karapetyan" value={this.state.lastName} />

                <label class="student-form-item-label" htmlFor="username">
                    Username
                </label>
                <input onChange={e => this.setState({ username: e.target.value })}
                    name="username" class="username" type="text"
                    placeholder="karen.karapetyan" value={this.state.username} />

                <label class="student-form-item-label" htmlFor="birthday">
                    Birthday
                </label>
                <input onChange={e => this.setState({ birthday: e.target.value })}
                    name="birthday" class="birthday" type="date"
                    placeholder="12/12/2012" value={this.state.birthday.toJSON().split('T')[0]} />

                <label class="student-form-item-label" htmlFor="admission-year">
                    Admission Year
                </label>
                <input onChange={e => this.setState({ admissionYear: new Date(e.target.value) })}
                    name="admission-year" class="admission-year" type="text"
                    placeholder="2018" value={this.state.admissionYear.getFullYear()} />

                <label class="student-form-item-label" htmlFor="current-grade">
                    Current Grade
                </label>
                <input onChange={e => this.setState({ currentGrade: e.target.value })}
                    name="current-grade" class="current-grade" type="text"
                    placeholder="3" value={this.state.currentGrade} />

                <label class="student-form-item-label" htmlFor="group-prefix">
                    Group Prefix
                </label>
                <input onChange={e => this.setState({ groupPrefix: e.target.value })}
                    name="group-prefix" class="group-prefix" type="text"
                    placeholder="A" value={this.state.groupPrefix} />

                <label class="student-form-item-label" htmlFor="email">
                    Email
                </label>
                <input onChange={e => this.setState({ email: e.target.value })}
                    name="email" class="email" type="text"
                    placeholder="karen.karapetyan@gmail.com" value={this.state.email} />

                <label class="student-form-item-label" htmlFor="phone">
                    Phone
                </label>
                <input onChange={e => this.setState({ phone: e.target.value })}
                    name="phone" class="phone" type="text"
                    placeholder="+34744224422" value={this.state.phone} />



                <div className="button-container">
                    <button id='save-student-btn' type="submit" className="button">Save</button>
                </div>
            </form>
        );
    }

    formSubmit = (e) => {
        e.preventDefault();

        document.getElementById('save-student-btn').innerText = '...saving';

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
        document.getElementById('save-student-btn').innerText = 'Save';
    }




}

export default StudentEditForm;