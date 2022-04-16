import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import risk_data from "../risk_data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import info_white from '../images/icons/outline_info_white.png';
import {MANAGELIST} from "../navigation/constants";
import {useHistory} from 'react-router-dom';
import Info from "./Info";

export const RiskDashboardDetails = () => {

    const [risks, setRisk] = useState(risk_data);

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
                <tr className="row-item-master-01 cr-button__text">
                    <th>
                    <img  src={info_white} alt =""/>
                    </th>
                    <th>IDs</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Likelihood</th>
                    <th>Impact</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {risks.map((risk) => (
                <tr className="cr-text">
                    <td>
                      <button type="button" className="button-modal" data-bs-toggle="modal" data-bs-target="#exampleModal1"> <img src={info_black} alt =""/></button> 
                      <Info/>
                    </td>
                    <td>{risk.id}</td>
                    <td>{risk.category}</td>
                    <td>{risk.title}</td>
                    <td>{risk.description}</td>                 
                    <td>{risk.likelihood}</td>
                    <td>{risk.impact}</td>
                    <td>{risk.rating}</td>
                    <td>{risk.action}</td>
                </tr>
            ) )}
            </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default RiskDashboardDetails;