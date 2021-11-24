import React, { useState } from 'react'
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import 'boxicons';
import './InsertUser.css';
import URL from '../config/URLs/Url';

function InsertUser() {
    const url = URL.insertUserUrl;
    const [data, setData] = useState({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        role: "ADMIN",
    });

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    };

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            username: data.username,
            password: data.password,
            first_name: data.first_name,
            last_name: data.last_name,
            role: data.role
        })
            .then(console.log(data));
    };

    return (
        <>
            <Container>
                <Card className='customCard card-shadow'>
                    <Card.Header>
                        <h4>Add User</h4>
                    </Card.Header>
                    <form onSubmit={(e) => submit(e)}>
                        <Card.Body>
                            <Card.Text>
                                <Form.Group>
                                    <span><box-icon type='solid' name='user'></box-icon></span>
                                    <Form.Control onChange={(e) => handle(e)} value={data.username} id='username' type='text' placeholder='username'></Form.Control>
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <span><box-icon type='solid' name='book'></box-icon></span>
                                    <Form.Control onChange={(e) => handle(e)} value={data.first_name} id='first_name' type='text' placeholder='first name'></Form.Control>
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <span><box-icon type='solid' name='book'></box-icon></span>
                                    <Form.Control onChange={(e) => handle(e)} value={data.last_name} id='last_name' type='text' placeholder='last name'></Form.Control>
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <span><box-icon type='solid' name='key'></box-icon></span>
                                    <Form.Control onChange={(e) => handle(e)} value={data.password} id='password' type='text' placeholder='password'></Form.Control>
                                </Form.Group>
                                <input onChange={(e) => handle(e)} value={data.role} placeholder='role' hidden />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-center'>
                            <Row>
                                <Col>
                                    <Button style={{width: '20vh'}} type='submit' variant='success'>Add User</Button>
                                </Col>
                                <Col>
                                    <Button style={{width: '20vh'}} type='reset' variant='secondary'>Clear</Button>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </form>
                </Card>
            </Container>
        </>
    )
}

export default InsertUser
