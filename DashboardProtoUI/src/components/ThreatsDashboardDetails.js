import React, { useEffect, useState } from "react";
import {Table, Dropdown, InputGroup} from "react-bootstrap";
//import thr_data from "../thr_data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import info_white from '../images/icons/outline_info_white.png';
import {ADDTHREAT, EDITTHREAT} from "../navigation/CONSTANTS";
import {useHistory} from 'react-router-dom';
import pen_white from '../images/icons/pen_white.png';
import pen_black from '../images/icons/pen_black.png';
import Info from "./Info";
//import ManageButton from "./ManageButton";
import { getAllThreats } from "../services/threatService";


export const ThreatsDashboardDetails = () => {

    //const [threats, setThreats] = useState(thr_data);
     
    const [assets, setAssets] = useState([]);
    const storedUser = localStorage.getItem("storedUser");
    const parsedUser = JSON.parse(storedUser);
    const isAdmin = parsedUser.role;
   
      const history =useHistory();
      const onAddThreat =()=>{
      history.push({
         pathname: ADDTHREAT,
    
       });
      }  

    useEffect(() => {
    
        const storedUser = localStorage.getItem("storedUser");   
        const parsedUser = JSON.parse(storedUser);
        console.log("parsed user dashboard", parsedUser);
        getAllThreats()
        .then((result) => {
            console.log("Threats", result)
            setAssets(result);
        })
   
    }, []); 

      const onEditThreat =()=>{
        history.push({
           pathname: EDITTHREAT,
      
         });
        }      
  
  
      return (
      <>     
          <div className="asset-menu-buttons">
          {(isAdmin === "Admin") && (<button className="Button-Icon-Manage-Threat" onClick={onAddThreat}> Add Threat</button> )} 
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
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Agent</th>
                    <th>Impact</th>
                    <th>Likelihood</th>
                    <th>Rating</th>
                    {(isAdmin === "Admin") && (
                    <th>
                      <img  src={pen_white} alt =""/>
                    </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {/* {threats.map((threat) => ( */}
                  {assets.map((threat) => (
                <tr className="cr-text">
                    <td>
                      <button type="button" className="button-modal" data-bs-toggle="modal" data-bs-target="#exampleModal1"> <img src={info_black} alt =""/></button> 
                      <Info/>
                  </td>
                    <td>{threat.id}</td>
                    <td>{threat.title}</td>
                    <td>{threat.description}</td>
                    <td>{threat.category}</td>
                    <td>{threat.agent}</td>
                    <td>{threat.impact}</td>
                    <td>{threat.likelihood}</td>
                    <td>{threat.rating}</td>
                  
                     {(isAdmin === "Admin") && ( <td> <button className="pen-button" onClick={onEditThreat}><img src={pen_black} alt =""/></button> </td>)}
                
                </tr>
            ) )}
            </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default ThreatsDashboardDetails;