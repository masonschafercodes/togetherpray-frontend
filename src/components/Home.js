import React, { Component } from 'react';
import NavigationBar from './Navbar';
import { Jumbotron, Button } from 'reactstrap';
import firebase from 'firebase';

// eslint-disable-next-line
import fire from '../config/fbConfig';


class Home extends Component{
    state={isSignedIn: false};

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
          this.setState({isSignedIn:!!user})
      })
    }
    render(){
        return(

            <div>
                <div>
                    <nav>
                    <NavigationBar />    
                    </nav> 
                </div>
                <div className="hero-background-color">
                    {this.state.isSignedIn ?
                <div>
                    <Jumbotron>
                    <h1 className="display-3 caption-font">Welcome, {firebase.auth().currentUser.displayName}</h1>
                        <p className="lead p-font-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="p-font-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="lead">
                        <Button className="jumbotron-button p-font-sm" href="/request">Request a Prayer <span role="img" aria-label="Angel">😇</span></Button>
                        </p>
                    </Jumbotron>
                </div>
                    :
                    <Jumbotron>
                        <h1 className="display-3 caption-font">Welcome to TogetherPray</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="lead">
                        <Button className="jumbotron-button" href="/login">Get Started!</Button>
                        </p>
                    </Jumbotron>
            }
                <section className="ml-25 wd-50">
                    <h1 className="caption-font t-align-c">TogtherPray.</h1>
                    <hr className="hr-50 hr-color-main" />
                    <p className="t-align-l p-font-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <section className="ml-25 wd-50 pt-65">
                <h1 className="caption-font t-align-c">About Us.</h1>
                    <hr className="hr-50 hr-color-main" />
                    <p className="t-align-l p-font-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <section className="ml-25 wd-50 pt-65">
                <h1 className="caption-font t-align-c">How to Use.</h1>
                    <hr className="hr-50 hr-color-main" />
                    <p className="t-align-l p-font-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                </div>
            </div>
        )
    }
}

export default Home;