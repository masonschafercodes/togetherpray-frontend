import React, { Component } from 'react';
import NavigationBar from './Navbar';
import { Jumbotron, Button } from 'reactstrap';
import firebase from 'firebase';


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
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                        <Button className="jumbotron-button" href="/login">Interact!</Button>
                        </p>
                    </Jumbotron>
                </div>
                    :
                    <Jumbotron>
                        <h1 className="display-3 caption-font">Welcome to Verse With Us</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                        <Button className="jumbotron-button" href="/login">Get Started!</Button>
                        </p>
                    </Jumbotron>
            }
                </div>
            </div>
        )
    }
}

export default Home;