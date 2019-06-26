import React, {Component} from 'react';
import Landing from './Landing';
import Items from './Items';
import Navigation from './Navigation';
import UserSignIn from './UserSignIn';
import UserSignOut from './UserSignOut';
import UserSignUp from './UserSignUp';

class MainPage extends Component {
    state = {
        currentSection: '/'
    }
    selectSection = (section) => {
        this.setState({currentSection: section});
    }
    render(){
        let section;
        if(this.state.currentSection === '/'){
            section = <Landing />
            console.log('landing');
        } else if(this.state.currentSection === '/items'){
            section = <Items />
            console.log('items');
        } else if(this.state.currentSection === '/signIn'){
            section = <UserSignIn />
            console.log('userSignIn')
        } else if(this.state.currentSection === '/signOut'){
            section = <UserSignOut />
            console.log('userSignOut')
        } else if(this.state.currentSection === '/signUp'){
            section = <UserSignUp />
            console.log('userSignUp')
        }
        return (
            <div>
                <Navigation onSelect={this.selectSection} />
                {section}
            </div>
        )
    }
}

export default MainPage;