import React, { useEffect, useState } from "react";
import {Table, Dropdown} from "react-bootstrap";
import rec_data from "../rec_data.json";
import filter_blue from '../images/icons/filter_blue.png';
import pen_white from '../images/icons/pen_white.png';
import pen_black from '../images/icons/pen_black.png';
import { ADDREC } from "../navigation/constants";
import {useHistory} from 'react-router-dom'

 
export const RecDashboardDetails = () => {   

    const [recommendations, setRecommendationa] = useState(rec_data);

    const history =useHistory();
    const onAddRec =()=>{
    history.push({
       pathname: ADDREC,
  
     });
    }  

    return (
    <>     
        <div className="asset-menu-buttons">
        <button className="Button-Icon-Manage" onClick={onAddRec}> Add Recommendation</button>  
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
                    <th>
                        <img  src={pen_white} alt =""/>
                    </th>
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
                    <td>
                   <Dropdown className="dropdown-container">
                    <Dropdown.Toggle className="pen-button" id="dropdown-basic" variant="outline-light" >
                        <img src={pen_black} alt =""/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="rounded">
                      <Dropdown.Item className="pen-button-link" href="#/status">Status</Dropdown.Item>
                      <Dropdown.Item className="pen-button-link" href="/editrec">Edit </Dropdown.Item>
                      <Dropdown.Item className="pen-button-link" href="/editrec">Remove</Dropdown.Item>
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
export default RecDashboardDetails;