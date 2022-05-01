import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { getStaticVulnerability } from "../services/vulnerabilityService";
import HSBar from "react-horizontal-stacked-bar-chart";

export const tdata = [
    ["Group", "H", "M", "L"],
    ["Technical", 3, 5, 9],
    ["Operational", 3, 10, 8],
    ["Personnel", 2, 7, 5]
  ];
  
export const options = {
    chartArea: { width: "75%" },
    colors: ["#09375f", "#126dba", "#72b7f2"],
    hAxis: {},
    vAxis: {
        minValue: 0,
        ticks: [5, 10]
    },
    bar: {
        groupWidth: 64
    }
};

export const VulDashboardVisual = () => {

    const [data, setData] = useState([]) 
    const [barData, setBarData] = useState([]);
    const map = {'0': 0, '1': 10, '2': 20, '3': 30, '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 90}

    useEffect(() => {
        console.log("in detail")
        const storedUser = localStorage.getItem("storedUser");   
        const parsedUser = JSON.parse(storedUser);
       
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getStaticVulnerability()
            .then((res) => {
                const data = {
                    totalVulnerabilities: res.static.numberVulnerability[0].total_Vulnerability,
                    highVulnerabilities: res.static.highVulnerability[0].high_Vulnerability,
                    mediumVulnerabilities: res.static.mediumVulnerability[0].mediun_Vulnerability,
                    lowVulnerabilities: res.static.lowVulnerability[0].low_Vulnerability,
      
                    highVulnerabilityImpact: map[res.visual.highVulnerabilityImpact[0].high_Vulnerability],
                    mediumVulnerabilityImpact: map[res.visual.mediumVulnerabilityImpact[0].mediun_Vulnerability],
                    lowVulnerabilityImpact: map[res.visual.lowVulnerabilityImpact[0].low_Vulnerability],
      
                    highVulnerabilityLikelihood: map[res.visual.highVulnerabilityLikelihood[0].high_Vulnerability],
                    mediumVulnerabilityLikelihood: map[res.visual.mediumVulnerabilityLikelihood[0].mediun_Vulnerability],
                    lowVulnerabilityLikelihood: map[res.visual.lowVulnerabilityLikelihood[0].low_Vulnerability],
                }
                setData(data)
               
            })
              .catch((err) => {
                console.log("getAllVulnerabilities > err=", err);
               
                reject("Request error!");
              });
          } catch (error) {
            console.error("getAllVulnerabilities error!==", error);
            reject("getAllVulnerabilities error!");
          }
        });
      }, []);

      useEffect(() => {
        console.log("data@@@@@@@@@@", data)
        // console.log("data....", data.highAssetConfidentiality, data.mediumAssetConfidentiality, data.lowAssetConfidentiality)
      }, [data])

    return (
    <>
        <div class="asset-rating">
            <p>Vulnerability Ratings</p>
            <p className="orange-total">Total<br/>{data.totalVulnerabilities}</p>
            <p>High<br/>{data.highVulnerabilities}</p>
            <p>Medium<br/>{data.mediumVulnerabilities}</p>
            <p>Low<br/>{data.lowVulnerabilities}</p>
        </div>
        <table className="visual-rating">
            <tr>
                <td className="stack-bars-summary">
                    <div className="stack-bar-h">
                        Impact
                        <div className="V-T-Color">
                        <HSBar
                     showTextDown
                     id="hsbarExample"
                         data={[
                            { value: data.highVulnerabilityImpact , description: "H", color: "#09375f" },
                            { value: data.mediumVulnerabilityImpact , description: "M", color: "#126dba" },
                            { value: data.lowVulnerabilityImpact , description: "L", color:"#72b7f2" }
                            ]}
                        />
                        </div>
                    </div>
                    <div className="stack-bar-h">
                        Likelihood
                        <div className="V-T-Color">
                        <HSBar
                     showTextDown
                     id="hsbarExample"
                         data={[
                            { value: data.highVulnerabilityLikelihood , description: "H", color: "#09375f" },
                            { value: data.mediumVulnerabilityLikelihood , description: "M", color: "#126dba" },
                            { value: data.lowVulnerabilityLikelihood , description: "L", color:"#72b7f2" }
                            ]}
                        />
                        </div>
                    </div>
                </td>
                <td className="bar-charts-summary">
                    <span>All Categories</span><br/>
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="300px"
                        data={tdata}
                        options={options}
                    />
                </td>
            </tr>
        </table>
    </>
    );
};
export default VulDashboardVisual;