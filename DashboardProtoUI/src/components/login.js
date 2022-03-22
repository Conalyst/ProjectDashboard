import React, { useEffect, useState } from "react"; 
import { getAllTest } from "../services";
import Axios, { AxiosResponse }from 'axios'

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
        <div className="App">
          <div className="registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            />
            <label>Password</label>
            <input
              type="text"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
            <button onClick={register}> Register </button>
          </div>
    
          <div className="login">
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Username..."
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password..."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={login}> Login </button>
          </div>
    
          <h1>{loginStatus}</h1>
        </div>
      );
  }
export default Login;