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
                        <a href="/" onClick={() => firebase.auth().signOut()}><strong>{firebase.auth().currentUser.displayName} &#8676;</strong></a>
                      </div>
                    :
                      <a href="/login">Login &#8677;</a>
                }

                </li>
                <li><img src="https://i.ibb.co/KKBgBMJ/praytogether.png" alt="togetherpray app logo" /></li>
                <li><a href="/">Home</a></li>
                <li><a href="/request">Request</a></li>
                <li><a href="/read">Read</a></li>
            </ul>
          </div>
        );
    }
  }

  export default NavigationBar;