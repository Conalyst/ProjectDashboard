import React, { useEffect, useState } from "react";
import risk_data from "./../risk_data.json";
import HeatMap from "./HeatMap";
import { Button, InputGroup, Tabs, Tab } from "react-bootstrap";
import { getAllTest } from "../services";

import company_icon from "../images/user/company_icon.png";
import user_icon from "../images/user/user_icon.png";
import dashboard_a from "../images/icons/dashboard_icon.svg";
import risks from "../images/icons/risk_icon.svg";
import vulnerabilities from "../images/icons/vulner_icon.svg";
import threats from "../images/icons/threat_icon.svg";
import assets from "../images/icons/asset_icon.png";
import recommendations from "../images/icons/rec_icon.svg";
import reports from "../images/icons/report_icon.svg";
import settings from "../images/icons/setting_icon.svg";
import high from "../images/icons/high.svg";
import medium from "../images/icons/medium.svg";
import low from "../images/icons/low.svg";
import flag from "../images/icons/flag.svg";
import recommend from "../images/icons/recommend.svg";
import search from "../images/icons/search_icon.png";
import notification from "../images/icons/noti_icon.png";
import info from "../images/icons/info_icon.png";
import vendor_icon from "../images/icons/vendor_icon.png";
//import MainDashboardVisual from "./MainDashboardVisual";
import MainDashboardDetails from "./MainDashboardDetails";
//import MainDashboardHistory from "./MainDashboardHistory";

export const MainDashboard = () => {
  // const [tests, setTests] = useState(null);
  const storedUser = localStorage.getItem("storedUser");
  
  const parsedUser = JSON.parse(storedUser);

  return (
    <div className="db-site-container">
      <div className="db-container db-sidenav">
        <div
          className="db-sidenav-profile"
          data-mdb-color="dark"
          role="navigation"
          data-mdb-hidden="false"
          data-mdb-accordion="true"
        >
          <div className="company-info">
            <img
              id="company-icon"
              src={company_icon}
              alt="Company Logo"
              draggable="false"
            />
            <p className="user-label">{parsedUser.CompanyName}</p>
          </div>
          <ul className="sidenav-menu">
            <li className="sidenav-item sidenav-active">
              <a className="sidenav-link" href="/dashboard">
                <img className="sidenav-icon" src={dashboard_a} alt="" />
                Dashboard
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link" href="/risk">
                <img className="sidenav-icon" src={risks} alt="" />
                Risk Analysis
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link" href="/vul">
                <img className="sidenav-icon" src={vulnerabilities} alt="" />
                Vulnerabilities
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link" href="/threat">
                <img className="sidenav-icon" src={threats} alt="" />
                Threats
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link" href="/asset">
                <img className="sidenav-icon" src={assets} alt="" />
                Assets
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link" href="/rec">
                <img className="sidenav-icon" src={recommendations} alt="" />
                Recommendations
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link" href="/report">
                <img className="sidenav-icon" src={reports} alt="" />
                Reports
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="user-info">
            <img id="user-icon" src={user_icon} alt="User" draggable="false" />
            <span className="user-label">{parsedUser.name}</span>
          </div>
          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link" href="/settings">
                <img className="sidenav-icon" src={settings} alt="" />
                Settings
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
              <img src={search} />
            </Button>
          </InputGroup>
          <div className="menu-nav">
            <img
              id="vendor"
              src={vendor_icon}
              alt="Valencia"
              draggable="false"
            />
            <img
              className="topnav-icon"
              src={info}
              alt="Help"
              draggable="false"
            />
            <img
              className="topnav-icon"
              src={notification}
              alt="Notifications"
              draggable="false"
            />
          </div>
        </div>

        <div className="d-flex flex-row">
          <div className="dashboard-main-wrapper col-6 p-2">
          <a className="sidenav-link" href="/risk">
                <img className="sidenav-icon" src={risks} alt="" />
                Risk Analysis
              </a>
            <div className="d-flex">
            <HeatMap risk_data={risk_data}/>
              <div style={{ width: 200, marginLeft: 20 }}>
                <div className="mb-4 w-100 d-flex justify-content-between p-4">
                  <b>Total</b>
                  {/* this number should be replaced with the one coming from backend */}
                  <b>3</b>
                </div>
                <div className="shadow p-4 w-100">
                  <b>High</b>
                  <div className="d-flex justify-content-between mr">
                    <img style={{width: 40}} src={high} />
                    {/* this number should be replaced with the one coming from backend */}
                    <b>2</b>
                  </div>
                </div>
                <div className="shadow p-4 w-100">
                  <b>Medium</b>
                  <div className="d-flex justify-content-between mr">
                    <img style={{width: 40}} src={medium} />
                    {/* this number should be replaced with the one coming from backend */}
                    <b>1</b>
                  </div>
                </div>
                <div className="shadow p-4 w-100">
                  <b>Low</b>
                  <div className="d-flex justify-content-between mr">
                    <img style={{width: 40}} src={low} />
                    {/* this number should be replaced with the one coming from backend */}
                    <b>0</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-main-wrapper col-6 p-2">
            <MainDashboardDetails />
          </div>
        </div>
        <div>
          {/* <DashboardHistory /> */}
        </div>
        <div className="d-flex">
          <div className="p-2 col-3">
            <div className="db-container p-2">
              <a className="sidenav-link" href="/vul">
                <img className="sidenav-icon" src={vulnerabilities} alt="" />
                Vulnerabilities
              </a>
              <div className="p-4 text-end">10 <img style={{width: 40}} src={high}/></div>
            </div>
          </div>
          <div className="p-2 col-3">
            <div className="db-container p-2">
              <a className="sidenav-link" href="/threat">
                <img className="sidenav-icon" src={threats} alt="" />
                Threats
              </a>
              <div className="p-4 text-end">10 <img style={{width: 40}} src={low}/></div>
            </div>
          </div>
          <div className="p-2 col-3">
            <div className="db-container p-2">
              <a className="sidenav-link" href="/asset">
                <img className="sidenav-icon" src={assets} alt="" />
                Assets
              </a>
              <div className="p-4 text-end">9 <img style={{width: 40}} src={flag}/></div>
            </div>
          </div>
          <div className="p-2 col-3">
            <div className="db-container p-2">
              <a className="sidenav-link" href="/rec">
                <img className="sidenav-icon" src={recommendations} alt="" />
                Recommendations
              </a>
              <div className="p-4 text-end">2 <img style={{width: 40}} src={recommend}/></div>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};
export default MainDashboard;