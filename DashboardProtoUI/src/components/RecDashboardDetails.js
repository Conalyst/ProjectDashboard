import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import rec_data from "../rec_data.json";
import filter_blue from '../images/icons/filter_blue.png';

export const RecDashboardDetails = () => {

    const [assets, setAssets] = useState(rec_data);
    return (
    <>     
        <div className="asset-menu-buttons">
                <button className="Button-Icon-Manage"> Manage</button> 
                <button className="Button-Icon-Filter"> <img  src={filter_blue} alt =""/> Filter</button>
        </div> 
        <div className="table-border-blue scrollable">
        <Table striped hover size="sm" class="table-items-tables-table--column-items">
            <thead>
                <tr className="row-item-master-01 rec-button__text">
                    <th>IDs</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Safeguard</th>
                    <th>Risks Ids</th>
                </tr>
            </thead>
            <tbody>
                {assets.map((asset) => (
                <tr className="cr-text ">
                    <td>{asset.id}</td>
                    <td>{asset.title}</td>
                    <td>{asset.description}</td>
                    <td>{asset.safeguard}</td>
                    <td>{asset.risks_ids}</td>
                </tr>
            ) )}
            </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default RecDashboardDetails;