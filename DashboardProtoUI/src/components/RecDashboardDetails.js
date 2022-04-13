import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import rec_data from "../rec_data.json";
import filter_blue from '../images/icons/filter_blue.png';
import { MANAGELIST } from "../navigation/constants";
import {useHistory} from 'react-router-dom'

 
export const RecDashboardDetails = () => {   

    const [recommendations, setRecommendationa] = useState(rec_data);

    const history =useHistory();
    const onManageList =()=>{
    history.push({
       pathname: MANAGELIST,
  
     });
    }  

    return (
    <>     
        <div className="asset-menu-buttons">
        <button className="Button-Icon-Manage" onClick={onManageList}> Manage</button>  
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