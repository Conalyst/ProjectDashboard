import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import {Button, Form} from "react-bootstrap";
import vendor_icon from '../images/icons/vendor_icon.png';
import { MAINDASHBOARD } from "../navigation/constants";
import { postLogin } from "../services/loginService";
import { login } from '../actions/userActions';
import axios from "axios";
 import Cookies from "js-cookie";
export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState("");
 

  const history =useHistory();
  const onLogin =()=>{
  history.push({
     pathname: MAINDASHBOARD,

   });
  }  
const requestLogin = async (accessToken) => {
  console.log(accessToken);
  onLogin();
  // we need to call the endpoint of get asset by company id depending of the the user who connect 
};

 

const handleSubmit = e => {

  e.preventDefault();
  var requestDto = {
    "email": email,
    "password": password 
  };
 postLogin(requestDto)
  .then((response) => {
    if (response) {
     
        const accessToken= response.data.token;
        Cookies.set("access", accessToken);
        setErr('');
        requestLogin(accessToken);
    } else {
      console.log("no response ")
    }
  }).catch(err =>{
    if(err.response.status == 400)
     setErr('Email or Password is not valid.');
})
};

    return (
        <div className="login-container">
            <div className="login-welcome">
                <img src={vendor_icon} />
                <div className="welcome-title">Welcome to Valencia Dashboard</div>
                <div className="welcome-subtitle"></div>
            </div>
            <div className="login-form-container">
              <p>Don&apos;t have an account? <a href="#">Get in touch to get started.</a></p>
              <Form onSubmit={handleSubmit}>
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
              <p className="login-error"style={err ? {visibility: "visible", color: "red"}: null} >{err}</p>
            </div>
        </div>
    );
}

export default Login;

