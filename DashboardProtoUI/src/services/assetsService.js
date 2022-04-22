import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_ASSETS, COMPANYASSETS, GET_ASSET_BY_ID, POST_ASSET, GET_STATIC_ASSETS } from "./constants";
  
  export const getAllAssets = () => {
    return new Promise((resolve, reject) => {
      try {
        // do an SDK, DB call or API endpoint axios call here and return the promise.
        axios
        .get(GET_ALL_ASSETS())
        .then((res) => {
            console.log("res...", res.data)
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
        .get(COMPANYASSETS(companyId))
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
  };

  export const postAsset = (asset) => {
    return new Promise((resolve, reject) => {
      const storedUser = localStorage.getItem("storedUser");
    
      const parsedUser = JSON.parse(storedUser);
      console.log("token in service", parsedUser.token)
      console.log("in service post asset ", asset)
      try {
        console.log("hello here ",asset.availability)
        axios
        .post(POST_ASSET(),
        {
         title: asset.title,
         categoryId: asset.categoryId,
          description: asset.description,
          confidentiality:asset.confidentiality,
          integrity:asset.integrity,
          availability:"asset.availability",
          rating:asset.rating 
        }) 
        .then(res=>{
          console.log("new connect", res)
        })
        console.log("inservoce ", Headers)
      } catch (error) {
        console.error("in addAsset > postAsset, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };

  export const getStaticAssets = () => {
    return new Promise((resolve, reject) => {
      try {
        // do an SDK, DB call or API endpoint axios call here and return the promise.
        axios
        .get(GET_STATIC_ASSETS())
        .then((res) => {
            console.log("res...", res.data)
           resolve(res.data);
        })
        .catch((err) => {
          reject("Error in getTotalssets axios!");
        });
      } catch (error) {
        reject(SYSTEM_ERROR);
      }
    });
  };

  