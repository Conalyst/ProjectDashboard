import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap";
import data from "../data.json";
import info_black from '../images/icons/info_icon.png';
import filter_blue from '../images/icons/filter_blue.png';
import info_white from '../images/icons/outline_info_white.png';
import { getAllAssets, getAssetsByCompanyId, getAssetsById } from "../services";
//import ManageModal from "./ManageModal";
import { ADDASSET, DASHBOARD } from "../navigation/constants";
import {useHistory} from 'react-router-dom'

export const DashboardDetails = () => {

    const [assets, setAssets] = useState(data);

    const history =useHistory();
    const onAddAsset =()=>{
    history.push({
       pathname: ADDASSET,
  
     });
    }  

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

    return (
    <>     
        <div className="asset-menu-buttons">          
          <button className="Button-Icon-AddAsset-modal" onClick={onAddAsset}> Add Asset</button>  
          <button className="Button-Icon-Filter-modal"> <img  src={filter_blue} alt =""/> Filter</button>
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
                    <th>Confidentiality</th>
                    <th>Integrity</th>
                    <th>Availability</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {assets.map((asset) => (
                <tr className="cr-text">
                  <td>
                  <button ctype="button" className="button-modal" data-bs-toggle="modal" data-bs-target="#exampleModal1"> <img src={info_black} alt =""/></button> 
              <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                  <div className="modal-content Rectangle-accordion-content">
                    <div className="modal-header Rectangle-accordion-header">
                      <thead>
                      <tr className="cr-button__text ">
                      <th className="accordion-title-name">IDs</th>
                    <th className="accordion-title-name">Title</th>
                    <th className="accordion-title-name">Description</th>
                    <th className="accordion-title-name">Category</th>
                    <th className="accordion-title-name">Confidentiality</th>
                    <th className="accordion-title-name">Integrity</th>
                    <th className="accordion-title-name">Availability</th>
                    <th className="accordion-title-name">Rating</th>
                      </tr>
                      </thead>                      
                    </div>
                    <div className="modal-header Rectangle-accordion-title-h">
                    <tbody>             
                  <tr className="cr-text ">
                    <td className="accordion-title-name-black"> A5.1</td>
                    <td className="accordion-title-name-black">ORG IT Staff</td>
                    <td className="accordion-title-name-black">Risk of Ransomware attack</td>
                    <td className="accordion-title-name-black">Personnel</td>
                    <td className="accordion-title-name-black">H</td>
                    <td className="accordion-title-name-black">H</td>
                    <td className="accordion-title-name-black">L</td>
                    <td className="accordion-title-name-black">H</td>
                  </tr>
                </tbody>
              </div>
              <div className="modal-body modal-body-box">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed accordion-title-name-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <thead>
                       <tr>
                          <th className="accordion-tab-name">Risk Id</th>
                          <th className="accordion-tab-name">Category</th>
                          <th className="accordion-tab-name">Title</th>
                          <th className="accordion-tab-name">Rating</th>
                       </tr>
                      </thead>
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse BG-Frame" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body BG">          
                      <tr className="cr-text ">
                      <td className="accordion-tab-name-black"> R201</td>
                      <td className="accordion-tab-name-black">IT Operations Risk</td>
                      <td className="accordion-tab-name-black"> Risk of Ransomware attack compromising</td>
                      <td className="accordion-tab-name-black">H</td>
                      </tr>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed accordion-title-name-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <thead>
                      <tr>
                        <th className="accordion-tab-name">Risk Id</th>
                        <th className="accordion-tab-name">Category</th>
                        <th className="accordion-tab-name">Title</th>
                        <th className="accordion-tab-name">Rating</th>
                      </tr>
                    </thead>
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse BG-Frame" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body BG">          
                    <tr className="cr-text ">
                      <td className="accordion-tab-name-black"> R201</td>
                      <td className="accordion-tab-name-black">IT Operations Risk</td>
                      <td className="accordion-tab-name-black"> Risk of Ransomware attack compromising</td>
                      <td className="accordion-tab-name-black">H</td>
                    </tr>
                  </div>
                </div>
              </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed accordion-title-name-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <thead>
                    <tr>
                      <th className="accordion-tab-name">Risk Id</th>
                      <th className="accordion-tab-name">Category</th>
                      <th className="accordion-tab-name">Title</th>
                      <th className="accordion-tab-name">Rating</th>
                    </tr>
                    </thead>
                  </button>
                    </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body BG">
                          <tr>
                            <td className="accordion-tab-name-black"> R201</td>
                            <td className="accordion-tab-name-black">IT Operations Risk</td>
                            <td className="accordion-tab-name-black"> Risk of Ransomware attack compromising</td>
                            <td className="accordion-tab-name-black">H</td>
                          </tr>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
              </td>
                <td>{asset.id}</td>
                <td>{asset.title}</td>
                <td>{asset.description}</td>
                <td>{asset.category}</td>
                <td>{asset.confidentiality}</td>
                <td>{asset.integrity}</td>
                <td>{asset.availability}</td>
                <td>{asset.rating}</td>
              </tr>
            ) )}
          </tbody>
        </Table>   
    </div>     
    </>
    );
};
export default DashboardDetails;