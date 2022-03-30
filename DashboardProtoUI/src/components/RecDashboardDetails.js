import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import data from "../data.json";
import filter_blue from '../images/icons/filter_blue.png';

export const RecDashboardDetails = () => {

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
export default RecDashboardDetails;