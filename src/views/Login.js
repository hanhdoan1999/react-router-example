import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Login() {

    const [useName, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    let history = useHistory();

    const handleLogin = () => {
        if (useName === "admin" && password === "admin") {
            localStorage.setItem("accessToken", true)
            history.push('/admin/list-question')
        }
        console.log(useName, password);

    }

    return (
        <div className="container">
            <div className="row" style={{ height: '100vh' }}>
                <div id="col" className="col-md-12 align-self-center">
                <img src="/assets/images/logo2.png" alt="logo" className="d-block mx-auto"/>
                    <div className="login-form shadow">
                        <h2 className="text-center text-title">Login</h2>
                        <Form>
                            <Form.Group>
                                <Form.Label>UserName</Form.Label>
                                <Form.Control placeholder="User Name" type="text" value={useName} onChange={e => setUserName(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control placeholder="PassWord" type="password" value={password} onChange={e => setPassWord(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Button className="btn-block mb-3 rounded-pill" variant="primary" type="button" onClick={handleLogin}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
