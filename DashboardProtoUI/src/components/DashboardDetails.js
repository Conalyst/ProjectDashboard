import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import data from "../data.json";
import info_black from '../images/icons/info_icon.png';

export const DashboardDetails = () => {

    const [assets, setAssets] = useState(data);
    return (
    <>     
        <div class="asset-menu-buttons">
                    <button class="Button-Icon-Manage"> Manage</button> 
                    <button class="Button-Icon-Filter"> Filter</button>
        </div> 
        <div className="table-border-blue">
        <Table striped hover size="sm" class="table-items-tables-table--column-items">
            <thead>
                <tr class="row-item-master-01 cr-button__text">
                    <th>
                        <span class="material-icons-outlined">
                            info
                        </span>
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
                <tr class="cr-text">
                    <td>
                    <img  src={info_black} alt =""/>
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