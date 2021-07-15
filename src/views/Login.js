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
            history.push('/admin/list-question')
        }
        console.log(useName,password);
     
    }

    return (
        <div className="bg">
        <Header/>
            <div className="form-wrap">
            <div className = "addForm">
              <h2 className="text-center">Login</h2>
              <Form>
                  <Form.Group>
                      <Form.Label>UserName</Form.Label>
                      <Form.Control placeholder="User Name" type="text" value={useName} onChange={e => setUserName(e.target.value)}></Form.Control>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control placeholder="PassWord" type="password" value={password} onChange={e => setPassWord(e.target.value)}></Form.Control>
                  </Form.Group>
                  <Button  className="btn-block mb-3" variant="primary" type="button" onClick = {handleLogin}>
                        Submit
                  </Button>
              </Form>
          </div>
            </div>
        </div>
    )
}

export default Login
