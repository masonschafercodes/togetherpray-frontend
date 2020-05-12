import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavigationBar from './Navbar';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class Login extends Component{
    state={isSignedIn: false};
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

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
                <div style={{margin: '0 auto', paddingTop: '300px'}}>
                    {this.state.isSignedIn ? 
                    <Redirect to='/' />
                    :
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    
                    />
                }
                </div>
                
            </div>
        )
    }
}

export default Login;