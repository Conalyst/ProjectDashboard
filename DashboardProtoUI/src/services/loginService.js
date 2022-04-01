import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { LOGIN } from "./constants";
   // get test
   export const postLogin = (userInfo) => {
       
     return new Promise((resolve, reject) => {
       try {
         // do an SDK, DB call or API endpoint axios call here and return the promise.
         axios 
         .post(LOGIN(),userInfo)
         .then(res => 
           {
            resolve(res);
            console.log("THIS IS THE RESPONSE",res.data.message)
            console.log("this is response of login service",res.status);
         })
         .catch((err) => {
           reject(err);
         });
       } catch (error) {
         console.error("in questionsService > getChoicesOfQuestion, Err===", error);
         reject(SYSTEM_ERROR);
       }
     });
   };