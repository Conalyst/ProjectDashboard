import React, { useEffect, useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import data from "../data.json";
import info_black from "../images/icons/info_icon.png";
import filter_blue from "../images/icons/filter_blue.png";
import info_white from "../images/icons/outline_info_white.png";
import Filter from "./Filter";

import cancel_icon from "../images/icons/cancel_icon.png";

// import axios from "axios";
import { pullCompanyAssets } from "../services/companyAssetsService";
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { select } from "d3";

export const DashboardDetails = () => {
  const [assets, setAssets] = useState([]);
  const [tempAssets, setTempAssets] = useState(assets);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [filterbox, setFilterbox] = useState(false);
  const [sel, setSel] = useState({
    selAssetCat: "All",
    selConfi: "All",
    selInt: "All",
    selAva: "All",
    selRat: "All",
  });
  // --------- need to change the background color
  // --------- need to change the box round
  const style = {
    position: "absolute",
    width: 1000,
    height: 400,
    left: 327,
    top: 246,
    bgcolor: "background.paper",
    border: "2px solid #FFFFFF",
    borderRadius: 1,
    boxShadow: 24,
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("storedUser");

    const parsedUser = JSON.parse(storedUser);
    // console.log("parsedUser", parsedUser);

    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${parsedUser.accessToken}`;

    pullCompanyAssets(parsedUser.companyId).then((result) => {
      console.log("under dashboard details", result.data);
      setAssets(result.data);
      setTempAssets(result.data);
    });
  }, []);

  function startFilter() {
    setFilterbox(!filterbox);
    setTempAssets(assets);
  }

  function closeFilter() {
    setFilterbox(!filterbox);
  }

  // function handleSelect(item, selected) {
  //   console.log("handleSelect", item, selected);
  //   setSel((prev) => ({
  //     ...prev,
  //     item: selected,
  //   }));
  // }

  function afterFilter() {
    // if (sel.selAssetCat == "All") {
    //   setTempAssets(
    //     tempAssets.filter((tempAsset) => tempAsset.Asset.categoryId > 0)
    //   );
    // } else {
      setTempAssets(
        tempAssets
          .filter(sel.selAssetCat != "All" ? (tempAsset) => tempAsset.Asset.categoryId == Number(sel.selAssetCat): (tempAsset) => tempAsset.Asset.categoryId != null )
          .filter(sel.selConfi != "All" ? (tempAsset) => tempAsset.confidentiality == sel.selConfi :  (tempAsset) => tempAsset.confidentiality != null)
          .filter(sel.selInt != "All" ? (tempAsset) => tempAsset.integrity == sel.selInt :  (tempAsset) => tempAsset.integrity != null)
          .filter( sel.selAva != "All" ? (tempAsset) => tempAsset.availability == sel.selAva :  (tempAsset) =>tempAsset.availability != null)
          .filter( sel.selRat != "All" ? (tempAsset) => tempAsset.rating == sel.selRat :  (tempAsset) => tempAsset.rating  != null)
      );
      console.log("clicked filter", sel);
    // }
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

                  <Dropdown >
                    <Dropdown.Toggle
                      className="filter_selected"
                      id="dropdown-basic"
                      variant="outline-light"
                    >
                      {sel.selAssetCat}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="filter_dropdown" >
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selAssetCat:"All" }))
                        }
                      >
                        All
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selAssetCat: 1 }))
                        }
                      >
                        1
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selAssetCat: 2 }))
                        }
                      >
                        2
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selAssetCat: 3 }))
                        }
                      >
                        3
                      </li>
                      {/* <Dropdown.Item href="#/action-3">Personnel</Dropdown.Item> */}
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selAssetCat: 4 }))
                        }
                      >
                        4
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selAssetCat: 5 }))
                        }
                      >
                        5
                      </li>
                      <li
                        onClick={() =>
                          setSel((prev) => ({ ...prev, selAssetCat: 6 }))
                        }
                      >
                        6
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
                      <li onClick={() =>
                          setSel((prev) => ({ ...prev, selInt: "All" }))}>All</li>
                      <li onClick={() => setSel((prev) => ({ ...prev, selInt: "H" }))}>High</li>
                      <li onClick={() => setSel((prev) => ({ ...prev, selInt: "M" }))}>
                        Medium
                      </li>
                      <li onClick={() => setSel((prev) => ({ ...prev, selInt: "L" }))}>Low</li>
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
                      <li onClick={() => setSel((prev) => ({ ...prev, selAva: "All" }))}>All</li>
                      <li onClick={() => setSel((prev) => ({ ...prev, selAva: "H" }))}>High</li>
                      <li onClick={() => setSel((prev) => ({ ...prev, selAva: "M" }))}>
                        Medium
                      </li>
                      <li onClick={() => setSel((prev) => ({ ...prev, selAva: "L" }))}>Low</li>
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
                      <li onClick={() => setSel((prev) => ({ ...prev, selRat: "All" }))}>All</li>
                      <li onClick={() => setSel((prev) => ({ ...prev, selRat: "H" }))}>High</li>
                      <li onClick={() => setSel((prev) => ({ ...prev, selRat: "M" }))}>
                        Medium
                      </li>
                      <li onClick={() => setSel((prev) => ({ ...prev, selRat: "L" }))}>Low</li>
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
        <button className="Button-Icon-Manage"> Manage</button>

        <button className="Button-Icon-Filter" onClick={startFilter}>
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
            <tr className="row-item-master-01 cr-button__text ">
              <th>
                <img src={info_white} alt="" />
              </th>
              <th>IDs</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Confidentiality</th>
              <th>Integretity</th>
              <th>Availability</th>
              <th>Rating</th>
              <th>Datasource</th>
            </tr>
          </thead>
          <tbody>
            {tempAssets.map((asset) => (
              <tr className="cr-text ">
                <td>
                  <Button onClick={handleOpen}>
                    <img src={info_black} alt="" />
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    BackdropProps={{
                      style: { backgroundColor: "F1F1F1", opacity: 0.5 },
                    }}
                  >
                    <Box sx={style}>
                      {/* make a table with two columns - titles and that id assets */}
                      <Table
                        // striped
                        hover
                        size="sm"
                        // class="table-items-tables-table--column-items"
                      >
                        <thead>
                          <tr className="row-item-master-01 cr-button__text">
                            <th>Asset Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Confidentiality</th>
                            <th>Integretity</th>
                            <th>Availability</th>
                            <th>Rating</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="cr-text">
                            <td>{asset.assetId}</td>
                            <td>{asset.Asset.title}</td>
                            <td>{asset.Asset.description}</td>
                            <td>{asset.Asset.categoryId}</td>
                            <td>{asset.confidentiality}</td>
                            <td>{asset.integrity}</td>
                            <td>{asset.availability}</td>
                            <td>{asset.rating}</td>
                          </tr>
                        </tbody>
                      </Table>

                      {/* lower box that have the click and show more tables -- tina code */}

                      <div
                        className="accordion accordion-flush "
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingOne"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <table className="table detail-subtable">
                                {/* <thead> */}
                                <tr>
                                  <th>Risk Id</th>
                                  <th>Category</th>
                                  <th>Title</th>
                                  <th>Rating</th>
                                </tr>
                                <tr className="d-none">
                                  <th>R201, R205</th>
                                  <td> IT Operations Risk</td>
                                  <td>
                                    Risk of Ransonware Attack Compromising
                                  </td>
                                  <td>H</td>
                                </tr>
                                {/* </thead> */}
                                {/* className = "d-none" */}
                                {/* <tbody  >
                                
                              </tbody> */}
                              </table>
                            </button>
                          </h2>

                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <table className="table detail-subtable">
                                {/* <thead > */}
                                <tr>
                                  <th>Risk Id</th>
                                  <th>Category</th>
                                  <th>Title</th>
                                  <th>Rating</th>
                                </tr>
                                <tr>
                                  <th>R201, R205</th>
                                  <td> IT Operations Risk</td>
                                  <td>
                                    Risk of Ransonware Attack Compromising
                                  </td>
                                  <td>H</td>
                                </tr>
                                {/* </thead> */}
                                {/* className = "d-none" */}
                                {/* <tbody  >
                                
                              </tbody> */}
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item ">
                          <h2
                            className="accordion-header"
                            id="flush-headingTwo"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              Vulnerability
                            </button>
                          </h2>

                          <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              Placeholder content for this accordion, which is
                              intended to demonstrate the{" "}
                              <code>.accordion-flush</code> class. This is the
                              second item's accordion body. Let's imagine this
                              being filled with some actual content.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingThree"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              Threat
                            </button>
                          </h2>

                          <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              Placeholder content for this accordion, which is
                              intended to demonstrate the{" "}
                              <code>.accordion-flush</code> class. This is the
                              third item's accordion body. Nothing more exciting
                              happening here in terms of content, but just
                              filling up the space to make it look, at least at
                              first glance, a bit more representative of how
                              this would look in a real-world application.
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </td>

                <td>{asset.assetId}</td>
                <td>{asset.Asset.title}</td>
                <td>{asset.Asset.description}</td>
                <td>{asset.Asset.categoryId}</td>
                <td>{asset.confidentiality}</td>
                <td>{asset.integrity}</td>
                <td>{asset.availability}</td>
                <td>{asset.rating}</td>
                <td>{asset.datasource}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default DashboardDetails;
