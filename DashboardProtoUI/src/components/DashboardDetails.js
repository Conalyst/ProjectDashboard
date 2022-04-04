import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import data from "../data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import info_white from '../images/icons/outline_info_white.png';
import axios from "axios";

export const DashboardDetails = () => {

    const [assets, setAssets] = useState([]);


    useEffect(() => {
        const storedUser = localStorage.getItem("storedUser");
    
        const parsedUser = JSON.parse(storedUser);
        console.log("parsedUser",parsedUser);
    
        // axios.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${parsedUser.accessToken}`;
        
        axios.get(`http://localhost:5000/api/v2/assets/company/${parsedUser.companyId}`).then((result) => {
            setAssets(result.data);
        })
      }, []);




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
                    <td>{asset.assetId}</td>
                    <td>{asset.Asset.title}</td>
                    <td>{asset.Asset.description}</td>
                    <td>{asset.Asset.categoryId}</td>
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