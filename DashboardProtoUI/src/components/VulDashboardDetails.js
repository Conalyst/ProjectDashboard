import React, { useEffect, useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import vul_data from "../vul_data.json";
import info_black from "../images/icons/info_icon.png";
import filter_blue from "../images/icons/filter_blue.png";
import info_white from "../images/icons/outline_info_white.png";
import pen_white from "../images/icons/pen_white.png";
import pen_black from "../images/icons/pen_black.png";
import cancel_icon from "../images/icons/cancel_icon.png";
import { ADDVUL, EDITVUL } from "../navigation/CONSTANTS";
import { useHistory } from "react-router-dom";
import Info from "./Info";
//import ManageButton from "./ManageButton";
import { getAllVulnerabilities } from "../services/vulnerabilityService";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { vulnerabilities as vulnerabilitiesAtom } from "../recoil/atom";

export const VulDashboardDetails = () => {
  const [vulnerabilities, setVulnerabilities] =
    useRecoilState(vulnerabilitiesAtom);

  const [tempVuls, setTempVuls] = useState(vulnerabilities);
  const [filterbox, setFilterbox] = useState(false);
  const [sel, setSel] = useState({
    selVulCat: "All",
    selImpact: "All",
    selLikeli: "All",
    selRate: "All",
  });

  const storedUser = localStorage.getItem("storedUser");
  const parsedUser = JSON.parse(storedUser);
  const isAdmin = parsedUser.role;
  const history = useHistory();
  const onAddVul = () => {
    history.push({
      pathname: ADDVUL,
    });
  };

  const onEditVul = (vulnerability) => {
    setVulnerabilities(vulnerability);
    history.push({
      pathname: EDITVUL,
    });
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("storedUser");
    const parsedUser = JSON.parse(storedUser);
    console.log("parsed user dashboard", parsedUser);
    getAllVulnerabilities().then((result) => {
      console.log("Vulns", result);
      setVulnerabilities(result);
      setTempVuls(result);
    });
  }, []);

  function startFilter() {
    setFilterbox(!filterbox);
    setTempVuls(vulnerabilities);
  }

  function closeFilter() {
    setFilterbox(!filterbox);
  }

  function afterFilter() {
    setTempVuls(
      tempVuls
        .filter(
          sel.selVulCat != "All"
            ? (tempVuls) => tempVuls.category == sel.selVulCat
            : (tempVuls) => tempVuls.category != null
        )
        .filter(
          sel.selImpact != "All"
            ? (tempVuls) => tempVuls.impact == sel.selImpact
            : (tempVuls) => tempVuls.impact != null
        )
        .filter(
          sel.selLikeli != "All"
            ? (tempVuls) => tempVuls.likelihood == sel.selLikeli
            : (tempVuls) => tempVuls.likelihood != null
        )
        .filter(
          sel.selRate != "All"
            ? (tempVuls) => tempVuls.rating == sel.selRate
            : (tempVuls) => tempVuls.rating != null
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
                  <span className="filter_label"> Vulnerability Category</span>
                </div>

                <Dropdown>
                  <Dropdown.Toggle
                    className="filter_selected"
                    id="dropdown-basic"
                    variant="outline-light"
                  >
                    {sel.selVulCat}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter_dropdown">
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selVulCat: "All" }))
                      }
                    >
                      All
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({
                          ...prev,
                          selVulCat: "Operational",
                        }))
                      }
                    >
                      Operational
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({
                          ...prev,
                          selVulCat: "Personnel",
                        }))
                      }
                    >
                      Personnel
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({
                          ...prev,
                          selVulCat: "Technical",
                        }))
                      }
                    >
                      Technical
                    </li>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="filter_catergory_frame">
                  <span className="filter_label"> Impact</span>
                </div>

                <Dropdown className="filter_selection">
                  <Dropdown.Toggle
                    className="filter_selected"
                    id="dropdown-basic"
                    variant="outline-light"
                  >
                    {sel.selImpact}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter_dropdown">
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selImpact: "All" }))
                      }
                    >
                      All
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selImpact: "H" }))
                      }
                    >
                      High
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selImpact: "M" }))
                      }
                    >
                      Medium
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selImpact: "L" }))
                      }
                    >
                      Low
                    </li>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="filter_catergory_frame">
                  <span className="filter_label"> Likelihood </span>
                </div>

                <Dropdown className="filter_selection">
                  <Dropdown.Toggle
                    className="filter_selected"
                    id="dropdown-basic"
                    variant="outline-light"
                  >
                    {sel.selLikeli}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter_dropdown">
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selLikeli: "All" }))
                      }
                    >
                      All
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selLikeli: "H" }))
                      }
                    >
                      High
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selLikeli: "M" }))
                      }
                    >
                      Medium
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selLikeli: "L" }))
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
                    {sel.selRate}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter_dropdown">
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selRate: "All" }))
                      }
                    >
                      All
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selRate: "H" }))
                      }
                    >
                      High
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selRate: "M" }))
                      }
                    >
                      Medium
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selRate: "L" }))
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
        {isAdmin === "Admin" && (
          <button className="Button-Icon-Manage" onClick={onAddVul}>
            Add Vul
          </button>
        )}
        <button className="Button-Icon-Filter" onClick={startFilter}>
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
              <th>Impact</th>
              <th>Likelihood</th>
              <th>Rating</th>
              {isAdmin === "Admin" && (
                <th>
                  <img src={pen_white} alt="" />
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {tempVuls.map((vulnerability) => (
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
                <td>{vulnerability.id}</td>
                <td>{vulnerability.title}</td>
                <td>{vulnerability.description}</td>
                <td>{vulnerability.category}</td>
                <td>{vulnerability.impact}</td>
                <td>{vulnerability.likelihood}</td>
                <td>{vulnerability.rating}</td>

                {isAdmin === "Admin" && (
                  <td>
                    {" "}
                    <button
                      className="pen-button"
                      onClick={() => onEditVul(vulnerability)}
                    >
                      <img src={pen_black} alt="" />
                    </button>{" "}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default VulDashboardDetails;
