import React, { useEffect, useState } from "react"; 
import { getAllTest } from "../services";
import Axios, { AxiosResponse }from 'axios'
import {Button, Form} from "react-bootstrap";
import vendor_icon from '../images/icons/vendor_icon.png';

export const Login = () => {
 
    const [tests, setTests] = useState(null);

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [loginStatus, setLoginStatus] = useState("");
    const register = () => {
      Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      });
    };
  
    const login = () => {
      Axios.post("http://localhost:5000/api/v2/login", {
        username: username,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          console.log(response.data)
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
          console.log(response.message)
        }
      });

    };
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
        <div className="login-container">
          <div className="login-welcome">
                <img src={vendor_icon} />
                <div className="welcome-title">Welcome to Valencia Dashboard</div>
                <div className="welcome-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="login-form-container">
              <p>Don&apos;t have an account? <a href="#">Get in touch to get started.</a></p>
          <div>
            <div className="mb-4">
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            />
            </div>
            <div className="mb-4">
            <label>Password</label>
            <input
              type="text"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
            </div>
            <button className="w-100" variant="primary" onClick={register}> Register </button>
          </div>
          <div className="mb-4"></div>
          <div>
          <div className="mb-4">
          <label>Email</label>
            <input
              type="email"
              placeholder="Username..."
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            </div>
             <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password..."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
             </div>
            <button className="w-100" variant="primary" onClick={login}> Login </button>
          </div>
          <h1>{loginStatus}</h1>
          </div>
        </div>
      );
  }
export default Login;