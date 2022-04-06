import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import rec_data from "../rec_data.json";
import filter_blue from '../images/icons/filter_blue.png';
import ManageModal from "./ManageModal";


export const RecDashboardDetails = () => {

    const [recommendations, setRecommendationa] = useState(rec_data);
    return (
    <>     
        <div className="asset-menu-buttons">
            <button className="Button-Icon-Manage"data-bs-toggle="modal" data-bs-target="#exampleModal"> Manage</button> 
                 <ManageModal/>
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
                    <th>Risk IDs</th>
                </tr>
            </thead>
            <tbody>
                {recommendations.map((recommendation) => (
                <tr className="cr-text ">
                    <td>{recommendation.id}</td>
                    <td>{recommendation.title}</td>
                    <td>{recommendation.description}</td>
                    <td>{recommendation.safeguard}</td>
                    <td>{recommendation.risks_ids}</td>
                </tr>
            ) )}
            </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default RecDashboardDetails;