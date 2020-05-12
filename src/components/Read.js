import React, { Component } from 'react';
import NavigationBar from './Navbar';
import Vod from './Vod';

class Read extends Component{
    render(){
        return(
            <div>
                <nav>
                    <NavigationBar />
                </nav>
                <section>
                    <h1>Verse of the Day:</h1>
                    <Vod />
                </section>
            </div>
        )
    }
}

export default Read;