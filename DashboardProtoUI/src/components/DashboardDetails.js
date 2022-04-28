import React, { useEffect, useState } from "react";
import { InputGroup, Dropdown, Table } from "react-bootstrap";
import data from "../data.json";
import info_black from "../images/icons/info_icon.png";
import filter_blue from "../images/icons/filter_blue.png";
import info_white from "../images/icons/outline_info_white.png";
import pen_white from "../images/icons/pen_white.png";
import pen_black from "../images/icons/pen_black.png";
import cancel_icon from "../images/icons/cancel_icon.png";
//import { getAllAssets, getAssetsByCompanyId, getAssetsById } from "../services";
//import { pullCompanyAssets } from "../services/companyAssetsService";
import { getAllAssets } from "../services/assetsService";
//import ManageModal from "./ManageModal";
import { ADDASSET, EDITASSET } from "../navigation/constants";
import { useHistory } from "react-router-dom";
import Filter from "./Filter";
import Info from "./Info";
//import ManageModal from "./ManageModal";
// import axios from "axios";
import { pullCompanyAssets } from "../services/companyAssetsService";
//import { getAllAssets } from "../services/assetsService";

export const DashboardDetails = () => {
  const [assets, setAssets] = useState([]);

  const [tempAssets, setTempAssets] = useState(assets);
  const [filterbox, setFilterbox] = useState(false);
  const [sel, setSel] = useState({
    selAssetCat: "All",
    selConfi: "All",
    selInt: "All",
    selAva: "All",
    selRat: "All",
  });

  const storedUser = localStorage.getItem("storedUser");
  const parsedUser = JSON.parse(storedUser);
  const isAdmin = parsedUser.role;
    const history =useHistory();
    const onAddAsset =()=>{
    history.push({
      pathname: ADDASSET,
    });
  };

  const onEditAsset = () => {
    history.push({
       pathname: EDITASSET,
     });
    } 

  

    useEffect(() => {
      console.log("in detail")
      const storedUser = localStorage.getItem("storedUser");   
      const parsedUser = JSON.parse(storedUser);
      return new Promise((resolve, reject) => {
        try {
          // do db call or API endpoint axios call here and return the promise.
          getAllAssets()
          .then((res) => {
            console.log("in detail", res);
            setAssets(res);
            setTempAssets(res);
            resolve(res);
          })
          .catch((err) => {
            console.log("getAllAssets > err=", err);
            setAssets([]);
            reject("Request error!");
          });
      } catch (error) {
        console.error("getAllAssets error!==", error);
        reject("getAllAssets error!");
      }
    });
  }, []);

  function startFilter() {
    setFilterbox(!filterbox);
    setTempAssets(assets);
  }

  function closeFilter() {
    setFilterbox(!filterbox);
  }

  function afterFilter() {
    setTempAssets(
      tempAssets
        .filter(
          sel.selAssetCat != "All"
            ? (tempAsset) => tempAsset.AssetCategory.name == sel.selAssetCat
            : (tempAsset) => tempAsset.AssetCategory.name != null
        )
        .filter(
          sel.selConfi != "All"
            ? (tempAsset) => tempAsset.confidentiality == sel.selConfi
            : (tempAsset) => tempAsset.confidentiality != null
        )
        .filter(
          sel.selInt != "All"
            ? (tempAsset) => tempAsset.integrity == sel.selInt
            : (tempAsset) => tempAsset.integrity != null
        )
        .filter(
          sel.selAva != "All"
            ? (tempAsset) => tempAsset.availability == sel.selAva
            : (tempAsset) => tempAsset.availability != null
        )
        .filter(
          sel.selRat != "All"
            ? (tempAsset) => tempAsset.rating == sel.selRat
            : (tempAsset) => tempAsset.rating != null
        )
    );
    console.log("clicked filter", sel);
  }

  return (
    <>
      {filterbox ? (
        <div>
          <div className="Filter-pop-up-background">
            <div className="Filter-fullbox">
              <div className="Filter-top">
                <div className="Filters-top-wordbox">
                  <span className="Filter-word">Filters</span>
                  <img
                    className="Filter-cancel"
                    onClick={closeFilter}
                    src={cancel_icon}
                    alt=""
                  />
                </div>
              </div>

              <div className="Filter-middle">
                <div className="filter_catergory_frame">
                  <span className="filter_label"> Asset Category</span>
                </div>

                <Dropdown>
                  <Dropdown.Toggle
                    className="filter_selected"
                    id="dropdown-basic"
                    variant="outline-light"
                  >
                    {sel.selAssetCat}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter_dropdown">
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selAssetCat: "All" }))
                      }
                    >
                      All
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selAssetCat: "Software" }))
                      }
                    >
                      Software
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({
                          ...prev,
                          selAssetCat: "Network & Data Centre",
                        }))
                      }
                    >
                      Network &amp; Data Centre
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({
                          ...prev,
                          selAssetCat: "Technical",
                        }))
                      }
                    >
                      Technical
                    </li>
                    {/* <Dropdown.Item href="#/action-3">Personnel</Dropdown.Item> */}
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selAssetCat: "Security" }))
                      }
                    >
                      Security
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selAssetCat: "Personal" }))
                      }
                    >
                      Personal
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({
                          ...prev,
                          selAssetCat: "Intangible",
                        }))
                      }
                    >
                      Intangible
                    </li>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="filter_catergory_frame">
                  <span className="filter_label"> Confidentiality</span>
                </div>

                <Dropdown className="filter_selection">
                  <Dropdown.Toggle
                    className="filter_selected"
                    id="dropdown-basic"
                    variant="outline-light"
                  >
                    {sel.selConfi}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter_dropdown">
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selConfi: "All" }))
                      }
                    >
                      All
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selConfi: "H" }))
                      }
                    >
                      High
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selConfi: "M" }))
                      }
                    >
                      Medium
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selConfi: "L" }))
                      }
                    >
                      Low
                    </li>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="filter_catergory_frame">
                  <span className="filter_label"> Integrity</span>
                </div>

                <Dropdown className="filter_selection">
                  <Dropdown.Toggle
                    className="filter_selected"
                    id="dropdown-basic"
                    variant="outline-light"
                  >
                    {sel.selInt}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter_dropdown">
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selInt: "All" }))
                      }
                    >
                      All
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selInt: "H" }))
                      }
                    >
                      High
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selInt: "M" }))
                      }
                    >
                      Medium
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selInt: "L" }))
                      }
                    >
                      Low
                    </li>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="filter_catergory_frame">
                  <span className="filter_label"> Availability</span>
                </div>

                <Dropdown className="filter_selection">
                  <Dropdown.Toggle
                    className="filter_selected"
                    id="dropdown-basic"
                    variant="outline-light"
                  >
                    {sel.selAva}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter_dropdown">
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selAva: "All" }))
                      }
                    >
                      All
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selAva: "H" }))
                      }
                    >
                      High
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selAva: "M" }))
                      }
                    >
                      Medium
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selAva: "L" }))
                      }
                    >
                      Low
                    </li>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="filter_catergory_frame">
                  <span className="filter_label"> Rating </span>
                </div>

                <Dropdown className="filter_selection">
                  <Dropdown.Toggle
                    className="filter_selected"
                    id="dropdown-basic"
                    variant="outline-light"
                  >
                    {sel.selRat}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter_dropdown">
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selRat: "All" }))
                      }
                    >
                      All
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selRat: "H" }))
                      }
                    >
                      High
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selRat: "M" }))
                      }
                    >
                      Medium
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selRat: "L" }))
                      }
                    >
                      Low
                    </li>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <button
                className="Button-Filter"
                onClick={() => {
                  afterFilter();
                  closeFilter();
                }}
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="asset-menu-buttons">
        <button className="Button-Icon-AddAsset-modal" onClick={onAddAsset}>
          {" "}
          Add Asset
        </button>
        <button className="Button-Icon-Filter-modal" onClick={startFilter}>
          {" "}
          <img src={filter_blue} alt="" /> Filter
        </button>
      </div>
      <div className="table-border-blue scrollable">
        <Table
          striped
          hover
          size="sm"
          class="table-items-tables-table--column-items"
        >
          <thead>
            <tr className="row-item-master-01 cr-button__text">
              <th>
                <img src={info_white} alt="" />
              </th>
              <th>IDs</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Confidentiality</th>
              <th>Integrity</th>
              <th>Availability</th>
              <th>Rating</th>
              <th>
                <img src={pen_white} alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {tempAssets.map((asset) => (
              <tr className="cr-text">
                <td>
                  <button
                    type="button"
                    className="button-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    {" "}
                    <img src={info_black} alt="" />
                  </button>
                  <Info />
                </td>
                <td>{asset.id}</td>
                <td>{asset.title}</td>
                <td>{asset.description}</td>

                <td>{asset.AssetCategory.name}</td>

                <td>{asset.confidentiality}</td>
                <td>{asset.integrity}</td>
                <td>{asset.availability}</td>
                <td>{asset.rating}</td>
               
               
                {(isAdmin === "Admin") && ( <td>  <button className="pen-button" onClick={onEditAsset}><img src={pen_black} alt =""/></button> </td> )}
                                  
             
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default DashboardDetails;
