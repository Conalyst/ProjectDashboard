import React, { useEffect, useState } from "react";
import {Table, Dropdown} from "react-bootstrap";
import risk_data from "../risk_data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import pen_white from '../images/icons/pen_white.png';
import pen_black from '../images/icons/pen_black.png';
import cancel_icon from "../images/icons/cancel_icon.png";
import info_white from '../images/icons/outline_info_white.png';
import {ADDRISK, EDITRISK} from "../navigation/CONSTANTS";
import {useHistory} from 'react-router-dom';
import Info from "./Info";
import { getAllRisks } from "../services/riskService";
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { risk as riskAtom} from '../recoil/atom' 

export const RiskDashboardDetails = () => {
    
    const [risks, setRisk] = useRecoilState(riskAtom);

    const [tempRisk, setTempRisk] = useState(risks);
    const [filterbox, setFilterbox] = useState(false);
    const [sel, setSel] = useState({
      selRiskCat: "All",
      selImpact: "All",
      selLikeli: "All",
      selRate: "All",
    });



    const storedUser = localStorage.getItem("storedUser");
    const parsedUser = JSON.parse(storedUser);
    const isAdmin = parsedUser.role;
    const history =useHistory();
    const onManageList =()=>{
    history.push({
       pathname: ADDRISK,
  
     });
    } 
    
    const onEditRisk =()=>{
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
            setRisk(result);
            setTempRisk(result);
        })
   
    }, []); 


  function startFilter() {
    setFilterbox(!filterbox);
    setTempRisk(risks);
  }

  function closeFilter() {
    setFilterbox(!filterbox);
  }

  function afterFilter() {
    setTempRisk(
      tempRisk
        .filter(
          sel.selRiskCat != "All"
            ? (tempRisk) => tempRisk.category == sel.selRiskCat
            : (tempRisk) => tempRisk.category != null
        )
        .filter(
          sel.selImpact != "All"
            ? (tempRisk) => tempRisk.impact == sel.selImpact
            : (tempRisk) => tempRisk.impact != null
        )
        .filter(
          sel.selLikeli != "All"
            ? (tempRisk) => tempRisk.likelihood == sel.selLikeli
            : (tempRisk) => tempRisk.likelihood != null
        )
        .filter(
          sel.selRate != "All"
            ? (tempRisk) => tempRisk.rating == sel.selRate
            : (tempRisk) => tempRisk.rating != null
        )
    );
    console.log("clicked filter", sel);
  }







    return (
        <>
        {filterbox ? (
          <div>
            <div className="Filter-pop-up-background">
              <div className="Filter-fullbox">
                <div className="Filter-top">
                  <div className="Filters-top-wordbox">
                    <span className="Filter-word">Filters</span>
                    <img
                      className="Filter-cancel"
                      onClick={closeFilter}
                      src={cancel_icon}
                      alt=""
                    />
                  </div>
                </div>
  
                <div className="Filter-middle">
                  <div className="filter_catergory_frame">
                    <span className="filter_label"> Risk Category</span>
                  </div>
  
                  <Dropdown>
                    <Dropdown.Toggle
                      className="filter_selected"
                      id="dropdown-basic"
                      variant="outline-light"
                    >
                      {sel.selRiskCat}
                    </Dropdown.Toggle>
  
                    <Dropdown.Menu className="filter_dropdown">
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selRiskCat: "All" }))
                        }
                      >
                        All
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({
                            ...prev,
                            selRiskCat: "Governance",
                          }))
                        }
                      >
                        Governance
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({
                            ...prev,
                            selRiskCat: "Operational",
                          }))
                        }
                      >
                        Operational
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({
                            ...prev,
                            selRiskCat: "Technical",
                          }))
                        }
                      >
                        Technical
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
  
                  <div className="filter_catergory_frame">
                    <span className="filter_label"> Impact</span>
                  </div>
  
                  <Dropdown className="filter_selection">
                    <Dropdown.Toggle
                      className="filter_selected"
                      id="dropdown-basic"
                      variant="outline-light"
                    >
                      {sel.selImpact}
                    </Dropdown.Toggle>
  
                    <Dropdown.Menu className="filter_dropdown">
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selImpact: "All" }))
                        }
                      >
                        All
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selImpact: "H" }))
                        }
                      >
                        High
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selImpact: "M" }))
                        }
                      >
                        Medium
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selImpact: "L" }))
                        }
                      >
                        Low
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
  
                  <div className="filter_catergory_frame">
                    <span className="filter_label"> Likelihood </span>
                  </div>
  
                  <Dropdown className="filter_selection">
                    <Dropdown.Toggle
                      className="filter_selected"
                      id="dropdown-basic"
                      variant="outline-light"
                    >
                      {sel.selLikeli}
                    </Dropdown.Toggle>
  
                    <Dropdown.Menu className="filter_dropdown">
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selLikeli: "All" }))
                        }
                      >
                        All
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selLikeli: "H" }))
                        }
                      >
                        High
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selLikeli: "M" }))
                        }
                      >
                        Medium
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selLikeli: "L" }))
                        }
                      >
                        Low
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
  
                  <div className="filter_catergory_frame">
                    <span className="filter_label"> Rating </span>
                  </div>
  
                  <Dropdown className="filter_selection">
                    <Dropdown.Toggle
                      className="filter_selected"
                      id="dropdown-basic"
                      variant="outline-light"
                    >
                      {sel.selRate}
                    </Dropdown.Toggle>
  
                    <Dropdown.Menu className="filter_dropdown">
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selRate: "All" }))
                        }
                      >
                        All
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selRate: "H" }))
                        }
                      >
                        High
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selRate: "M" }))
                        }
                      >
                        Medium
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selRate: "L" }))
                        }
                      >
                        Low
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
  
                <button
                  className="Button-Filter"
                  onClick={() => {
                    afterFilter();
                    closeFilter();
                  }}
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        ) : null}
   








        <div className="asset-menu-buttons">
        {(isAdmin === "Admin") && (<button className="Button-Icon-Manage" onClick={onManageList}> Add Risk</button> )} 
          <button className="Button-Icon-Filter" onClick={startFilter}> <img  src={filter_blue} alt =""/> Filter</button>
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
                {tempRisk.map((risk) => (
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
                    
                    {(isAdmin === "Admin") && ( <td> <button className="pen-button" onClick={onEditRisk}><img src={pen_black} alt =""/></button> </td> )}
              
                </tr>
            ) )}
            </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default RiskDashboardDetails;