import React, { useEffect, useState } from "react";
import {Table, Dropdown} from "react-bootstrap";
import rec_data from "../rec_data.json";
import filter_blue from '../images/icons/filter_blue.png';
import pen_white from '../images/icons/pen_white.png';
import pen_black from '../images/icons/pen_black.png';
import { ADDREC, EDITREC } from "../navigation/CONSTANTS";
import {useHistory} from 'react-router-dom'

 
export const RecDashboardDetails = () => {   

    const [recommendations, setRecommendationa] = useState(rec_data);
    const storedUser = localStorage.getItem("storedUser");
    const parsedUser = JSON.parse(storedUser);
    const isAdmin = parsedUser.role;
    const history =useHistory();
    const onAddRec =()=>{
    history.push({
       pathname: ADDREC,
  
     });
    }  

    const onEditRec =()=>{
        history.push({
           pathname: EDITREC,
      
         });
        }  

    return (
    <>     
        <div className="asset-menu-buttons">
        {(isAdmin === "Admin") && ( <button className="Button-Icon-Manage" onClick={onAddRec}> Add Rec</button> )} 
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
                    {(isAdmin === "Admin") && (
                    <th>
                        <img  src={pen_white} alt =""/>
                    </th>
                    )}
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
                    
                    {(isAdmin === "Admin") && ( <td> <button className="pen-button" onClick={onEditRec}><img src={pen_black} alt =""/></button>  </td>   )}
                             

                </tr>
            ) )}
            </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default RecDashboardDetails;