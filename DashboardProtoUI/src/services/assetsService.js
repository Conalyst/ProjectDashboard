/*import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_ASSETS, GET_ASSET_BY_COMPANY_ID, GET_ASSET_BY_ID } from "./constants";
  
  export const getAllAssets = () => {
    return new Promise((resolve, reject) => {
      try {
        // do an SDK, DB call or API endpoint axios call here and return the promise.
        axios
        .get(GET_ALL_ASSETS())
        .then((res) => {
           resolve(res.data);
        })
        .catch((err) => {
          reject("Error in getAllAssets axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };
  export const getAssetsByCompanyId = (companyId) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_ASSET_BY_COMPANY_ID(companyId))
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
                    reject("Error in company by companyId  axios!");
        });
      } catch (error) {
             reject(SYSTEM_ERROR);
      }
    });
  };
  export const getAssetsById = (assetId) => {
    return new Promise((resolve, reject) => {
      try {
        axios       
        .get(GET_ASSET_BY_ID(assetId))
        .then(res => {
            resolve(res.data);
        })
        .catch((err) => {
          reject("Error in company by assetId  axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };*/