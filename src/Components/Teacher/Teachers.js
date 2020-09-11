import React from 'react';
import './Teacher.css';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Teacher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    firstName: 'Eavid',
                    lastName: 'Babayan',
                    username: 'mavid.babayan',
                    topic: 'Math'
                },
                {
                    firstName: 'Eavid',
                    lastName: 'Babayan',
                    username: 'mvid.babayan',
                    topic: 'Math'
                },
                {
                    firstName: 'Hayarpi',
                    lastName: 'Hovhannisyan',
                    username: 'hayarpi.hovhannisyan',
                    topic: 'History'
                },
                {
                    firstName: 'Nare',
                    lastName: 'Karapetyan',
                    username: 'nare.karapetyan',
                    topic: 'English'
                },
                {
                    firstName: 'David',
                    lastName: 'Babayan',
                    username: 'david.babayan',
                    topic: 'Phisics'
                }
            ],
            orderBy: 'grade',
            filterBy: '',
            searchBy: ''
        };
    }

    getSortedItems() {
        const that = this,
            { students, orderBy, filterBy, searchBy } = that.state;

        return students
            .slice()
            .sort((a, b) => {
                if (orderBy === 'username')
                    return a.username.localeCompare(b.username);
                else if (orderBy === 'name')
                    return (a.firstName + ' ' + a.lastName).localeCompare(b.firstName + ' ' + b.lastName);
                else if (orderBy === 'topic')
                    return a.topic.localeCompare(b.topic);
            })
            .filter((e) => {
                if (filterBy.length > 0)
                    return e.topic === filterBy;
                return true;
            })
            .filter((e) => {
                if (searchBy.length > 0)
                    return (e.firstName + ' ' + e.lastName).toLowerCase().includes(searchBy.toLowerCase());
                return true;
            });
    }

    getGradeFilterItems() {
        const that = this,
            { students } = that.state;
        const list = students.sort((a, b) => {
            return a.topic.localeCompare(b.topic);
        }).filter((item, pos, arr) => {
            return !pos || item.topic != arr[pos - 1].topic;
        });

        return list.map((item) => {
            return <option value={item.topic}>{item.topic}</option>;
        });
    }

    render() {

        return (
            <div className="teachers">
                <div className="create-new">
                    <Link to='new/user/teacher'><button>New</button></Link>
                </div>
                <div className="title">
                    <span>Teachers</span>
                </div>
                <div className="filter-options">
                    <div className="search">
                        <input type='text' placeholder='Search the name' onChange={(e) => { this.setState({ searchBy: e.target.value }) }} />
                        <div className="search">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <div>
                        <select className='grade' onChange={(e) => this.setState({ filterBy: e.nativeEvent.target.value })}>
                            <option value=''>All</option>
                            {this.getGradeFilterItems()}
                        </select>
                    </div>
                </div>
                <hr />
                <table className="teacher-list">
                    <thead>
                        <tr>
                            <th onClick={(e) => this.setState({ orderBy: 'name' })}>Name</th>
                            <th onClick={(e) => this.setState({ orderBy: 'username' })}>Username</th>
                            <th onClick={(e) => this.setState({ orderBy: 'topic' })}>Topic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getSortedItems().map(({ username, topic, firstName, lastName }) => {
                            return <tr key={username} onClick={() => this.props.history.push('student/' + username)}>
                                <td>{firstName + ' ' + lastName}</td>
                                <td>{username}</td>
                                <td>{topic}</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(Teacher);