import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavigationBar from './Navbar';
import { Button } from 'reactstrap';
import PrayerRequest from './PrayerRequest';

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
                    <h1 className="center caption-font pt-25 base-color">Prayer Requests</h1>
                    <hr className="hr-50 hr-color-main" />
                    <div className="center pt-25">
                        <Button href='/newrequest' className="request-button nav-font">New Prayer Request</Button>
                    </div>
                    <div>
                        <PrayerRequest />
                    </div>
                </div>
                    :
                <Redirect to='/login' />
            }
                
        </div>
        
        )
    }
}

export default Request;