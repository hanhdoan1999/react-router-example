import React from 'react'
import { Button,Container,Form } from 'react-bootstrap';
import Header from './Header';
import {useState} from 'react'
import { useHistory } from 'react-router-dom';

function Login() {

    const [useName,setUserName] = useState("");
    const [password,setPassWord] = useState("");
    let history = useHistory();

    const handleLogin = () =>{
        if(useName==="admin" && password==="admin"){
            localStorage.setItem("accessToken",true)
            history.push('/admin')
        }
        console.log(useName,password);
     
    }

    return (
        <>
        <Container fluid className="bg">
            <Header/>
          <div className = "addForm">
              <h2>Login</h2>
              <Form>
                  <Form.Group>
                      <Form.Label>User</Form.Label>
                      <Form.Control type="text" value={useName} onChange={e => setUserName(e.target.value)}></Form.Control>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" value={password} onChange={e => setPassWord(e.target.value)}></Form.Control>
                  </Form.Group>
                  <Button variant="primary" type="button" onClick = {handleLogin}>
                        Submit
                  </Button>
              </Form>
          </div>
        </Container>
            
        </>
    )
}

export default Login
