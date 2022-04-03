import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import vul_data from "../vul_data.json";
import filter_blue from '../images/icons/filter_blue.png';

export const RecDashboardDetails = () => {

    const [vulnerabilities, setVulnerabilities] = useState(vul_data);
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
                    <th>Category</th>
                    <th>Impact</th>
                    <th>Likelihood</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {vulnerabilities.map((vulnerability) => (
                <tr className="cr-text ">
                    <td>{vulnerability.id}</td>
                    <td>{vulnerability.title}</td>
                    <td>{vulnerability.description}</td>
                    <td>{vulnerability.category}</td>
                    <td>{vulnerability.impact}</td>
                    <td>{vulnerability.likelihood}</td>
                    <td>{vulnerability.rating}</td>
                </tr>
            ) )}
            </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default RecDashboardDetails;