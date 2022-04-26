import React,{useEffect,useState} from "react";
import * as crossfilter from "crossfilter2";
import SummaryBarChart from './db-visuals/SummaryBarChart';
import SummaryStackedChart from "./db-visuals/SummaryStackedChart";
import { assetData, data } from "./db-visuals/visuals-data";
import { getStaticAssets, getStatsForBarChart } from "../services/assetsService";

export const DashboardVisual = () => {
    const [totalAssets, setTotalAssets] = useState(null);
    const [highAssets, setHighAssets] = useState(null);
    const [mediumAssets, setMediumAssets] = useState(null);
    const [lowAssets, setLowAssets] = useState(null);
    const [barData, setBarData] = useState([]);

    useEffect(() => {
        console.log("in detail")
        const storedUser = localStorage.getItem("storedUser");   
        const parsedUser = JSON.parse(storedUser);
       
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getStaticAssets()
            .then((res) => {
              setTotalAssets(res.static.numberAsset[0].total_Asset);
              setHighAssets(res.static.highAsset[0].high_Asset)
              setMediumAssets(res.static.mediumAsset[0].mediun_Asset)
              setLowAssets(res.static.lowAsset[0].low_Asset)
               
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
            <p className="orange-total">Total<br/>{totalAssets}</p>
            <p>High<br/>{highAssets}</p>
            <p>Medium<br/>{mediumAssets}</p>
            <p>Low<br/>{lowAssets}</p>
            
        </div>
            <table className="visual-rating">
                <tr>
                    <td className="stack-bars-summary">
                        <div className="stack-bar-h">
                            Confidentiality
                            <div>
                                <SummaryStackedChart data={assetData.confi} />                            
                            </div>
                        </div>
                        <div className="stack-bar-h">
                            Integrity
                            <div>
                                <SummaryStackedChart data={assetData.integrity} />                            
                            </div>
                        </div>
                        <div className="stack-bar-h">
                            Availability
                            <div>
                                <SummaryStackedChart data={assetData.avail} />                            
                            </div>
                        </div>
                    </td>
                <td className="bar-charts-summary">
                    <span>All Categories</span><br/>
                    <SummaryBarChart data={barData} />
                </td>
                </tr>
            </table>
        {/* <div className="injury-level1">
                <span className="dark_blue"></span>
                <span className="blue"></span>
                <span class="grey"></span>
            </div> */}
            
    </>
    );
};
export default DashboardVisual;