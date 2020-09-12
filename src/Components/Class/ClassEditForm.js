import React, { Component, useState } from 'react';
import './classEditForm.css';

class classEditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            class: {
                topic: 'Math',
                group: '4-C',
                class: {
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
            }
        }
    }

    render() {

        const isNew = this.props.isNew;

        if (!isNew) {
            this.setState({ class: this.props.classInfo });
        }

        return (
            <form className="class-form" onSubmit={(e) => this.formSubmit(e)}>

                <label class="class-form-item-label" htmlFor="topic">
                    Topic
                </label>
                <input onChange={e => this.setState({ class: { ...this.state.class, topic: e.target.value } })}
                    name="topic" class="topic" type="text"
                    placeholder="Math" value={this.state.class.topic} />

                <label class="class-form-item-label" htmlFor="group">
                    Group
                </label>
                <input onChange={e => this.setState({ class: { ...this.state.class, group: e.target.value } })}
                    name="group" class="group" type="text"
                    placeholder="4-C" value={this.state.class.group} />



                <div className="button-container">
                    <button id='save-class-btn' type="submit" className="button">Save</button>
                </div>
            </form>
        );
    }

    formSubmit = (e) => {
        e.preventDefault();

        document.getElementById('save-class-btn').innerText = '...saving';

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
        document.getElementById('save-class-btn').innerText = 'Save';
    }




}

export default classEditForm;