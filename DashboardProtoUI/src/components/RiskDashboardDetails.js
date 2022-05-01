import React, { useEffect, useState } from "react";
import {Table, Dropdown} from "react-bootstrap";
import risk_data from "../risk_data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import pen_white from '../images/icons/pen_white.png';
import pen_black from '../images/icons/pen_black.png';
import info_white from '../images/icons/outline_info_white.png';
import {ADDRISK, EDITRISK} from "../navigation/CONSTANTS";
import {useHistory} from 'react-router-dom';
import Info from "./Info";
import { getAllRisks } from "../services/riskService";
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { risk as riskAtom} from '../recoil/atom' 

export const RiskDashboardDetails = () => {
    const [risk, setRisk] = useRecoilState(riskAtom)
    const [risks, setRisks] = useState([])  
    const storedUser = localStorage.getItem("storedUser");
    const parsedUser = JSON.parse(storedUser);
    const isAdmin = parsedUser.role;
    const history =useHistory();
    const onManageList =()=>{
    history.push({
       pathname: ADDRISK,
  
     });
    } 
    
    const onEditRisk =(risk)=>{
       setRisk(risk)
      history.push({
         pathname: EDITRISK,
    
       });
      } 

      useEffect(() => {
        const storedUser = localStorage.getItem("storedUser");   
        const parsedUser = JSON.parse(storedUser);
        console.log("parsed user dashboard", parsedUser);
        getAllRisks()
        .then((result) => {
            console.log("Risks", result)
            setRisks(result);
        })
   
    }, []); 
    return (
    <>     
        <div className="asset-menu-buttons">
        {(isAdmin === "Admin") && (<button className="Button-Icon-Manage" onClick={onManageList}> Add Risk</button> )} 
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
                    {(isAdmin === "Admin") && (
                    <th>
                     <img  src={pen_white} alt =""/>
                    </th>
                    )}
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
                    {/* <td>{risk.action}</td> */}
                    
                    {(isAdmin === "Admin") && ( <td> <button className="pen-button" onClick={() => onEditRisk(risk)}><img src={pen_black} alt =""/></button> </td> )}
              
                </tr>
            ) )}
            </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default RiskDashboardDetails;