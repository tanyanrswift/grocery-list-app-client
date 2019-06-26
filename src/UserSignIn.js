import React, {Component} from 'react';
import './style/user-sign-in.css';

class UserSignIn extends Component {
    checkSignIn(e){
        e.preventDefault();
        fetch('http://localhost:8000/api/users/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify({email: e.target.email, password: e.target.password})
        })
    }
    render(){
        return (
            <div>
                <h2 class='sign-in-header'>Sign In</h2>
                <img src={require('./shopping-cart.png')} class='shopping-cart-icon' alt="shopping cart icon" />
                <form class='sign-in-form' onSubmit={this.checkSignIn}>
                    <div>
                        <input type='email' name='email' placeholder='Enter email address' />
                    </div>
                    <div>
                        <input type='password' name='password' placeholder='Enter password' />
                    </div>
                    <input type='submit' name='Submit' />
                </form>
            </div>
        )
    }
}

export default UserSignIn;