import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_THREATS, GET_THREAT_BY_ID, POST_THREAT,GET_STATIC_THREATS,GET_AGENTS_BY_HIGH } from "./constants";
  
  export const getAllThreats = () => {
    return new Promise((resolve, reject) => {
      try {
        // do an SDK, DB call or API endpoint axios call here and return the promise.
        axios
        .get(GET_ALL_THREATS())
        .then((res) => {
            console.log("res...", res.data)
           resolve(res.data);
        })
        .catch((err) => {
          reject("Error in getAllThreats axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };
 
  export const getThreatById = (threatId) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_THREAT_BY_ID(threatId))
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
          reject("Error in threat by Id  axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };

  export const postThreat = (threat) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .post(POST_THREAT(),threat)
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
          console.log("postthreat > axios err=", err);
          reject("Error in post threat axios!");
        });
      } catch (error) {
        console.error("in addThreat > postThreat, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };

  export const getStaticThreats = () => {
    return new Promise((resolve, reject) => {
      try {
        // do an SDK, DB call or API endpoint axios call here and return the promise.
        axios
        .get(GET_STATIC_THREATS())
        .then((res) => {
            console.log("res...", res.data)
           resolve(res.data);
        })
        .catch((err) => {
          reject("Error in getTotalthreats axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };

  export const getAgents = () => {
    return new Promise((resolve, reject) => {
      try {
        // do an SDK, DB call or API endpoint axios call here and return the promise.
        axios
        .get(GET_AGENTS_BY_HIGH())
        .then((res) => {
            console.log("res...", res.data)
           resolve(res.data);
        })
        .catch((err) => {
          reject("Error in getTotalthreats axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };