import React, { useEffect, useState } from "react";
import {Button, InputGroup, Form, Table} from "react-bootstrap";
import { deleteThreat, getAllTest } from "../../services";
import company_icon from '../../images/user/company_icon.png';
import user_icon from '../../images/user/user_icon.png';
import dashboard_a from '../../images/icons/dashboard_icon.svg';
import risks from '../../images/icons/risk_icon.svg';
import vulnerabilities from '../../images/icons/vulner_icon.svg';
import threats from '../../images/icons/threat_icon.svg';
import assets from '../../images/icons/asset_icon.png';
import recommendations from '../../images/icons/rec_icon.svg';
import reports from '../../images/icons/report_icon.svg';
import settings from '../../images/icons/setting_icon.svg';
import search from '../../images/icons/search_icon.png';
import notification from '../../images/icons/noti_icon.png';
import info from '../../images/icons/info_icon.png';
import vendor_icon from '../../images/icons/vendor_icon.png';
import info_black from '../../images/icons/info_icon.png';
import info_white from '../../images/icons/outline_info_white.png';
import {useHistory} from 'react-router-dom'
import { THREATSDASHBOARD, VULDASHBOARD } from "../../navigation/CONSTANTS";
import Info from "../Info";
import Select from 'react-select';
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { threats as threatsAtom} from '../../recoil/atom' 



