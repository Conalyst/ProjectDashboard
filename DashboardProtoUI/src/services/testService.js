import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_TEST } from "./constants";
   // get test
  export const getAllTest = () => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_ALL_TEST())
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
          reject("Error in get test  axios!");
        });
      } catch (error) {
        console.error("in url service  > get short url, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };