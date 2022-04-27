import React,{useEffect,useState} from "react";
import Chart from "react-google-charts";
import * as crossfilter from "crossfilter2";
import SummaryBarChart from './db-visuals/SummaryBarChart';
import SummaryStackedChart from "./db-visuals/SummaryStackedChart";
import { assetData, data } from "./db-visuals/visuals-data";
import { getStaticAssets, getStatsForBarChart } from "../services/assetsService";

export const data = [
    ["Group", "H", "M", "L"],
    ["Data", 15, 43, 25],
    ["Network", 30, 24, 12],
    ["Personnel", 21, 32, 15],
    ["Software", 10, 43, 30],
    ["Intangible", 41, 30, 19]
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

export const DashboardVisual = () => {
    const [totalAssets, setTotalAssets] = useState(null);
    const [highAssets, setHighAssets] = useState(null);
    const [mediumAssets, setMediumAssets] = useState(null);
    const [lowAssets, setLowAssets] = useState(null);

    const [highAssetConfidentiality, setHighAssetConfidentiality] = useState(null);
    const [mediumAssetConfidentiality, setMediumAssetConfidentiality] = useState(null);
    const [lowAssetConfidentiality, setLowAssetConfidentiality] = useState(null);
    const [highAssetIntegrity, setHighAssetIntegrity] = useState(null);
    const [mediumAssetIntegrity, setMediumAssetIntegrity] = useState(null);
    const [lowAssetIntegrity, setLowAssetIntegrity] = useState(null);

    const [highAssetAvailability, setHighAssetAvailability] = useState(null);
    const [mediumAssetAvailability, setMediumAssetAvailability] = useState(null);
    const [lowAssetAvailability, setLowAssetAvailability] = useState(null);
    const [barData, setBarData] = useState([]);

    useEffect(() => {
        console.log("in detail")
        const storedUser = localStorage.getItem("storedUser");   
        const parsedUser = JSON.parse(storedUser);
       
        return new Promise((resolve, reject) => {
        /*  try {
            // do db call or API endpoint axios call here and return the promise.
            getStaticAssets()
            .then((res) => {
              setTotalAssets(res.static.numberAsset[0].total_Asset);
              setHighAssets(res.static.highAsset[0].high_Asset)
              setMediumAssets(res.static.mediumAsset[0].mediun_Asset)
              setLowAssets(res.static.lowAsset[0].low_Asset)
              setHighAssetAvailability(res.visual.highAssetAvailability[0].high_Asset)
              setHighAssetConfidentiality(res.visual.highAssetConfidentiality[0].high_Asset)
              setHighAssetIntegrity(res.visual.highAssetIntegrity[0].high_Asset)

              setMediumAssetAvailability(res.visual.mediumAssetAvailability[0].mediun_Asset)
              setMediumAssetConfidentiality(res.visual.mediumAssetConfidentiality[0].mediun_Asset)
              setMediumAssetIntegrity(res.visual.mediumAssetIntegrity[0].mediun_Asset)

              setLowAssetAvailability(res.visual.lowAssetAvailability[0].low_Asset)
              setLowAssetConfidentiality(res.visual.lowAssetConfidentiality[0].low_Asset)
              setLowAssetIntegrity(res.visual.lowAssetIntegrity[0].low_Asset)
               
            })
              .catch((err) => {
                console.log("getAllAssets > err=", err);
               
                reject("Request error!");
              });
          } catch (error) {
            console.error("getAllAssets error!==", error);
            reject("getAllAssets error!");
          } */
        });
        
      }, []);

      useEffect(() => {
       
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getStatsForBarChart()
            .then((res) => {
               setBarData(res)               
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
            <p className="orange-total">Total<br/>82</p>
            <p>High<br/>20</p>
            <p>Medium<br/>15</p>
            <p>Low<br/>42</p>
        </div>
        <table className="visual-rating">
            <tr>
                <td className="stack-bars-summary">
                    <div className="stack-bar-h">
                        Confidentiality
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
                    <div className="stack-bar-h">
                        Integrity
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
                    <div className="stack-bar-h">
                        Availability
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
                </td>
                <td className="bar-charts-summary">
                    <span>All Categories</span><br/>
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="300px"
                        data={data}
                        options={options}
                    />
                    <SummaryBarChart data={barData} />
                </td>
                </tr>
            </table>
            
    </>
    );
};
export default DashboardVisual;