export const EditThreat = () => { 
  const [threats, setThreats] = useRecoilState(threatsAtom);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  //const [searchvul, setSearchvul] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [message, setMessage] = useState()
  const history =useHistory();
  const storedUser = localStorage.getItem("storedUser");
  
  const parsedUser = JSON.parse(storedUser);
  const onDone =()=>{
  history.push({
     pathname: THREATSDASHBOARD,
  
     });
    }  


  const onOk =()=>{
  history.push({
     pathname: THREATSDASHBOARD,

   });
  }  
 
  const onCancel =()=>{
    history.push({
      pathname: THREATSDASHBOARD,
   
      });
    }  
  
 
  const onDelete = (e) => {
    deleteThreat(threats.id)
      .then((result) => {
        setMessage("This Threat has been successfully deleted !");
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault()
  }



  return (
    <div className="db-site-container">
      <div className="db-container db-sidenav">
        <div className="db-sidenav-profile" data-mdb-color="dark" role="navigation" data-mdb-hidden="false"
              data-mdb-accordion="true">
            <div className="company-info">
              <img id="company-icon" src={company_icon} alt="Company Logo" draggable="false"/>
              <p className="user-label">{parsedUser.CompanyName}</p>
            </div>
            <ul className="sidenav-menu">
              <li className="sidenav-item">
                <a className="sidenav-link" href="/dashboard">
                  <img className="sidenav-icon" src={dashboard_a} alt =""/>Dashboard
                </a>   
              </li>
              <li className="sidenav-item">
                <a className="sidenav-link" href="/risk">
                  <img className="sidenav-icon" src={risks} alt =""/>Risk Analysis
                </a>
              </li>
              <li className="sidenav-item">
                <a className="sidenav-link" href="/vul">
                  <img className="sidenav-icon" src={vulnerabilities} alt =""/>Vulnerabilities
                </a>
              </li>
              <li className="sidenav-item sidenav-active">
                <a className="sidenav-link" href="/threat">
                  <img className="sidenav-icon" src={threats} alt =""/>Threats
                </a>
             </li>
             <li className="sidenav-item">
                <a className="sidenav-link" href="/asset">
                  <img className="sidenav-icon" src={assets} alt =""/>Assets
                </a>
              </li>
              <li className="sidenav-item">
                <a className="sidenav-link" href="/rec">
                  <img className="sidenav-icon" src={recommendations} alt =""/>Recommendations
                </a>
              </li>
              <li className="sidenav-item">
                <a className="sidenav-link" href="/report">
                  <img className="sidenav-icon" src={reports} alt =""/>Reports
                </a>
              </li>
            </ul>
        </div>
        <div>
          <div className="user-info">
            <img id="user-icon" src={user_icon} alt="User" draggable="false"/>
            <span className="user-label">{parsedUser.name}</span>
          </div>
          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link" href="/settings">
                <img className="sidenav-icon" src={settings} alt =""/>Settings
              </a>
            </li>
          </ul>
          <p className="sidenav-vendor-info">Powered by Valencia IP</p>
        </div>
      </div>
      <div className="db-container-main">
        <div className="db-container db-topnav">
          <InputGroup className="db-search">
            <input type="text" placeholder="Search" aria-label="Search" />
            <Button variant="outline-secondary" id="button-addon2">
              <img src={search}/>
            </Button>
          </InputGroup>
          <div className="menu-nav">
            <img id="vendor" src={vendor_icon} alt="Valencia" draggable="false"/>
            <img className="topnav-icon" src={info} alt="Help" draggable="false"/>
            <img className="topnav-icon" src={notification} alt="Notifications" draggable="false"/>
          </div>
        </div>
        <div className="dashboard-main-wrapper">
          <div className="Manage-listAdd">
            <div className="Rectangle-top">            
            <div className="Add-New-Asset">
              <span>
                Edit Threat
              </span>
              <button className="Top-Cancel" onClick={() =>onCancel()}>X</button>
              </div>                      
              <div className="Rectangle-grey-box-long edit-box">
              <Table size="sm" class="table-items-tables-table--column-items">
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
                  </tr>
                </thead>
                <tbody>
                  <tr className="cr-text-edit">
                  <td>
                    <button type="button" className="button-modal" data-bs-toggle="modal" data-bs-target="#exampleModal1"> <img src={info_black} alt =""/></button> 
                    <Info/>
                  </td>
                  <td>{threats.id}</td>
                  <td>{threats.title}</td>
                  <td>{threats.description}</td>
                  <td>{threats.category}</td>
                  <td>{threats.agent}</td>
                  <td>{threats.impact}</td>
                  <td>{threats.likelihood}</td>
                  <td>{threats.rating}</td>
                </tr>
              </tbody>
            </Table>
            <Form>
            <div className="row g-2">
              <div className="column-form col-md">
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Title</Form.Label>
                  <Form.Control className="Frame-left" type="text" onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Impact <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" >
                  <option >L</option>
                  <option>M</option>
                  <option >H</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" id="exampleFormControlInput1">
                  <Form.Label className="Label">Likelihood <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left">
                  <option >L</option>
                  <option>M</option>
                  <option >H</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Rating <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left">
                  <option >L</option>
                  <option>M</option>
                  <option >H</option>
                  </Form.Select>
                </Form.Group>
                </div>
                <div className="col-md">
                <Form.Group className="mb-3">
                  <Form.Label className="Label-right">Category</Form.Label>
                  <Form.Select className="Frame-right">
                    <option>Accidental</option>
                    <option>Deliberate</option>
                    <option>Natural hazard</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="Label-right">Description</Form.Label>
                  <Form.Control className="Frame-desc-manage"  as="textarea" name="detail" onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label-right">Agent <span className="optional">Optional</span></Form.Label>
                  <Form.Control className="Frame-right" type="text" onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
          <div className="asset-menu-buttons">
            <Button type="button"  onClick={() =>onDelete()}className="Button-Icon-Filter-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Delete
            </Button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content Manage-list-delete">
                  <div className="modal-header Rectangle-header">
                    <h5 className="modal-title Asset-Added" id="exampleModalLabel">Remove Threats</h5>
                  </div>
                  <div className="modal-body">
                    <p className="Remove-asset-message">Your selected threat will be removed from the list.<br></br>
                    </p>
                    <div className="remove-menu-buttons">
                  <Button type="button"className="Button-Icon-remove-modal" data-bs-dismiss="modal">Cancel</Button>
                  <Button type="button" className="Button-Icon-AddAsset-modal" data-bs-dismiss="modal" aria-label="Close" onClick={() =>onOk()}>OK</Button>
                  </div>
                  </div>
                </div>
              </div>
            </div>           
            <Button className="Button-Icon-AddAsset-modal" type="submit" onClick={() =>onDone()}>
              Done
            </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default EditThreat;