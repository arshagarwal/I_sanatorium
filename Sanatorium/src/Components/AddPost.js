// Add post page
// Page where user can add and upload posts
import React, { Component } from 'react'
import Options from './Options'
import {Button, Form,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AddPost extends Component {
    

    
    render() {
        //console.log(`welccome to add post page`)
        return (
           
            <Container>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.

                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
            
                
            
        )
    }
}
