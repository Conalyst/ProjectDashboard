import React, { useEffect, useState } from "react"; 
import { getAllTest } from "../services";
import company_icon from '../images/company_icon.png';
import user_icon from '../images/user_icon.png';
import dashboard from '../images/dashboard.png';
import risks from '../images/risks.png';
import vulnerabilities from '../images/vulnerabilities.png';
import threats from '../images/threats.png';
import assets from '../images/assets.png';
import recommendations from '../images/recommendations.png';
import reports from '../images/reports.png';
import settings from '../images/settings.png';

 

export const Dashboard = () => {
 
    const [tests, setTests] = useState(null);

    useEffect(() => {
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
    return (
 <div class="container-fluid">
    <div class="Rectangle-48">   
     <div class="Side-Bar-Main--Profile-2432">
       <div id="sidenav-1" class="sidenav" data-mdb-color="dark" role="navigation" data-mdb-hidden="false"
           data-mdb-accordion="true">
            <a class="ripple d-flex justify-content-center py-3" href="#" data-mdb-ripple-color="primary">
            <img id="company_icon" src={company_icon}
              alt="Company Logo" draggable="false"/>
            </a>
            <p class="Company-Name">
              Company Name
            </p>
              <a class="ripple d-flex justify-content-center py-3" href="#" data-mdb-ripple-color="primary">
              <img id="user_icon" src={user_icon}
                alt="User" draggable="false"/>
              </a>
              <p class="User-Name">
                User Name
              </p>
            <ul class="sidenav-menu">
              <li class="sidenav-item">
                <a class="sidenav-link active" href="#">
                  <img src={dashboard} alt =""/>
                  <span class="icon-name-orange">
                    Dashboard
                  </span>
                </a>                
              </li>
              <li class="sidenav-item">
                  <a class="sidenav-link" href="#">
                    <img src={risks} alt =""/>
                    <span class="icon-name">
                      Risks
                    </span>
                  </a>                  
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link" href="#">
                  <img src={vulnerabilities} alt =""/>
                  <span class="icon-name">
                    Vulnerabilities
                  </span>
                </a>
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link" href="#">
                  <img src={threats} alt =""/>
                  <span class="icon-name">
                    Threats
                  </span>
                </a>
             </li>
             <li class="sidenav-item">
                <a class="sidenav-link" href="#">
                  <img src={assets} alt =""/>
                  <span class="icon-name">
                     Assets
                  </span>
                </a>
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link" href="#">
                  <img src={recommendations} alt =""/>
                  <span class="icon-name">
                    Recommendations
                  </span>
                </a>
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link" href="#">
                  <img src={reports} alt =""/>
                  <span class="icon-name">
                    Reports
                  </span>
                </a>
              </li>
              <li class="sidenav-item">
                <a class="sidenav-link" href="#">
                  <img src={settings} alt =""/>
                  <span class="icon-name">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> 
  );
}
export default Dashboard;