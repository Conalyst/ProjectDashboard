import React, { useState } from "react";
import * as crossfilter from "crossfilter2";
import { csv, timeFormat, timeParse, timeMonth, format } from "d3";
import { Chart } from "react-google-charts";
import risk_data from "./../risk_data.json";
import HeatMap from "./HeatMap"
import HSBar from "react-horizontal-stacked-bar-chart";

export const RiskDashboardVisual = () => {
  const pie_data = [
    ["Risks", "3"],
    ["Operational", 11],
    ["Technical", 11],
    ["Governance", 12],
  ];

  const options = {
    width:480,
    pieHole: 0.5,
    is3D: false,
    colors: ["#ed723c", "#ffb244", "#f3d381"],
  };


  return (
    <>
      <div className="asset-rating">
        <p>Risks Ratings</p>
        <p className="orange-total">Total<br />82</p>
        <p>High<br />20</p>
        <p>Medium<br />15</p>
        <p>Low<br />
          42</p>
      </div>
      <div className="row g-2 visual-rating-risk">
        <div className=" col-4">
          <HeatMap risk_data={risk_data}/>
        </div>
        <div className="col-4">
          <div className="Overall-Rating-threat">Impact</div>
          <div className="Group-1359">
            <div className="V-T-Color">
            <HSBar
          showTextDown       
          id="hsbarExample"
          data={[
            { value: 1, description: "H", color: "#09375f" },
            { value: 5, description: "M", color: "#126dba" },
            { value: 2, description: "L", color:"#72b7f2" }
          ]}
        />
             {/* <div className="Dark-Blue-Color">
                <div className="Light-Blue-Color">
                  <div className="Grey-Color"></div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="Group-1359">
                    <div className="V-T-Color">
                        <div className="Dark-Blue-Color">
                        <div className="Light-Blue-Color">
                        <div className="Grey-Color">
                        </div></div></div>
                        <div className="label-span-s">
                            <span className="value-span-s span-H-s">H</span>
                            <span className="value-span-s span-M-s">M</span>
                            <span className="value-span-s span-L-s">L</span>
                        </div>
                    </div>
                </div>   
            <div className="Overall-Rating-threat">
                    Likelihood
                </div>
                <div className="Group-1359">
                    <div className="V-T-Color">
                        <div className="Dark-Blue-Color">
                        <div className="Light-Blue-Color">
                        <div className="Grey-Color">
                        </div></div></div>
                        <div className="label-span-s">
                            <span className="value-span-s span-H-s">H</span>
                            <span className="value-span-s span-M-s">M</span>
                            <span className="value-span-s span-L-s">L</span>
                        </div>
                    </div>
                </div>
=======
                <div className="Group-1359"><div className="V-T-Color">
                <HSBar
=======
              </div>
              <span className="span-H">H</span>
              <span className="span-M">M</span>
        <span className="span-L">L</span>*/}
            </div>
          </div>
          <div className="Overall-Rating-threat">Likelihood</div>
          <div className="Group-1359">
            <div className="V-T-Color">
            <HSBar
          showTextDown       
          id="hsbarExample"
          data={[
            { value: 8, description: "H", color: "#09375f" },
            { value: 5, description: "M", color: "#126dba" },
            { value: 22, description: "L", color:"#72b7f2" }
          ]}
        />
              {/*<div className="Dark-Blue-Color">
                <div className="Light-Blue-Color">
                  <div className="Grey-Color"></div>
                </div>
<<<<<<< HEAD
                <div className="Group-1359"><div className="V-T-Color">
                <HSBar
          showTextDown       
          id="hsbarExample"
          data={[
            { value: 8, description: "H", color: "#09375f" },
            { value: 1, description: "M", color: "#126dba" },
            { value: 2, description: "L", color:"#72b7f2" }
          ]}
        />
                 {/*<div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                    <span className="span-H">
                         H
                    </span>
                    <span className="span-M">
                         M
                    </span>
                    <span className="span-L">
                         L
                    </span>*/}
                     </div>
                </div>
           </div>
            <div className="col-4">
                <div className="Group-300006272">
                <span className="High-Value-Assets-Distributed-per-Risk-Category">
  High Value Assets Distributed 
per Risk Category
</span>
                </div>
                
          <Chart
            chartType="PieChart"
            // width="100%"
            // height="100%"
            data={pie_data}
            options={options}
          />
        </div>
      </div>
    </>
  );
};
export default RiskDashboardVisual;