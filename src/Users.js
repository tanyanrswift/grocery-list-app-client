import React, { Component } from 'react';
import UserSignUp from './UserSignUp';
import './style/users.css';

class Users extends Component {
    state = {
        users: []
    }
    createUser(e){
        console.log('create user')
        e.preventDefault();
        fetch('http://localhost:8000/api/users/signUp',{
            method: 'POST',
            body: JSON.stringify({email: e.target.email.value, password: e.target.password.value}),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => {
            console.log(res)
            res.json()
        })
        .then(newUser => {
            console.log(newUser);
            this.setState({users: [...this.state.users, newUser]});
        })
        .catch(error => console.log('Error', error));
    }
    render(){
        return(
            <section>
                <UserSignUp onSubmit={(e) => this.createUser(e)} />
            </section>
        )
    }
}

export default Users;