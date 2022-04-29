import React, { useEffect, useState } from "react";
import { Table, Dropdown, InputGroup } from "react-bootstrap";
//import thr_data from "../thr_data.json";
import info_black from "../images/icons/info_icon.png";
import filter_blue from "../images/icons/filter_blue.png";
import info_white from "../images/icons/outline_info_white.png";
import { ADDTHREAT, EDITTHREAT } from "../navigation/CONSTANTS";
import { useHistory } from "react-router-dom";
import pen_white from "../images/icons/pen_white.png";
import pen_black from "../images/icons/pen_black.png";
import cancel_icon from "../images/icons/cancel_icon.png";
import Info from "./Info";
//import ManageButton from "./ManageButton";
import { getAllThreats } from "../services/threatService";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { threats as threatsAtom } from "../recoil/atom";

export const ThreatsDashboardDetails = () => {
  const [threats, setThreats] = useRecoilState(threatsAtom);

  const [tempThreats, setTempThreats] = useState(threats);
  const [filterbox, setFilterbox] = useState(false);
  const [sel, setSel] = useState({
    selThreatCat: "All",
    selThreatAgent: "All",
    selImpact: "All",
    selLikeli: "All",
    selRate: "All",
  });

  const [agentArray, setAgentArray] = useState([]);

  const [assets, setAssets] = useState([]);
  const storedUser = localStorage.getItem("storedUser");
  const parsedUser = JSON.parse(storedUser);
  const isAdmin = parsedUser.role;

  const history = useHistory();
  const onAddThreat = () => {
    history.push({
      pathname: ADDTHREAT,
    });
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("storedUser");
    const parsedUser = JSON.parse(storedUser);
    console.log("parsed user dashboard", parsedUser);
    getAllThreats().then((result) => {
      console.log("Threats", result);
      setThreats(result);
      setTempThreats(result);
    });
  }, []);

  const onEditThreat = (threat) => {
    setThreats(threat);
    history.push({
      pathname: EDITTHREAT,
    });
  };

  function startFilter() {
    setFilterbox(!filterbox);
    setTempThreats(threats);
    reduceDupFilterAgent();
  }

  function closeFilter() {
    setFilterbox(!filterbox);
  }

  function afterFilter() {
    setTempThreats(
      tempThreats
        .filter(
          sel.selThreatCat != "All"
            ? (tempThreats) => tempThreats.category == sel.selThreatCat
            : (tempThreats) => tempThreats.category != null
        )
        .filter(
          sel.selThreatAgent != "All"
            ? (tempThreats) =>
                tempThreats.agent.toLowerCase().includes(sel.selThreatAgent)
            : (tempThreats) => tempThreats.agent != null
        )
        .filter(
          sel.selImpact != "All"
            ? (tempThreats) => tempThreats.impact == sel.selImpact
            : (tempThreats) => tempThreats.impact != null
        )
        .filter(
          sel.selLikeli != "All"
            ? (tempThreats) => tempThreats.likelihood == sel.selLikeli
            : (tempThreats) => tempThreats.likelihood != null
        )
        .filter(
          sel.selRate != "All"
            ? (tempThreats) => tempThreats.rating == sel.selRate
            : (tempThreats) => tempThreats.rating != null
        )
    );
    console.log("clicked filter", sel);
  }

  function reduceDupFilterAgent() {
    // create an array of the threat agent first. then reduce
    let threatsAgentList = [];
    for (let i = 0; i < threats.length; i++) {
      let agentName = threats[i].agent;
      threatsAgentList.push(agentName.toUpperCase().trim());
    }
    setAgentArray(
      threatsAgentList.filter(
        (item, index) => threatsAgentList.indexOf(item) === index
      )
    );
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
                  <span className="filter_label"> Threat Category</span>
                </div>

                <Dropdown>
                  <Dropdown.Toggle
                    className="filter_selected"
                    id="dropdown-basic"
                    variant="outline-light"
                  >
                    {sel.selThreatCat}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter_dropdown">
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selThreatCat: "All" }))
                      }
                    >
                      All
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({
                          ...prev,
                          selThreatCat: "Accidental",
                        }))
                      }
                    >
                      Accidental
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({
                          ...prev,
                          selThreatCat: "Deliberate",
                        }))
                      }
                    >
                      Deliberate
                    </li>
                    <li
                      onClick={() =>
                        setSel((prev) => ({
                          ...prev,
                          selThreatCat: "Natural Hazard",
                        }))
                      }
                    >
                      Natural Hazard
                    </li>
                  </Dropdown.Menu>
                </Dropdown>

                {/* =========================================== filter the agent -- version 1 with the interactive type and show */}
                {/* <div className="filter_catergory_frame">
                <span className="filter_label"> Threat Agent</span>
              </div>

               <p>
                Type to filter the Threat Agent:
                <input id="filter"
                  name="filter"
                  type="text"
                  value={filterWord}
                  onChange={event => setFilterWord(event.target.value)}
                />
              </p>
              <ul>
              {threats.filter(f => f.agent.includes(filterWord) || filterWord === '')
                    .map(f => <li key={f}>{f.agent}</li>)}
              </ul> */}

                {/* =========================================== filter the agent -- version 2 with the dropdown */}

                <div className="filter_catergory_frame">
                  <span className="filter_label"> Threat Agent</span>
                </div>

                <Dropdown className="filter_selection">
                  <Dropdown.Toggle
                    className="filter_selected"
                    id="dropdown-basic"
                    variant="outline-light"
                  >
                    {sel.selThreatAgent}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter_dropdown">
                    <li
                      onClick={() =>
                        setSel((prev) => ({ ...prev, selThreatAgent: "All" }))
                      }
                    >
                      All
                    </li>

                    {agentArray.map((f) => (
                      // <li onClick={() => setSel((prev) => ({ ...prev, selThreatAgent:f.agent}))}>
                      <li
                        onClick={() =>
                          setSel((prev) => ({
                            ...prev,
                            selThreatAgent: f.toLowerCase(),
                          }))
                        }
                      >
                        {f.toLowerCase()}
                      </li>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                {/*  =========================================== filter the agent  */}

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
          <button className="Button-Icon-Manage-Threat" onClick={onAddThreat}>
            {" "}
            Add Threat
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
              <th>Agent</th>
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
            {tempThreats.map((threat) => (
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
                <td>{threat.id}</td>
                <td>{threat.title}</td>
                <td>{threat.description}</td>
                <td>{threat.category}</td>
                <td>{threat.agent}</td>
                <td>{threat.impact}</td>
                <td>{threat.likelihood}</td>
                <td>{threat.rating}</td>

                {isAdmin === "Admin" && (
                  <td>
                    {" "}
                    <button
                      className="pen-button"
                      onClick={() => onEditThreat(threat)}
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
export default ThreatsDashboardDetails;
