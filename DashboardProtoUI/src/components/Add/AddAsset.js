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
import { getAllVulnerabilities } from "../../services/vulnerabilityService";
import {useHistory} from 'react-router-dom'
import { postAssetVuln } from "../../services"; 
import { DASHBOARD, ADDASSET, VULDASHBOARD } from "../../navigation/CONSTANTS";
 
import Select from 'react-select';



export const AddAsset = () => { 
  const [assetTitle, setAssetTitle] = useState('');
  const [description, setDescription] = useState('');
  //const [searchvul, setSearchvul] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [availability, setAvailability] = useState("");
  const [integrity, setIntegrity] = useState("");
  const [confidentiality, setConfidentiality] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const [vulnerability, setVulnerability] = useState([])
  const storedUser = localStorage.getItem("storedUser");
  const [assetId, setAssetId] = useState("")
  const parsedUser = JSON.parse(storedUser);
  
 
  const history =useHistory();

  useEffect(() => {

    return new Promise((resolve, reject) => {
      try {
        // do db call or API endpoint axios call here and return the promise.
        getAllVulnerabilities()
        .then((res) => {
          console.log("in detail", res)
          setVulnerability(res);
          resolve(res);
        })
          .catch((err) => {
            console.log("getAllVulnerabilities > err=", err);
            setVulnerability([]); 
            reject("Request error!");
          });
      } catch (error) {
        console.error("getAllVulnerabilities error!==", error);
        reject("getAllAssets error!");
      }
    });
  }, []);

  const options = []
  const vulns = vulnerability
  vulns.map(val => {
      options.push({value: val.id, label: val.title})
  })

  const handleChangeCategory = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index]
    const option =  el.getAttribute('value');  
    setCategory(option)
  }
 
  const onDone =(e)=>{
    // let assetId;
  
     var requestDto = {
       title: assetTitle,
       categoryId: category,
       description:description,
       confidentiality:confidentiality,
       integrity:integrity,
       availability:availability,
       rating:rating
     };
     
     postAsset(requestDto)
       .then((res) => {
         setAssetTitle("");
         setDescription("")    
        //  console.log("after post request", res.data.id, res.data["id"])
          postAssetVuln(selectedOption[0].value, res.data["id"])
          .then((res) => {
              console.log("post asset vuln data", res)
          })
          .catch((err) => {
            console.log("Post Asset vuln Error", err);
          });
       })
       .catch((err) => {
         console.log("Post Asset Error", err);
       });
  
       console.log("selected Vuln", selectedOption[0].value)

 
}
   

  const onCancel =()=>{

    history.push({
       pathname: DASHBOARD,
        
     });
    }  
  
  const onAdd =(e)=>{
   
    if (assetTitle === ""){
      setMessage("The title of Asset is requiried for Add!")
       e.preventDefault();
        history.push({
          pathname: ADDASSET,
          
        });
    } else{
      onDone();
      setMessage("New asset was successfully added to the list")
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
                  <Form.Label className="Label">Confidentiality <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" value={confidentiality} onChange={(e) => setConfidentiality(e.target.value)}>
                  <option value='L'>L</option>
                  <option value='M'>M</option>
                  <option value='H'>H</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" id="exampleFormControlInput1">
                  <Form.Label className="Label">Integrity <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" value={integrity} onChange={(e) => setIntegrity(e.target.value)}>
                  <option value='L'>L</option>
                  <option value='M'>M</option>
                  <option value='H'>H</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Availability <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" value={availability} onChange={(e) => setAvailability(e.target.value)} >
                  <option value='L'>L</option>
                  <option value='M'>M</option>
                  <option value='H'>H</option> 
                  </Form.Select>
                </Form.Group>  
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Rating <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" value={rating} onChange={(e) => setRating(e.target.value)}>
                  <option value='L'>L</option>
                  <option value='M'>M</option>
                  <option value='M'>H</option>
                  </Form.Select>
                </Form.Group>
                </div>
                <div className="col-md">
                <Form.Group className="mb-3">
                  <Form.Label className="Label-right">Category</Form.Label>
                  <Form.Select className="Frame-right" value={category} onChange={(e) => handleChangeCategory(e)}>
                    <option value='1'>Software</option>
                    <option value='2'>Network & Data Centre</option>
                    <option value='3'>Technical</option>
                    <option value='4'>Security</option>
                    <option value='5'>Personal</option>
                    <option value='6'>Intangible</option>
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