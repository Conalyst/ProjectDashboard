import React, { useEffect, useState } from "react";
import {Table, Dropdown} from "react-bootstrap";
import vul_data from "../vul_data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import info_white from '../images/icons/outline_info_white.png';
import pen_white from '../images/icons/pen_white.png';
import pen_black from '../images/icons/pen_black.png';
import {ADDVUL} from "../navigation/constants";
import {useHistory} from 'react-router-dom';
import Info from "./Info";

export const VulDashboardDetails = () => {

    const [vulnerabilities, setVulnerabilities] = useState(vul_data);

    const history =useHistory();
    const onAddVul =()=>{
    history.push({
       pathname: ADDVUL,
  
     });
    }  

    return (
    <>     
        <div className="asset-menu-buttons">
          <button className="Button-Icon-Manage" onClick={onAddVul}>Add Vul</button>  
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
                    <th>Impact</th>
                    <th>Likelihood</th>
                    <th>Rating</th>
                    <th>
                      <img  src={pen_white} alt =""/>
                    </th>
                </tr>
            </thead>
            <tbody>
                {vulnerabilities.map((vulnerability) => (
                <tr className="cr-text">
                    <td>
                      <button type="button" className="button-modal" data-bs-toggle="modal" data-bs-target="#exampleModal1"> <img src={info_black} alt =""/></button> 
                      <Info/>
                    </td>
                    <td>{vulnerability.id}</td>
                    <td>{vulnerability.title}</td>
                    <td>{vulnerability.description}</td>
                    <td>{vulnerability.category}</td>
                    <td>{vulnerability.impact}</td>
                    <td>{vulnerability.likelihood}</td>
                    <td>{vulnerability.rating}</td>
                    <td>
                    <Dropdown className="dropdown-container">
                      <Dropdown.Toggle className="pen-button" id="dropdown-basic" variant="outline-light" >
                        <img src={pen_black} alt =""/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="rounded">
                        <Dropdown.Item className="pen-button-link" href="#/status">Status</Dropdown.Item>
                        <Dropdown.Item className="pen-button-link" href="/editvul">Edit </Dropdown.Item>
                      <Dropdown.Item className="pen-button-link" href="/editvul">Remove</Dropdown.Item>
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
export default VulDashboardDetails;