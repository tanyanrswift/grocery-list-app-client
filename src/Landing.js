import React, { Component } from 'react';
import './style/landing.css';

class Landing extends Component {
    render(){
        return (
            <section>
                <h1 class='header'>Welcome!</h1>
                <p class='welcome-text0'>Thanks for visiting!</p>
                <img src={require('./grocery-basket.png')} class='grocery-basket-icon' alt="grocery basket icon" />
                <p class='welcome-text1'>Create an account and access your items later</p>
                <p class='welcome-text2'>Add, edit, and remove items as needed</p>
            </section>
        )
    }
}

export default Landing;