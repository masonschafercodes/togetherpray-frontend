import React, { Component } from 'react';
import NavigationBar from './Navbar';
import { Jumbotron, Button } from 'reactstrap';


class Home extends Component{
    render(){
        return(

            <div>
                <div>
                    <nav>
                    <NavigationBar />    
                    </nav> 
                </div>
                <div className="hero-background-color">
                <Jumbotron>
                    <h1 className="display-3 caption-font">Welcome to Verse With Us</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button className="jumbotron-button" href="/login">Get Started!</Button>
                    </p>
                </Jumbotron>
                </div>
            </div>
        )
    }
}

export default Home;