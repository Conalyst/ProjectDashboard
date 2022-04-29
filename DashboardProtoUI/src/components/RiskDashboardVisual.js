import React, { useState } from "react";
import * as crossfilter from "crossfilter2";
import { csv, timeFormat, timeParse, timeMonth, format } from "d3";
import { Chart } from "react-google-charts";
import risk_data from "./../risk_data.json";

export const RiskDashboardVisual = () => {
  const pie_data = [
    ["Risks", "3"],
    ["Operational", 11],
    ["Technical", 11],
    ["Governance", 12],
  ];

  const options = {
    pieHole: 0.6,
    is3D: false,
    colors: ["#ed723c", "#ffb244", "#f3d381"],
  };

  //columns for left to right
  const grid = [
    ["VH", "H", "M", "L", "VL"],
    ["VH", "H", "M", "L", "L"],
    ["VH", "H", "M", "M", "M"],
    ["VH", "H", "H", "H", "H"],
    ["VH", "VH", "VH", "VH", "VH"],
  ];

  const gridRankingColors = {
    VH: "#de5656",
    H: "#f8a20e",
    M: "#f6be5b",
    L: "#39e9ae",
    VL: "#36bf91",
  };

  const test = risk_data[0].likelihood;

  const numberOfOccurences = (x, y) => {
    return `${x} : ${y}`;
  };

  function position(riskObject) {
    const levels = ["L", "X", "M", "X", "H"];
    let x = levels.indexOf(riskObject.likelihood);
    let y = 4 - levels.indexOf(riskObject.impact);
    return { x: x, y: y };
  }

  let data = [];

  const matrix = (data) => {
    grid.forEach((col, xIndex) => {
      data.push([]);
    });
    data.forEach((row, xIndex) => {
      let line = grid[xIndex].map((_, index) => {
        let coord = { x: xIndex, y: index };
        let ids = [];
        risk_data.forEach((risk) => {
          if (coord.x == position(risk).x && coord.y == position(risk).y) {
            ids.push(risk.id);
          }
        });
        return { coord: coord, corresponding_ids: ids };
      });
      line.forEach((val) => {
        row.push(val);
      });
    });
    return data;
  };

  matrix(data);

  const [selectedGroup, setSelectedGroup] = useState([]);
  const [risk_list_opacity, set_risk_list_opacity] = useState(0);

  return (
    <>
      <div class="asset-rating">
        <p>Risks Ratings</p>
        <p className="orange-total">Total<br />82</p>
        <p>High<br />20</p>
        <p>Medium<br />15</p>
        <p>Low<br />
          42</p>
      </div>
      <div className="row g-2 visual-rating-risk">
        <div className=" col-4">
        {selectedGroup.length > 0 && 
          <div style={{ opacity: risk_list_opacity,backgroundColor: "white",
                borderRadius: 6,
                position: "absolute",
                bottom: 20,
                right: 20,
                width: 460,
                zIndex: 1,
                padding: 26,
                boxShadow: "2px 8px 35px", }}>
            <h6>Risks:</h6>
            <ol>
              {risk_data.map((risk) => {
                if (selectedGroup.indexOf(risk.id) > -1) {
                  return <li>{risk.title}</li>;
                }
              })}
            </ol>
          </div>
        }
          
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {grid.map((col, xIndex) => {
              return (
                <div>
                  {col.map((row, yIndex) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 58,
                        height: 58,
                        marginBottom: 3,
                        marginLeft: 3,
                        backgroundColor: gridRankingColors[row],
                      }}
                    >
                      {data[xIndex][yIndex].corresponding_ids.length > 0 && <div
                        onMouseOver={() => {
                          setSelectedGroup(
                            data[xIndex][yIndex].corresponding_ids.map((_) => _)
                          );
                          set_risk_list_opacity(1)
                        }}
                        onMouseLeave={() => {
                          set_risk_list_opacity(0)
                        }}
                        style={{
                          padding: 10,
                          width: "80%",
                          height: "80%",
                          border: "2px solid",
                          borderRadius: "50%",
                          textAlign: "center",
                        }}
                      >
                        {data[xIndex][yIndex].corresponding_ids.length}
                      </div>}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-4">
          <div className="Overall-Rating-threat">Impact</div>
          <div className="Group-1359">
            <div className="V-T-Color">
              <div className="Dark-Blue-Color">
                <div className="Light-Blue-Color">
                  <div className="Grey-Color"></div>
                </div>
              </div>
              <span className="span-H">H</span>
              <span className="span-M">M</span>
              <span className="span-L">L</span>
            </div>
          </div>
          <div className="Overall-Rating-threat">Likelihood</div>
          <div className="Group-1359">
            <div className="V-T-Color">
              <div className="Dark-Blue-Color">
                <div className="Light-Blue-Color">
                  <div className="Grey-Color"></div>
                </div>
              </div>
              <span className="span-H">H</span>
              <span className="span-M">M</span>
              <span className="span-L">L</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="Group-300006272">
            <span className="High-Value-Assets-Distributed-per-Risk-Category">
              High Value Assets Distributed per Risk Category
            </span>
          </div>
          <Chart
            chartType="PieChart"
            width="100%"
            height="100%"
            data={pie_data}
            options={options}
          />
        </div>
      </div>
    </>
  );
};
export default RiskDashboardVisual;
