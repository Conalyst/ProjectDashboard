import React, { useEffect, useState } from "react";
import {InputGroup, Dropdown,  Table} from "react-bootstrap";
import data from "../data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import info_white from '../images/icons/outline_info_white.png';
import pen_white from '../images/icons/pen_white.png';
import pen_black from '../images/icons/pen_black.png';
//import { getAllAssets, getAssetsByCompanyId, getAssetsById } from "../services";
//import { pullCompanyAssets } from "../services/companyAssetsService";
import { getAllAssets } from "../services/assetsService";
//import ManageModal from "./ManageModal";
import { ADDASSET, EDITASSET } from "../navigation/CONSTANTS";
import {useHistory} from 'react-router-dom';
import Filter from "./Filter";
import Info from "./Info";
//import ManageModal from "./ManageModal";
// import axios from "axios";
import { pullCompanyAssets } from "../services/companyAssetsService";
//import { getAllAssets } from "../services/assetsService";

export const DashboardDetails = () => {

  const [assets, setAssets] = useState([]);
  const storedUser = localStorage.getItem("storedUser");
  const parsedUser = JSON.parse(storedUser);
  const isAdmin = parsedUser.role;
    const history =useHistory();
    const onAddAsset =()=>{
    history.push({
       pathname: ADDASSET,
     });
    }  

    const onEditAsset =()=>{
    history.push({
       pathname: EDITASSET,
     });
    } 

  

    useEffect(() => {
      console.log("in detail")
      const storedUser = localStorage.getItem("storedUser");   
      const parsedUser = JSON.parse(storedUser);
      return new Promise((resolve, reject) => {
        try {
          // do db call or API endpoint axios call here and return the promise.
          getAllAssets()
          .then((res) => {
            console.log("in detail", res)
            setAssets(res);
            resolve(res);
          })
            .catch((err) => {
              console.log("getAllAssets > err=", err);
              setAssets([]); 
              reject("Request error!");
            });
        } catch (error) {
          console.error("getAllAssets error!==", error);
          reject("getAllAssets error!");
        }
      });
    }, []);
    return (
    <>     
        <div className="asset-menu-buttons">          
        {(isAdmin === "Admin") && (<button className="Button-Icon-Manage-AddAsset" onClick={onAddAsset}> Add Asset</button> )}
          <button className="Button-Icon-Filter-Addasset"> <img  src={filter_blue} alt =""/> Filter</button>
        </div> 
        <div className="table-border-blue scrollable">
        <Table striped hover size="sm" class="table-items-tables-table--column-items">
            <thead>
                <tr className="row-item-master-01 cr-button__text">
                    <th>
                    <img  src={info_white} alt =""/>
                    </th>
                    <th>IDs</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Confidentiality</th>
                    <th>Integrity</th>
                    <th>Availability</th>
                    <th>Rating</th>
                    {(isAdmin === "Admin") && (
                    <th>
                    <img  src={pen_white} alt =""/>
                    </th>
                      )}
                </tr>
            </thead>
            <tbody>
                {assets.map((asset) => (
                <tr className="cr-text">
                  <td>
                  <button type="button" className="button-modal" data-bs-toggle="modal" data-bs-target="#exampleModal1"> <img src={info_black} alt =""/></button> 
                    <Info/>
              </td>
                <td>{asset.assetId}</td>
                <td>{asset.title}</td>
                <td>{asset.description}</td>
 
                <td>{asset.name}</td>

                <td>{asset.confidentiality}</td>
                <td>{asset.integrity}</td>
                <td>{asset.availability}</td>
                <td>{asset.rating}</td>
                <td>
                <td>
                {(isAdmin === "Admin") && (  <button className="pen-button" onClick={onEditAsset}><img src={pen_black} alt =""/></button> )}
                    </td>               
                </td>
              </tr>
            ) )}
          </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default DashboardDetails;