import React, { useEffect, useState } from "react";
import {InputGroup, Dropdown,  Table} from "react-bootstrap";
import data from "../data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import info_white from '../images/icons/outline_info_white.png';
import pen_white from '../images/icons/pen_white.png';
import pen_black from '../images/icons/pen_black.png';
import { getAllAssets, getAssetsByCompanyId, getAssetsById } from "../services";
//import ManageModal from "./ManageModal";
import { ADDASSET } from "../navigation/constants";
import {useHistory} from 'react-router-dom';
import Filter from "./Filter";
import Info from "./Info";

export const DashboardDetails = () => {

  const [assets, setAssets] = useState(data);

    const history =useHistory();
    const onAddAsset =()=>{
    history.push({
       pathname: ADDASSET,
     });
    }  

    return (
    <>     
        <div className="asset-menu-buttons">          
          <button className="Button-Icon-AddAsset-modal" onClick={onAddAsset}> Add Asset</button>  
          <button className="Button-Icon-Filter-modal"> <img  src={filter_blue} alt =""/> Filter</button>
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
                    <th>
                    <img  src={pen_white} alt =""/>
                    </th>
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
                <td>{asset.Asset.title}</td>
                <td>{asset.Asset.description}</td>
                <td>{asset.Asset.categoryId}</td>
                <td>{asset.confidentiality}</td>
                <td>{asset.integrity}</td>
                <td>{asset.availability}</td>
                <td>{asset.rating}</td>
                <td>
                <Dropdown className="dropdown-container">
                  <Dropdown.Toggle className="pen-button" id="dropdown-basic" variant="outline-light" >
                    <img src={pen_black} alt =""/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="rounded">
                      <Dropdown.Item className="pen-button-link" href="#/status">Status</Dropdown.Item>
                      <Dropdown.Item className="pen-button-link" href="/editasset">Edit </Dropdown.Item>
                      <Dropdown.Item className="pen-button-link" href="/editasset">Remove</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>                
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