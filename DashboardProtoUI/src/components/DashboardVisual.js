import React,{useEffect,useState} from "react";
import * as crossfilter from "crossfilter2";
import SummaryBarChart from './db-visuals/SummaryBarChart';
import SummaryStackedChart from "./db-visuals/SummaryStackedChart";
import { assetData } from "./db-visuals/visuals-data";
import { getStaticAssets } from "../services/assetsService";

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
                            {/* <div>
                                <SummaryStackedChart data={assetData.confi} />                            
                            </div> */}
                            <div className="Group-1359"><div className="V-T-Color">
                <div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                <span className="span-H">
                    H({highAssetConfidentiality})
                </span>
                <span className="span-M">
                    M({mediumAssetConfidentiality})
                </span>
                <span className="span-L">
                    L({lowAssetConfidentiality})
                </span></div></div>  
                        </div>
                        <div className="stack-bar-h">
                            Integrity
                            {/* <div>
                                <SummaryStackedChart data={assetData.integrity} />                            
                            </div> */}
                            <div className="Group-1359"><div className="V-T-Color">
                <div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                <span className="span-H">
                    H({highAssetIntegrity})
                </span>
                <span className="span-M">
                    M({mediumAssetIntegrity})
                </span>
                <span className="span-L">
                    L({lowAssetIntegrity})
                </span></div></div> 
                        </div>
                        <div className="stack-bar-h">
                            Availability
                            {/* <div>
                                <SummaryStackedChart data={assetData.avail} />                            
                            </div> */}
                                     <div className="Group-1359"><div className="V-T-Color">
                <div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                <span className="span-H">
                    H({highAssetAvailability})
                </span>
                <span className="span-M">
                    M({mediumAssetAvailability})
                </span>
                <span className="span-L">
                    L({lowAssetAvailability})
                </span></div></div> 
                        </div>
                    </td>
                <td className="bar-charts-summary">
                    <span>All Categories</span><br/>
                    <SummaryBarChart data={assetData.summary} />
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