import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import data from "../data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import info_white from '../images/icons/outline_info_white.png';
import { getAllAssets, getAssetsByCompanyId, getAssetsById } from "../services";

export const DashboardDetails = () => {

    const [assets, setAssets] = useState(data);

   /*    const [assets, setAssets] = useState([]);
    useEffect(() => {
        return new Promise((resolve, reject) => {
          try {
              
            // do db call or API endpoint axios call here and return the promise.
            getAllAssets()
            .then((res) => {
              setAssets(res);
              resolve(res);
            })
              .catch((err) => {
                setAssets([]); 
                reject("Request error!");
              });
          } catch (error) {
            console.error("error!==", error);
            reject("signin error!");
          }
        });
      }, []); */

    return (
    <>     
        <div className="asset-menu-buttons">
                <button className="Button-Icon-Manage"> Manage</button> 
                <button className="Button-Icon-Filter"> <img  src={filter_blue} alt =""/> Filter</button>
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
                    <th>Integretity</th>
                    <th>Availability</th>
                    <th>Rating</th>
                    <th>Datasource</th>
                </tr>
            </thead>
            <tbody>
                {assets.map((asset) => (
                <tr className="cr-text">
                    <td>
                        <button type="button" className="button-modal" data-toggle="modal" data-target="#myModal"><img src={info_black} alt =""/></button>
                    </td>
                    <td>{asset.id}</td>
                    <td>{asset.title}</td>
                    <td>{asset.description}</td>
                    <td>{asset.category}</td>
                    <td>{asset.confidentiality}</td>
                    <td>{asset.integrity}</td>
                    <td>{asset.availability}</td>
                    <td>{asset.rating}</td>
                    <td>{asset.datasource}</td>
                </tr>
            ) )}
            </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default DashboardDetails;