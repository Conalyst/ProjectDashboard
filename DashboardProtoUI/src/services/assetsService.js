import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_ASSETS, COMPANYASSETS, GET_ASSET_BY_ID, POST_ASSET, GET_STATIC_ASSETS, GET_STATS_BARCHART, PUT_ASSET, POST_ASSET_VULN , DELETE_ASSET} from "./constants";
// import { atom, useRecoilState, useRecoilValue } from 'recoil'
// import { assetId as assetIdAtom} from '../recoil/atom'
// const [assetId, setAssetId] = useRecoilState(assetIdAtom)

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
      try {
        axios
        .post(POST_ASSET(),
        {
         title: asset.title,
         categoryId: asset.categoryId,
          description: asset.description,
          confidentiality:asset.confidentiality,
          integrity:asset.integrity,
          availability:asset.availability,
          rating:asset.rating 
        }) 
        .then(res=>{
          console.log("add new asset", res.data)
          const data = res.data
          console.log("add new asset id", data.id)
            // setAssetId(data.id)
            resolve(res);
        })
      } catch (error) {
        console.error("in addAsset > postAsset, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };

  export const postAssetVuln = (vulnId, assetId) => {
    // console.log("New asset id and vuln id..", assetId, vulnId)
    return new Promise((resolve, reject) => {
      try {
        axios
        .post(POST_ASSET_VULN(), {
          assetId: assetId,
          vulnerabilityId: vulnId
        }) 
        .then(res=>{
          console.log("new connect", res.data)
        })
      } catch (error) {
        console.error("in addAssetVuln > postAsset, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };

  export const deleteAsset = (assetId) => {
    console.log("Asset id in delete", assetId)
    return new Promise((resolve, reject) => {
      try {
        axios
        .delete(DELETE_ASSET(assetId)) 
        .then(res => {
          console.log("new connect", res.data)
        })
      } catch (error) {
        console.error("in deleteAsset > postAsset, Err===", error);
        reject(SYSTEM_ERROR);
      }
    });
  };

  export const putAsset = (assetDto) => {
    return new Promise((resolve, reject) => {
      const storedUser = localStorage.getItem("storedUser");
    
      const parsedUser = JSON.parse(storedUser);
      try {
        axios
        .put(PUT_ASSET(assetDto.id), assetDto
        ) 
        .then(res=>{
          console.log("new connect", res)
        })
      } catch (error) {
        console.error("in Update Asset > Update Asset, Err===", error);
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

  export const getStatsForBarChart = () => {
    return new Promise((resolve, reject) => {
      try {
        // do an SDK, DB call or API endpoint axios call here and return the promise.
        axios
        .get(GET_STATS_BARCHART())
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

  