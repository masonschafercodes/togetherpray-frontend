import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, FormGroup, Input } from 'reactstrap';


export default class PrayerRequest extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            commentsData: [],
            comment: ''
        }

        this.getRequests.bind(this);
        this.getComments.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }

    async getRequests(){
        try {
            const response = await fetch("http://192.168.86.39:5000/requests");
            const jsonData = await response.json();

            this.state.data = jsonData;
        } catch (err) {
            console.error(err.message);
        }
    };

    async getComments(){
        try {
            const commentResponse = await fetch("http://192.168.86.39:5000/comments");
            const jsonCommentData = await commentResponse.json();

            this.state.commentsData = jsonCommentData;
        } catch (err) {
            console.error(err.message)
        }
    }



    componentDidMount() {
        this.getRequests();
        this.getComments();
    };

    render(){
        return(
        <Fragment>
                {this.state.data.map ((dataRendered) => (
                        <div key={dataRendered.prayer_id} className="ml-25 mt-50 wd-50 prayer-bg p-32 color-wht rounded">
                            <h3 className="caption-font" >{dataRendered.title}</h3>
                            <p className="pt-25 p-font-m" >{dataRendered.request}</p>
                            <label>
                                <FontAwesomeIcon 
                                    icon="user"
                                    color="white"
                                    size="lg"
                                />
                                {' '}<span className="p-font-sm pt-25 post-text-color">Posted By: {dataRendered.username === "" ? 'Anonymous' : dataRendered.username}</span>
                            </label>
                            <label className="display-b pt-25">
                                <span>
                                    <p className='p-font-sm pt-25'>Show your love and add a comment...</p>
                                    <Form onSubmit={async(e) => {
                                        try {
                                            e.preventDefault();
                                            var comment = { comment };
                                            // eslint-disable-next-line
                                            const response = await fetch("http://192.168.86.39:5000/comments", {
                                                method: 'POST',
                                                headers: {
                                                    'Accept': 'application/json',
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify({username: 'anonymous', comment: this.state.comment, prayer_id: parseInt(dataRendered.prayer_id)})
                                            });
                                
                                            window.location = "/request";
                                
                                        } catch (err) {
                                            console.error(err.message);
                
                                        }}}>
                                        <FormGroup>
                                            <Input type="text" className="p-font-sm" name="comment" onChange={this.handleChange.bind(this)} placeholder="Enter Comment..." />
                                        </FormGroup>
                                        <Button color="info" type='submit'>Add Comment</Button>
                                    </Form>
                                </span>
                            </label>
                            <div>
                                <hr className="hr-50" />
                                <h5 className="caption-font pt-15">Comments: </h5>
                                {this.state.commentsData.map((comments) => (
                                    <div key={comments.comment_id} className="p-font-sm">
                                        {comments.title === dataRendered.title ?  <p className="pt-15"><strong>{comments.username}</strong></p> : null}
                                        {comments.title === dataRendered.title ?  <p className="display-i">{comments.comment}</p> : null} 

                                    </div>
                                ))}                           
                            </div>
                        </div>
                    ))}

            
        </Fragment>
        )
    }
}