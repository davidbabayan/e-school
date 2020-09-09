import React from 'react';
import './Student.css';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Students extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    firstName: 'Eavid',
                    lastName: 'Babayan',
                    username: 'mavid.babayan',
                    grade: 5,
                    groupPrefix: 'A'
                },
                {
                    firstName: 'Eavid',
                    lastName: 'Babayan',
                    username: 'mvid.babayan',
                    grade: 5,
                    groupPrefix: 'C'
                },
                {
                    firstName: 'Hayarpi',
                    lastName: 'Hovhannisyan',
                    username: 'hayarpi.hovhannisyan',
                    grade: 5,
                    groupPrefix: 'B'
                },
                {
                    firstName: 'Nare',
                    lastName: 'Karapetyan',
                    username: 'nare.karapetyan',
                    grade: 4,
                    groupPrefix: 'C'
                },
                {
                    firstName: 'David',
                    lastName: 'Babayan',
                    username: 'david.babayan',
                    grade: 5,
                    groupPrefix: 'B'
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
                    return a.username < b.username ? -1 : 1;
                else if (orderBy === 'name')
                    return a.firstName + ' ' + a.lastName === b.firstName + ' ' + b.lastName ? 0 : a.firstName + ' ' + a.lastName < b.firstName + ' ' + b.lastName ? -1 : 1;
                else if (orderBy === 'grade')
                    return a.grade === b.grade ? 0 : a.grade - b.grade;
            })
            .filter((e) => {
                if (filterBy.length > 0)
                    return e.grade + '-' + e.groupPrefix === filterBy;
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
            return a.grade !== b.grade ? a.grade - b.grade :
                a.groupPrefix > b.groupPrefix ? 1 :
                    a.groupPrefix < b.groupPrefix ? -1 : 0;
        }).filter((item, pos, arr) => {
            return !pos || item.grade + '-' + item.groupPrefix != arr[pos - 1].grade + '-' + arr[pos - 1].groupPrefix;
        });

        return list.map((item) => {
            const val = item.grade + '-' + item.groupPrefix;
            return <option value={val}>{val}</option>;
        });
    }

    render() {

        console.log(this.props);

        return (
            <div className="students">
                <div className="create-new">
                    <Link to='new/user'><button>New</button></Link>
                </div>
                <div className="title">
                    <span>Students</span>
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
                <table className="student-list">
                    <thead>
                        <tr>
                            <th onClick={(e) => this.setState({ orderBy: 'name' })}>Name</th>
                            <th onClick={(e) => this.setState({ orderBy: 'username' })}>Username</th>
                            <th onClick={(e) => this.setState({ orderBy: 'grade' })}>Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getSortedItems().map(({ username, grade, firstName, lastName, groupPrefix }) => {
                            return <tr key={username} onClick={() => this.props.history.push('student/' + username)}>
                                <td>{firstName + ' ' + lastName}</td>
                                <td>{username}</td>
                                <td>{grade + '-' + groupPrefix}</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(Students);