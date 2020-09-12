import React from 'react';
import './Class.css';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Classes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: [
                {
                    topic: 'Math',
                    group: '4-C',
                    teacher: 'David Babayan'
                },
                {
                    topic: 'Language',
                    group: '4-C',
                    teacher: 'Karen Babayan'
                },
                {
                    topic: 'History',
                    group: '4-C',
                    teacher: 'Arev Babayan'
                },
                {
                    topic: 'Math',
                    group: '5-B',
                    teacher: 'David Karapetyan'
                },
                {
                    topic: 'History',
                    group: '5-B',
                    teacher: 'Naira Babayan'
                }
            ],
            orderBy: 'group',
            filterBy: '',
            searchBy: ''
        };
    }

    getSortedItems() {
        const that = this,
            { classes, orderBy, filterBy, searchBy } = that.state;

        return classes
            .slice()
            .sort((a, b) => {
                if (orderBy === 'group')
                    return a.group.localeCompare(b.group);
                else if (orderBy === 'topic')
                    return (a.topic).localeCompare(b.topic);
                else if (orderBy === 'teacher')
                    return a.teacher.localeCompare(b.teacher);
            })
            .filter((e) => {
                if (filterBy.length > 0)
                    return e.group === filterBy;
                return true;
            })
            .filter((e) => {
                if (searchBy.length > 0)
                    return (e.topic).toLowerCase().includes(searchBy.toLowerCase()) ||
                        (e.teacher).toLowerCase().includes(searchBy.toLowerCase()) ||
                        (e.group).toLowerCase().includes(searchBy.toLowerCase());
                return true;
            });
    }

    getGroupFilterItems() {
        const that = this,
            { classes } = that.state;
        const list = classes.sort((a, b) => {
            return a.group.localeCompare(b.group);
        }).filter((item, pos, arr) => {
            return !pos || item.group != arr[pos - 1].group;
        });

        return list.map((item) => {
            return <option value={item.group}>{item.group}</option>;
        });
    }

    render() {

        return (
            <div className="classes">
                <div className="create-new">
                    <Link to='new/user/class'><button>New</button></Link>
                </div>
                <div className="title">
                    <span>Classes</span>
                </div>
                <div className="filter-options">
                    <div className="search">
                        <input type='text' placeholder='Search the class' onChange={(e) => { this.setState({ searchBy: e.target.value }) }} />
                        <div className="search">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <div>
                        <select className='group' onChange={(e) => this.setState({ filterBy: e.nativeEvent.target.value })}>
                            <option value=''>All</option>
                            {this.getGroupFilterItems()}
                        </select>
                    </div>
                </div>
                <hr />
                <table className="class-list">
                    <thead>
                        <tr>
                            <th onClick={(e) => this.setState({ orderBy: 'topic' })}>Topic</th>
                            <th onClick={(e) => this.setState({ orderBy: 'group' })}>Group</th>
                            <th onClick={(e) => this.setState({ orderBy: 'teacher' })}>Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getSortedItems().map(({ group, topic, teacher }) => {
                            return <tr key={`${group} ${topic}`} onClick={() => this.props.history.push(`student/${group} ${topic}`)}>
                                <td>{topic}</td>
                                <td>{group}</td>
                                <td>{teacher}</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(Classes);