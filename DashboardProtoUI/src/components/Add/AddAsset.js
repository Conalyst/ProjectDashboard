import React, { useEffect, useState } from "react";
import {Button, InputGroup, Form} from "react-bootstrap";
import { getAllTest, postAsset} from "../../services/assetsService";
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
 
import { DASHBOARD, ADDASSET, VULDASHBOARD } from "../../navigation/CONSTANTS";
 
import Select from 'react-select';



export const AddAsset = () => { 
  const [assetTitle, setAssetTitle] = useState('');
  const [description, setDescription] = useState('');
  //const [searchvul, setSearchvul] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [availibility, setAvailibility] = useState("");
  const [integrity, setIntegrity] = useState("");
  const [confidentiality, setConfidentiality] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const storedUser = localStorage.getItem("storedUser");
    
  const parsedUser = JSON.parse(storedUser);
  
 
  const history =useHistory();
 
  const onDone =(e)=>{
   
     var requestDto = {
       title: assetTitle,
       categoryId: 1,
       description:description,
       confidentiality:confidentiality,
       integrity:integrity,
       availibility:availibility,
       rating:rating
     };
     postAsset(requestDto)
       .then((result) => {
         setAssetTitle("");
         setDescription("")
     
       })
       .catch((err) => {
         console.log(err);
         if (err.response.status == 404) {
           //setErrors("No comment found!");
         } else {
           if (err.response.status == 400) {
             
           } else {
            
           }
         }
       });
   
}
   

  const onCancel =()=>{

    history.push({
       pathname: DASHBOARD,
        
     });
    }  
  
  const onAdd =(e)=>{
   
    if (assetTitle === ""){
      setMessage("The title of Asset is requiried for Add!")
      e.preventdefault();
      history.push({
        pathname: ADDASSET,
        
      });
    } else{
      setMessage("New asset was successfully added to the list")
      onDone();
      e.preventdefault();
    history.push({
     pathname: DASHBOARD,

      });
   }
  }  
  const onOk =(e)=>{
   
    history.push({
      
       pathname: DASHBOARD,
        
     });
    }  
  const options = [
    { value: 'V1', label: 'V1' },
    { value: 'V2', label: 'V2' },
    { value: 'V3', label: 'V3' },
    { value: 'V4', label: 'V4' },
    { value: 'V5', label: 'V5' },
    { value: 'V6', label: 'V6' },
    { value: 'V7', label: 'V7' },
    { value: 'V8', label: 'V8' },
    { value: 'V9', label: 'V9' },
    { value: 'V10', label:'V10'},
  ];
  const customStyles = {
    control: base => ({
      ...base,
      height: 48,
      minHeight: 48
    })
  };

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
              <li className="sidenav-item">
                <a className="sidenav-link" href="/threat">
                  <img className="sidenav-icon" src={threats} alt =""/>Threats
                </a>
             </li>
             <li className="sidenav-item sidenav-active">
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
              <span>
                Add New Asset
              </span>
              <button className="Top-Cancel" onClick={() =>onCancel()}>X</button>
              </div>                       
            <div className="Rectangle-grey-box-long">
            <Form>
            <div className="row g-2">
              <div className="column-form col-md">
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Title</Form.Label>
                  <Form.Control className="Frame-left" type="text" onChange={(e) => setAssetTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Availibility <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" value={availibility} onChange={(e) => setAvailibility(e.target.value)} >
 
                  <option >L</option>
                  <option>M</option>
                  <option >H</option>
 
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" id="exampleFormControlInput1">
                  <Form.Label className="Label">Integrity <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" value={integrity} onChange={(e) => setIntegrity(e.target.value)}>
                  <option >L</option>
                  <option>M</option>
                  <option >H</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Confidentiality <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" value={confidentiality} onChange={(e) => setConfidentiality(e.target.value)}>
                  <option >L</option>
                  <option>M</option>
                  <option >H</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Rating <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" value={rating} onChange={(e) => setRating(e.target.value)}>
                  <option >L</option>
                  <option>M</option>
                  <option >H</option>
                  </Form.Select>
                </Form.Group>
                </div>
                <div className="col-md">
                <Form.Group className="mb-3">
                  <Form.Label className="Label-right">Category</Form.Label>
                  <Form.Select className="Frame-right" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Personnel</option>
                    <option>Data</option>
                    <option>Network and Data</option>
                    <option>Software</option>
                    <option>Intangible</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="Label-right">Description</Form.Label>
                  <Form.Control className="Frame-desc-manage" as="textarea"  name="detail" onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label-right">Associated Vulnerabilities <span className="optional">Optional</span></Form.Label>
                  <Select className="Frame-right-multiselect"
                    isMulti
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    styles={customStyles}
                   />
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
        <div className="test">
          <Button type="button" className="btn btn-primary Button-Icon-done" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) =>onAdd(e)}>
           Done
          </Button>
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content Manage-list-add">
                <div className="modal-header Rectangle-header">
                  <h5 className="modal-title Asset-Added" id="exampleModalLabel">Asset Added</h5>
                  </div>
                  <div className="modal-body">
                  
                    <p className="New-asset-was-successfully-added-to-the-list"  > {message}</p>
                    <Button type="button" data-bs-dismiss="modal" aria-label="Close" className="Button-Primary-Added" onClick={() =>onOk()}>OK</Button>
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
export default AddAsset;