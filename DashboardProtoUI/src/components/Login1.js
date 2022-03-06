import React, { useEffect, useState, useHistory } from "react";
import {Button, Form} from "react-bootstrap";
import { getAllTest } from "../services";
import vendor_icon from '../images/icons/vendor_icon.png';
import { DASHBOARD } from "../navigations/CONSTANTS";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Id, setId] = useState("");
  const [errors, setErrors] = useState("");
  const userInfo = {
    id: undefined,
    email: undefined,
  };

  const history =useHistory();
  const goTo =()=>{
   history.push({
     pathname: DASHBOARD,
     state: {
      
     },
   });
  }

 
    const [tests, setTests] = useState(null);

    useEffect(() => {
        return new Promise((resolve, reject) => {
          try {
            // do db call  or API endpoint axios call here and return the promise.
           Login()
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
                  <Form.Control type="email" name="email" label="email" onChange={(e) => { setEmail(e.target.value); }}/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" label="password" onChange={(e) => { setPassword(e.target.value); }}/>
                </Form.Group>
                <Button className="w-100" variant="primary" type="submit"   onClick={() => goTo()}>Login</Button>
              </Form>
            </div>
        </div>
    );
}
export default Login;