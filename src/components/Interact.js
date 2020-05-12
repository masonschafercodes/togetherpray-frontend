import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavigationBar from './Navbar';

import firebase from 'firebase';

class Interact extends Component{
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
                    <h1>Interact</h1>
                </div>
                    :
                <Redirect to='/login' />
            }
                
        </div>
        
        )
    }
}

export default Interact;