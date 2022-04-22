import React, { useEffect, useState } from "react";
import {Button, InputGroup, Form} from "react-bootstrap";
import { postVulnerability } from "../../services/vulnerabilityService";
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
import {useHistory} from 'react-router-dom'
import { ADDVUL, DASHBOARD, VULDASHBOARD } from "../../navigation/constants";
import Select from 'react-select';



export const AddVul = () => { 
  const [vulTitle, setVulTitle] = useState('');
  const [description, setDescription] = useState('');
  const [impact, setImpact] = useState('');
  const [likelihood, setLikelihood] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState("");
  //const [searchvul, setSearchvul] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const storedUser = localStorage.getItem("storedUser");
  
  const parsedUser = JSON.parse(storedUser);
  const history =useHistory();
  const goToVulDashboard =()=>{
    history.push({
      pathname: VULDASHBOARD,
 
    });
  }
  
  const onDone =()=>{
   

  var requestDto = {
   title: vulTitle,
   impact: impact,
   likelihood:likelihood,
   rating:rating,
   category:category,
   Description:description
 };
 postVulnerability(requestDto)
   .then((result) => {
    
     goToVulDashboard();
   })
   .catch((err) => {
     console.log(err);
     
   });
  }  

  const onCancel =()=>{
    history.push({
       pathname: VULDASHBOARD,
  
     });
    }  
  const onAdd = (event) => {
  if(vulTitle){
      try {
        //do db call or API endpoint axios call here and return the promise.
        setMessage("New vulnerability was successfully added to the list.")
        onDone();
        history.push({
          pathname: DASHBOARD,
     
           });
       
      }catch (error) {
        console.error("Erro while retrieving the next question", error);
      }
    }else{
      setMessage("The title of vulnerability is requiried for Add!")
      history.push({
        pathname: ADDVUL,
        
      });
    }
  }

  const options = [
    { value: 'T1', label: 'T1' },
    { value: 'T2', label: 'T2' },
    { value: 'T3', label: 'T3' },
    { value: 'T4', label: 'T4' },
    { value: 'T5', label: 'T5' },
    { value: 'T6', label: 'T6' },
    { value: 'T7', label: 'T7' },
    { value: 'T8', label: 'T8' },
    { value: 'T9', label: 'T9' },
    { value: 'T10', label:'T10'},
  ];
   
       
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
              <li className="sidenav-item sidenav-active">
                <a className="sidenav-link" href="/vul">
                  <img className="sidenav-icon" src={vulnerabilities} alt =""/>Vulnerabilities
                </a>
              </li>
              <li className="sidenav-item">
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
          <div className="Manage-listAdd-long">
            <div className="Rectangle-top">            
              <div className="Add-New-Asset">
                <span>Add New Vulnerability</span>              
                <button className="Top-Cancel" onClick={() =>onCancel()}>X</button> 
            </div>         
            <div className="Rectangle-grey-box-long">
            <Form>
            <div className="row g-2">
              <div className="column-form col-md">
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Title</Form.Label>
                  <Form.Control className="Frame-left" type="text" onChange={(e) => setVulTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label">impact <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" value={impact} onChange={(e) => setImpact(e.target.value)}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" id="exampleFormControlInput1">
                  <Form.Label className="Label">likelihood <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" value={likelihood} onChange={(e) => setLikelihood(e.target.value)}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </Form.Select>
                </Form.Group>
               
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Rating <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </Form.Select>
                </Form.Group>
                </div>
                <div className="col-md">
                <Form.Group className="mb-3">
                  <Form.Label className="Label-right">Category</Form.Label>
                  <Form.Select className="Frame-right" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option>Accidental</option>
                    <option>Deliberate</option>
                    <option>Natural Hazard</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="Label-right">Description</Form.Label>
                  <Form.Control className="Frame-desc-manage" as="textarea"  name="detail" onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label-right">Associated Threats <span className="optional">Optional</span></Form.Label>
                  <Select className="Frame-right"
                    isMulti
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                   />
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
        <div className="test">
          <Button type="button" className="btn btn-primary Button-Icon-done" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() =>onAdd()}>
           Done
          </Button>
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content Manage-list-add">
                <div className="modal-header Rectangle-header">
                  <h5 className="modal-title Asset-Added" id="exampleModalLabel">Vulnerability Added</h5>
                  </div>
                  <div className="modal-body">
                    <p className="New-asset-was-successfully-added-to-the-list">{message}</p>
                    <Button type="button" data-bs-dismiss="modal" aria-label="Close" className="Button-Primary-Added" onClick={() =>onDone()}>OK</Button>
                  </div>              
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default AddVul;