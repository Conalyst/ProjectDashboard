import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import {Button, Form} from "react-bootstrap";
import { getAllTest } from "../services";
import vendor_icon from '../images/icons/vendor_icon.png';
import { DASHBOARD } from "../navigation/CONSTANTS";

export const Login = (props) => {
 
  const [tests, setTests] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history =useHistory();
  const onLogin =()=>{
  history.push({
     pathname: DASHBOARD,
     state: {
      
     },
   });
  }
    

    useEffect(() => {
        return new Promise((resolve, reject) => {
          try {
            // do db call  or API endpoint axios call here and return the promise.
           getAllTest()
            .then((res) => {
              setTests(res);
              //resolve(res);
            })
              .catch((err) => {
                setTests([]); 
                reject("Request error!");
              });
          } catch (error) {
            console.error("GetTest error!==", error);
            reject("Test error!");
          }
        });
      }, []);
    return (
        <div class="login-container">
            <div class="login-welcome">
                <img src={vendor_icon} />
                <div class="welcome-title">Welcome to Valencia Dashboard</div>
                <div class="welcome-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="login-form-container">
              <p>Don&apos;t have an account? <a href="#">Get in touch to get started.</a></p>
              <Form>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" id="email" name='email' placeholder="Enter email"  required onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"  id="password" name='password' placeholder="Enter password"  required  onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
<<<<<<< HEAD
                <Button className="w-100" variant="primary" type="submit" href="/dashboard">Login</Button>
=======
                <Button className="w-100" variant="primary" type="submit" onClick={() =>onLogin()}>Login</Button>
>>>>>>> origin/Frontend
              </Form>
            </div>
        </div>
    );
}
export default Login;