import React,{useEffect,useState} from "react";
import * as crossfilter from "crossfilter2";
import Chart from "react-google-charts";
import SummaryBarChart from './db-visuals/SummaryBarChart';
import SummaryStackedChart from "./db-visuals/SummaryStackedChart";
import { assetData } from "./db-visuals/visuals-data";
import { getStaticAssets, getStatsForBarChart } from "../services/assetsService";
import HSBar from "react-horizontal-stacked-bar-chart";

// export const data = [
//     ["Group", "H", "M", "L"],
//     ["Data", 15, 43, 25],
//     ["Network", 30, 24, 12],
//     ["Personnel", 21, 32, 15],
//     ["Software", 10, 43, 30],
//     ["Intangible", 41, 30, 19]
//   ];
  
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


export const DashboardVisual = () => {

    const [data, setData] = useState([]) 
    const [barData, setBarData] = useState([]);
    const map = {'0': 1, '1': 10, '2': 20, '3': 30, '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 90}

    useEffect(() => {
        console.log("in detail")
        const storedUser = localStorage.getItem("storedUser");   
        const parsedUser = JSON.parse(storedUser);
       
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getStaticAssets()
            .then((res) => {
                const data = {
                    totalAssets: res.static.numberAsset[0].total_Asset,
                    highAssets: res.static.highAsset[0].high_Asset,
                    mediumAssets: res.static.mediumAsset[0].mediun_Asset,
                    lowAssets: res.static.lowAsset[0].low_Asset,
                    highAssetAvailability: map[res.visual.highAssetAvailability[0].high_Asset],
                    highAssetConfidentiality: map[res.visual.highAssetConfidentiality[0].high_Asset],
                    highAssetIntegrity: map[res.visual.highAssetIntegrity[0].high_Asset],
      
                    mediumAssetAvailability: map[res.visual.mediumAssetAvailability[0].mediun_Asset],
                    mediumAssetConfidentiality: map[res.visual.mediumAssetConfidentiality[0].mediun_Asset],
                    mediumAssetIntegrity: map[res.visual.mediumAssetIntegrity[0].mediun_Asset],
      
                    lowAssetAvailability: map[res.visual.lowAssetAvailability[0].low_Asset],
                    lowAssetConfidentiality: map[res.visual.lowAssetConfidentiality[0].low_Asset],
                    lowAssetIntegrity: map[res.visual.lowAssetIntegrity[0].low_Asset],
                }
                // console.log("Tempdata@@@@@@", data)
                setData(data)
            })
              .catch((err) => {
                console.log("getAllAssets > err=", err);
               
                reject("Request error!");
              });
          } catch (error) {
            console.error("getAllAssets error!==", error);
            reject("getAllAssets error!");
          } 
        });
        
      }, []);

      useEffect(() => {
        console.log("data@@@@@@@@@@", data)
        // console.log("data....", data.highAssetConfidentiality, data.mediumAssetConfidentiality, data.lowAssetConfidentiality)
      }, [data])

      useEffect(() => {
       
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getStatsForBarChart() 
            .then((res) => {
                const result = [];
                result.push(["Group", "H", "M", "L"])
                for(let data of res){
                    result.push([data.group, data.H, data.M, data.L])
                }

                setBarData(result)         

            })
              .catch((err) => {
                console.log("getAllAssets > err=", err);
               
                reject("Request error!");
              });
          } catch (error) {
            console.error("getAllAssets error!==", error);
            reject("getAllAssets error!");
          }
        });
        
      }, []);

      

    return (
    <>
        <div class="asset-rating">
            <p>Asset Ratings</p>
            <p className="orange-total">Total<br/>{data.totalAssets}</p>
            <p>High<br/>{data.highAssets}</p>
            <p>Medium<br/>{data.mediumAssets}</p>
            <p>Low<br/>{data.lowAssets}</p>
            
        </div>
            <table className="visual-rating">
                 <tr>


                 <td className="stack-bars-summary">
                    <div className="stack-bar-h">
                    Confidentiality
                        <div className="V-T-Color">
                        <HSBar
                     showTextDown
                     id="hsbarExample"
                         data={[
                            { value: data.highAssetConfidentiality , description: "H", color: "#09375f" },
                            { value: data.mediumAssetConfidentiality , description: "M", color: "#126dba" },
                            { value: data.lowAssetConfidentiality , description: "L", color:"#72b7f2" }
                            ]}
                        />
                        </div>
                    </div>
                    <div className="stack-bar-h">
                    Integrity
                        <div className="V-T-Color">
                        <HSBar
                        showTextDown
                            id="hsbarExample"
                        data={[
                            { value: data.highAssetIntegrity, description: "H", color: "#09375f" },
                            { value: data.mediumAssetIntegrity, description: "M", color: "#126dba" },
                            { value: data.lowAssetIntegrity, description: "L", color:"#72b7f2" }
                             ]}
                        />
                        </div>
                    </div>
                    <div className="stack-bar-h">
                    Availability
                        <div className="V-T-Color">
                        <HSBar
                        showTextDown         
                            id="hsbarExample"
                        data={[
                            { value: data.highAssetAvailability, description: "H", color: "#09375f" },
                            { value: data.mediumAssetAvailability, description: "M", color: "#126dba" },
                            { value: data.lowAssetAvailability, description: "L", color:"#72b7f2" }
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
                        data={barData}
                        options={options}
                    />

                </td>
                </tr>
            </table>
        
            
    </>
    );
};
export default DashboardVisual;