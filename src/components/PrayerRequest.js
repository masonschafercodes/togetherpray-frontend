import React, { Component, Fragment } from 'react';

export default class PrayerRequest extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }

        this.getRequests.bind(this);
    }

    async getRequests(){
        try {
            const response = await fetch("http://localhost:5000/requests");
            const jsonData = await response.json();

            this.state.data = jsonData;
        } catch (err) {
            console.error(err.message);
        }
    };

    componentDidMount() {
        this.getRequests();
    };

    render(){

        return(
        <Fragment>
                {this.state.data.map ((dataRendered) => (
                    <div key={dataRendered.prayer_id} className="ml-25 mt-50 wd-50 prayer-bg p-32 color-wht rounded">
                        <h3 className="caption-font" >{dataRendered.title}</h3>
                        <p className="pt-25 p-font-m" >{dataRendered.request}</p>
                    </div>
                ))}
            
        </Fragment>
        )
    }
}