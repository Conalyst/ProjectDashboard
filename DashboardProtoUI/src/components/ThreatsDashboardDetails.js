import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import thr_data from "../thr_data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import info_white from '../images/icons/outline_info_white.png';
import { MANAGE, ADDASSET, DASHBOARD } from "../navigation/constants";
import {useHistory} from 'react-router-dom'


export const ThreatsDashboardDetails = () => {

    const [threats, setThreats] = useState(thr_data);

   /*    const [assets, setAssets] = useState([]);
    useEffect(() => {
        return new Promise((resolve, reject) => {
          try {
              
            // do db call or API endpoint axios call here and return the promise.
            getAllAssets()
            .then((res) => {
              setAssets(res);
              resolve(res);
            })
              .catch((err) => {
                setAssets([]); 
                reject("Request error!");
              });
          } catch (error) {
            console.error("error!==", error);
            reject("signin error!");
          }
        });
      }, []); */

      const history =useHistory();
      const onAddAsset =()=>{
      history.push({
         pathname: ADDASSET,
    
       });
      }  
  
  
      return (
      <>     
          <div className="asset-menu-buttons">
            <button className="Button-Icon-Manage" onClick={onAddAsset}> Manage</button>  
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
                    <th>Agent</th>
                    <th>Impact</th>
                    <th>Likelihood</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {threats.map((threat) => (
                <tr className="cr-text">
                    <td>
                      <button type="button" className="button-modal" data-bs-toggle="modal" data-bs-target="#exampleModal1"> <img src={info_black} alt =""/></button> 
              <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel"> Asset</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Accordion Item #1
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Accordion Item #2
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Accordion Item #3
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                      </div>
                    </div>
                  </div>
                    ...
                 </div>
                    <div className="modal-footer">
                      
                    </div>
                  </div>
                </div>
              </div>
                    </td>
                    <td>{threat.id}</td>
                    <td>{threat.title}</td>
                    <td>{threat.description}</td>
                    <td>{threat.category}</td>
                    <td>{threat.agent}</td>
                    <td>{threat.impact}</td>
                    <td>{threat.likelihood}</td>
                    <td>{threat.rating}</td>
                </tr>
            ) )}
            </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default ThreatsDashboardDetails;