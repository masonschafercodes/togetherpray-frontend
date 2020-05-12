import React, { Component } from 'react';
import NavigationBar from './Navbar';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


class AccountCreation extends Component{
    
    render(){
        return(
            <div>
                <nav>
                    <NavigationBar />
                </nav>
            
                <div>
                <Form className="login-centered" onSubmit={this.handleSubmit}>
                    <h1>Create Account: </h1>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="loginEmail" placeholder="Email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="loginPassword" placeholder="Password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button className="login-button">Create Account</Button>
                </Form>
                </div>
            </div>
        )
    }
}

export default AccountCreation;