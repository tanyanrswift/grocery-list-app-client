import React, {Component} from 'react';
import './style/navigation.css';

class Navigation extends Component {
    render(){
        return(
            <div class='navigation'>
                <header>
                    <nav>
                        <a href="#home" class='home' onClick={e => this.props.onSelect('/')}>Home</a>
                        <a href="#items" class ='items' onClick={e => this.props.onSelect('/items')}>Items</a>
                        <a href='#signIn' class='sign-in' onClick={e => this.props.onSelect('/signIn')}>Sign In</a>
                        <a href='#signOut' class='sign-out' onClick={e => this.props.onSelect('/signOut')}>Sign Out</a>
                        <a href='#signUp' class='sign-up' onClick={e => this.props.onSelect('/signUp')}>Sign Up</a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navigation;