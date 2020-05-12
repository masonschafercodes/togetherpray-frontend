import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavigationBar from './Navbar';

import firebase from 'firebase';

class Request extends Component{
    state={isSignedIn: true};

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
          this.setState({isSignedIn:!!user})
      })
    }
    render(){
        return(
        <div>
            <nav>
                <NavigationBar />    
            </nav>
            {this.state.isSignedIn ?
                <div>
                    <h1>Request</h1>
                </div>
                    :
                <Redirect to='/login' />
            }
                
        </div>
        
        )
    }
}

export default Request;