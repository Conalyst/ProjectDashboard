import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import data from "../data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import info_white from '../images/icons/outline_info_white.png';
import cancel_icon from '../images/icons/cancel_icon.png';

export const DashboardDetails = () => {

    const [assets, setAssets] = useState(data);
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
            <div className="Filter-Main-2">
                <div className="Filters">
                    Filters
               <img src={cancel_icon} alt =""/></div>
            <div className="filter_catergory_frame"> <span className="filter_label">
  Asset Category
</span><div className="filter_input_rectangle"><span className="data_input">
  Data
</span></div></div>
<div className="filter_catergory_frame"> <span className="filter_label">
Confidentiality
</span><div className="filter_input_rectangle"><span className="data_input">
  All
</span></div></div>
<div className="filter_catergory_frame"> <span className="filter_label">
Integrity
</span><div className="filter_input_rectangle"><span className="data_input">
  All
</span></div></div>
<div className="filter_catergory_frame"> <span className="filter_label">
Availability
</span><div className="filter_input_rectangle"><span className="data_input">
  High
</span></div></div>
         
            <div className="Button-Filter">Filter</div>
        </div>
    </>
    );
};
export default DashboardDetails;