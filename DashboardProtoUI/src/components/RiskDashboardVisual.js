import React,{useEffect,useState} from "react";
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'
import { getStaticRisks } from "../services/riskService";
import risk_data from "./../risk_data.json";
 import HeatMap from "./HeatMap"
 import HSBar from "react-horizontal-stacked-bar-chart";
import { Chart } from "react-google-charts";

export const pie_data = [
  ["Group", "H", "M", "L"],
  ["Technical", 3, 5, 9],
  ["Operational", 3, 10, 8],
  ["Personnel", 2, 7, 5]
];


export const options = {
  chartArea: { width: "75%" },
  colors: ["#09375f", "#126dba", "#72b7f2"],
  hAxis: {
  },
  vAxis: {
      minValue: 0
  },
  bar: {
      groupWidth: 64
  }
};

export const RiskDashboardVisual = () => {
    const [totalRisks, setTotalRisks] = useState(null);
    const [highRisks, setHighRisks] = useState(null);
    const [mediumRisks, setMediumRisks] = useState(null);
    const [lowRisks, setLowRisks] = useState(null);
    useEffect(() => {
        console.log("in detail")
        const storedUser = localStorage.getItem("storedUser");   
        const parsedUser = JSON.parse(storedUser);
       
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getStaticRisks()
            .then((res) => {
              console.log("res in RIsk@@@@@@@", res)
              setTotalRisks(res.static.numberRisk[0].total_Risk);
              setHighRisks(res.static.highRisk[0].high_Risk)
              setMediumRisks(res.static.mediumRisk[0].mediun_Risk)
              setLowRisks(res.static.lowRisk[0].low_Risk)
               
            })
              .catch((err) => {
                console.log("getAllRisks > err=", err);
               
                reject("Request error!");
              });
          } catch (error) {
            console.error("getAllRisks error!==", error);
            reject("getAllRisks error!");
          }
        });
      }, []);

        const pie_data = [
          ["Risks", "3"],
          ["Operational", 1],
          ["Technical", 1],
          ["Governance", 1],
        ];
      
        const options = {
          width:480,
          pieHole: 0.5,
          is3D: false,
          colors: ["#ed723c", "#ffb244", "#f3d381"],
        };
      
    return (
    <>
        <div class="asset-rating">
            <p>Risks Ratings</p>
            <p className="orange-total">Total<br/>{totalRisks}</p>
            <p>High<br/>{highRisks}</p>
            <p>Medium<br/>{mediumRisks}</p>
            <p>Low<br/>{lowRisks}</p>
        </div>
        <div className="row g-2 visual-rating-risk">
            <div className=" col-4">
           
            <HeatMap risk_data={risk_data}/>
               </div>
               
            <div className="col-4">
                <div className="Overall-Rating-threat">
                    Impact
                </div>
                <div className="Group-1359"><div className="V-T-Color">
                <HSBar
          showTextDown       
          id="hsbarExample"
          data={[
            { value: 8, description: "H", color: "#09375f" },
            { value: 5, description: "M", color: "#126dba" },
            { value: 22, description: "L", color:"#72b7f2" }
          ]}
        />
    </div>
            </div>   
            <div className="Overall-Rating-threat">
                    Likelihood
                </div>
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
