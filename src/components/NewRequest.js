import React, { Component } from 'react';
import NavigationBar from './Navbar';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import firebase from 'firebase';


export default class NewRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            request: '',
            username: '',
            isSignedIn: true
        };
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.setState({ [event.target.name]: event.target.value });
        this.setState({ [event.target.name]: event.target.value });
    }


    async onSubmitForm(e) {
        try {
            e.preventDefault();
            var title = { title };
            var request = { request };
            var username = { username };
            // eslint-disable-next-line
            const response = await fetch("http://192.168.86.39:5000/requests", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: this.state.title, request: this.state.request, username: this.state.username })
            });

            window.location = '/request';

        } catch (err) {
            console.error(err.message);
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }
    render() {
        return (
            <div>
                <nav>
                    <NavigationBar />
                </nav>
                {this.state.isSignedIn ?
                    <div>
                        <h1 className="center caption-font pt-25 base-color">New Request</h1>
                        <hr className="hr-50 hr-color-main" />
                        <Form className="wd-50 ml-25 mt-50 nav-font base-color" onSubmit={this.onSubmitForm.bind(this)}>
                            <FormGroup>
                                <Label for="usernameLabel">Username: </Label>
                                <Input type='text' name='username' value={this.state.username} maxLength={25} onChange={this.handleChange.bind(this)} />
                            </FormGroup>
                            <FormGroup >
                                <Label for="requestTitle">Title</Label>
                                <Input type='text' name='title' placeholder="Title for Request" maxLength={255} value={this.state.title}
                                    onChange={this.handleChange.bind(this)} required />
                            </FormGroup>
                            <FormGroup className="pt-15">
                                <Label for="requestBody">Prayer Request: </Label>
                                <Input type='textarea' name='request' maxLength={255} placeholder='Put your prayer request here...' value={this.state.request}
                                    onChange={this.handleChange.bind(this)} required />
                            </FormGroup>
                            <Button type='submit' className="request-button">Submit</Button>
                            <Button href='/request' className="request-button ml-15">Go back</Button>
                        </Form>
                    </div>
                    :
                    <Redirect to='/login' />
                }
            </div>
        )
    }
}