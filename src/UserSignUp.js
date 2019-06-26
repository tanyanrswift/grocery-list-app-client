import React from 'react';
import './style/user-sign-up.css';

export default function UserSignUp(props){
    return <form onSubmit={props.onSubmit}>
        <h2 class='user-sign-up-header'>User Sign Up</h2>
        <img src={require('./user-icon.png')} class='user-icon' alt="user icon" />
        <div class='email'>
            <label>Email Address:</label>
            <input type="email" name="email" placeholder="Enter Email Address" />
        </div>
        <div class='password'>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Enter Password" />
        </div>
        <input type='submit' value='Submit' />
    </form>
}