import React, { useEffect, useState } from "react";
import {Button, InputGroup, Form, Table} from "react-bootstrap";
import { getAllTest } from "../../services";
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
import { RECDASHBOARD, VULDASHBOARD } from "../../navigation/CONSTANTS";
import Select from 'react-select';



export const EditRec = () => { 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  //const [searchvul, setSearchvul] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const history =useHistory();
  const storedUser = localStorage.getItem("storedUser");
  
  const parsedUser = JSON.parse(storedUser);
  const onDone =()=>{
  history.push({
     pathname: RECDASHBOARD,

   });
  }  

  const onCancel =()=>{
    history.push({
       pathname: RECDASHBOARD,
  
     });
    }  


  const onOk =()=>{
  history.push({
     pathname: RECDASHBOARD,

   });
  }  

  const options = [
    { value: 'R1', label: 'R1' },
    { value: 'R2', label: 'R2' },
    { value: 'R3', label: 'R3' },
    { value: 'R4', label: 'r4' },
    { value: 'R5', label: 'R5' },
    { value: 'R6', label: 'R6' },
    { value: 'R7', label: 'R7' },
    { value: 'R8', label: 'R8' },
    { value: 'R9', label: 'R9' },
    { value: 'R10', label:'R10'},
  ];

  const customStyles = {
    control: base => ({
      ...base,
      height: 48,
      minHeight: 48
    })
  };

  /*const onAddAsset = () =>{
 
    if (!assetTitle) {
      setErrors("An asset title is needed!");
    } else {
      var requestDto = {
        title: assetTitle,
        description:description,
         categoryId: 2
      };
      postAsset(requestDto)
        .then((result) => {
          setAssetTitle("");
          setDescription("")
          // getCommentByRestaurant(restaurantId).then((result) => {
          //   setCommentsListData(result);
          // });
          setErrors("This asset created successfully !");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 404) {
            setErrors("No comment found!");
          } else {
            if (err.response.status == 400) {
              setErrors("restaurantId is not valid!");
            } else {
              setErrors("Unknow error!");
            }
          }
        });
    }
    }*/

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
             <li className="sidenav-item">
                <a className="sidenav-link" href="/asset">
                  <img className="sidenav-icon" src={assets} alt ="/asset"/>Assets
                </a>
              </li>
              <li className="sidenav-item sidenav-active">
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
                  Edit Recommendation
                </span>
                <button className="Top-Cancel" onClick={() =>onCancel()}>X</button>
              </div>            
              <div className="Rectangle-grey-box-long edit-box">
              <Table size="sm" class="table-items-tables-table--column-items">
                <thead>
                  <tr className="row-item-master-01 cr-button__text">
                    <th>IDs</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Safeguard</th>
                    <th>Risk IDs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cr-text-edit">                  
                  <td>1</td>
                  <td>Retire SiteScrape</td>
                  <td>While SiteScape can be considered to be ORG&apos;s most critical business application, it is also a legacy application that has not been supported or patched in five years. Penetration testing revealed a number of technical vulnerabilities that leaves sensitive data stored within the application exposed. These vulnerabilities will continue to persist until ORG moves to a modern or cloud-based solution.</td>
                  <td>L</td>
                  <td>R1, R3, R5</td>
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
                  <Form.Label className="Label-left">Associated Risks <span className="optional">Optional</span></Form.Label>
                  <Select className="Frame-left-multiselect"
                    isMulti
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    styles={customStyles}
                   />
                </Form.Group>
                </div>
                <div className="col-md">
                <Form.Group className="mb-3">
                  <Form.Label className="Label-right">Safeguard</Form.Label>
                  <Form.Select className="Frame-right">
                  <option >L</option>
                  <option>M</option>
                  <option >H</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="Label-right">Description</Form.Label>
                  <Form.Control className="Frame-desc" rows="9" as="textarea"  name="detail" onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
          <div className="asset-menu-buttons">
            <Button type="button" className="Button-Icon-Filter-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Delete
            </Button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content Manage-list-delete">
                  <div className="modal-header Rectangle-header">
                    <h5 className="modal-title Asset-Added" id="exampleModalLabel">Remove Recommendation</h5>
                  </div>
                  <div className="modal-body">
                    <p className="Remove-asset-message">Your selected recommendation will be removed from the list.
                    You can restore it within 15 days from History.</p>
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
export default EditRec;