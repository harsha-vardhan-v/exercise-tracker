import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => {
    return <tr>
        <td>{props.user.username}</td>

        <td>
            <Link to = {"/user/edit/"+props.user._id}>edit</Link> | <a href = "#" onClick = {() => props.deleteUser(props.user._id)}>delete</a>
        </td>
    </tr>
}

export default class UserList extends Component{

    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/user/')
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        users: response.data
                    });
                }
            })
            .catch(err => console.log(err));
    }

    deleteUser(id) {
        axios.delete('http://localhost:5000/user/'+id)
            .then(res => console.log(res.data));

        this.setState({
            users: this.state.users.filter(user => user._id !== id)
        });
    }

    userList() {
        return this.state.users.map(user => {
            return <User user = {user} deleteUser = {this.deleteUser} key = {user._id} /> 
        });
    }

    render() {
        return (
            <div>
                <h3>Users List</h3>

                <table className = "table">
                    <thead className = "thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table> 
            </div>
        );
    }
}