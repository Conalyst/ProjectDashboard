import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import {Button, Form} from "react-bootstrap";
import vendor_icon from '../images/icons/vendor_icon.png';
import { DASHBOARD } from "../navigation/CONSTANTS";


export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 // const history =useHistory();
 //const onLogin =()=>{
 //history.push({
 //   pathname: DASHBOARD,

 //  });
 // }  
 const submitHandler = () => {
  Axios.post("http://localhost:3002/api/v2/login", {
    username: username,
    password: password,
  }).then((response) => {
    if (response.data.message) {
      console.log(response.data)
    } else {
      console.log(response.message)
    }
  });
};

    return (
        <div className="login-container">
            <div className="login-welcome">
                <img src={vendor_icon} />
                <div className="welcome-title">Welcome to Valencia Dashboard</div>
                <div className="welcome-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="login-form-container">
              <p>Don&apos;t have an account? <a href="#">Get in touch to get started.</a></p>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" id="email" value={email} placeholder="Enter email"  required onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"  id="password" value={password} placeholder="Enter password"  required  onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button className="w-100" variant="primary" type="submit">Login</Button>
              </Form>
            </div>
        </div>
    );
}
export default Login;