import React, {Component} from 'react';
import firebase from 'firebase';



  class NavigationBar extends Component {
    state={isSignedIn: false};

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
          this.setState({isSignedIn:!!user})
      })
    }

    render() {
        return (
          <div className="navbar-design nav-font">
            <ul>

                <li style={{float: 'left'}}>
                  {this.state.isSignedIn ?
                     <div style={{float: 'left', display: 'flex'}}>
                        <a>Logged in as: <strong>{firebase.auth().currentUser.displayName}</strong></a>
                        <a href="/" onClick={() => firebase.auth().signOut()}>Log Out</a>
                      </div>
                    :
                      <a href="/login">Login</a>
                }

                </li>
                <li><a href="/">Verse With Us</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/interact">Interact</a></li>
                <li><a href="/read">Read</a></li>
            </ul>
          </div>
        );
    }
  }

  export default NavigationBar;