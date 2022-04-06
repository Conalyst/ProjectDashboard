import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
// import { LOGIN } from "./constants";
import { COMPANYASSETS } from "./constants";

   // get company assets 
   export const pullCompanyAssets = (companyId) => {
       console.log('------front end ', companyId);
     return new Promise((resolve, reject) => {
       try {
         console.log(COMPANYASSETS());
         axios 
        //  .get(COMPANYASSETS()+companyId)
        .get(COMPANYASSETS(companyId))
         .then(res => 
           {
            resolve(res);
            console.log("THIS IS THE RESPONSE",res.data)
            // console.log("this is response of login service",res.status);
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