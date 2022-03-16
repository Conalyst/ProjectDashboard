import React, { useEffect, useState } from "react";
import {Button, InputGroup, Tabs, Tab} from "react-bootstrap";
import { getAllTest } from "../services";
import company_icon from '../images/user/company_icon.png';
import user_icon from '../images/user/user_icon.png';
import dashboard_a from '../images/icons/dashboard_icon_a.png';
import risks from '../images/icons/risk_icon.png';
import vulnerabilities from '../images/icons/vulner_icon.png';
import threats from '../images/icons/threat_icon.png';
import assets from '../images/icons/asset_icon.png';
import recommendations from '../images/icons/rec_icon.png';
import reports from '../images/icons/report_icon.png';
import settings from '../images/icons/setting_icon.png';
import search from '../images/icons/search_icon.png';
import notification from '../images/icons/noti_icon.png';
import info from '../images/icons/info_icon.png';
import vendor_icon from '../images/icons/vendor_icon.png';

import DashboardVisual from "./DashboardVisual";
import DashboardDetails from "./DashboardDetails";
import DashboardHistory from "./DashboardHistory";

export const Dashboard = () => {
 
    const [tests, setTests] = useState(null);

/*    useEffect(() => {
        return new Promise((resolve, reject) => {
          try {
            // do db call  or API endpoint axios call here and return the promise.
           getAllTest()
            .then((res) => {
              setTests(res);
              //resolve(res);
            })
              .catch((err) => {
                setTests([]); 
                reject("Request error!");
              });
          } catch (error) {
            console.error("GetTest error!==", error);
            reject("Test error!");
          }
        });
      }, []);
*/
    return (
      <div class="db-site-container"> 
        <div class="db-container db-sidenav">
          <div class="db-sidenav-profile" data-mdb-color="dark" role="navigation" data-mdb-hidden="false"
              data-mdb-accordion="true">
            <div class="user-info">
              <img id="company-icon" src={company_icon} alt="Company Logo" draggable="false"/>
              <p class="user-label">Company Name</p>
            </div>
            <div class="user-info">
              <img id="user-icon" src={user_icon} alt="User" draggable="false"/>
              <p class="user-label">Alex Toma</p>
            </div>
            <ul class="sidenav-menu">
              <li class="sidenav-item sidenav-active">
                <a class="sidenav-link" href="#">
                  <img class="sidenav-icon" src={dashboard_a} alt =""/>Dashboard
                </a>   
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link" href="#">
                  <img class="sidenav-icon" src={risks} alt =""/>Risks
                </a>
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link" href="#">
                  <img class="sidenav-icon" src={vulnerabilities} alt =""/>Vulnerabilities
                </a>
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link" href="#">
                  <img class="sidenav-icon" src={threats} alt =""/>Threats
                </a>
             </li>
             <li class="sidenav-item">
                <a class="sidenav-link" href="/dashboard">
                  <img class="sidenav-icon" src={assets} alt =""/>Assets
                </a>
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link" href="#">
                  <img class="sidenav-icon" src={recommendations} alt =""/>Recommendations
                </a>
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link" href="">
                  <img class="sidenav-icon" src={reports} alt =""/>Reports
                </a>
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link" href="#">
                  <img class="sidenav-icon" src={settings} alt =""/>Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="db-container-main">
          <div class="db-container db-topnav">
            <InputGroup className="db-search">
              <input type="text" placeholder="Search" aria-label="Search" />
              <Button variant="outline-secondary" id="button-addon2">
                <img src={search}/>
              </Button>
            </InputGroup>
            <div class="menu-nav">
              <img id="vendor" src={vendor_icon} alt="Valencia" draggable="false"/>
              <img class="topnav-icon" src={info} alt="Help" draggable="false"/>
              <img class="topnav-icon" src={notification} alt="Notifications" draggable="false"/>
            </div>
          </div>
          <div class="dashboard-main-wrapper">
          <Tabs defaultActiveKey="visual" id="dashboard" className="mb-3 nav-fill dashboard-main">
            <Tab eventKey="visual" title="Visual">
              <DashboardVisual/>
            </Tab>
            <Tab eventKey="detail" title="Details">
              <DashboardDetails/>
            </Tab>
            <Tab eventKey="history" title="History">
              <DashboardHistory/>
            </Tab>
          </Tabs>
          </div>
        </div>
      </div>
  );
}
export default Dashboard;