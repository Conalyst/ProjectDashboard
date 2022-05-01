import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_RISKS, GET_RISK_BY_ID, POST_RISK, GET_STATIC_RISKS, DELETE_RISK, POST_RISK_ASSET } from "./constants";
  
  export const getAllRisks = () => {
    return new Promise((resolve, reject) => {
      try {
        // do an SDK, DB call or API endpoint axios call here and return the promise.
        axios
        .get(GET_ALL_RISKS())
        .then((res) => {
            console.log("res...", res.data)
           resolve(res.data);
        })
        .catch((err) => {
          reject("Error in getAllRisks axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };
 
  export const getRiskById = (riskId) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_RISK_BY_ID(riskId))
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
          reject("Error in risk by Id  axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };

  export const postRisk = (risk) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .post(POST_RISK(),risk)
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
          console.log("postrisk > axios err=", err);
          reject("Error in post risk axios!");
        });
      } catch (error) {
        console.error("in addVuln > postrisk, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };

  export const getStaticRisks = () => {
    return new Promise((resolve, reject) => {
      try {
        // do an SDK, DB call or API endpoint axios call here and return the promise.
        axios
        .get(GET_STATIC_RISKS())
        .then((res) => {
            console.log("res...", res.data)
           resolve(res.data);
        })
        .catch((err) => {
          reject("Error in getTotalRisks axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };
  export const deleteRisk = (riskId) => {
    console.log("Risk id in delete", riskId)
    return new Promise((resolve, reject) => {
      try {
        axios
        .delete(DELETE_RISK(riskId)) 
        .then(res => {
          console.log("new connect", res.data)
        })
      } catch (error) {
        console.error("in deleteRisk > postRisk, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };

  export const postRiskAsset = (riskId, assetId) => {
     console.log("New riskId and  asset id ..", riskId, assetId)
    return new Promise((resolve, reject) => {
      try {
        axios
        .post(POST_RISK_ASSET(), {
          riskId: riskId,
          assetId: assetId        
        }) 
        .then(res=>{
          console.log("new connect", res.data)
        })
      } catch (error) {
        console.error("in addRiskAsset > postRiskAsset, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };
