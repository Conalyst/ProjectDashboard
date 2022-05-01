import React,{useEffect,useState} from "react";
import * as crossfilter from "crossfilter2";
import Chart from "react-google-charts";
import SummaryBarChart from './db-visuals/SummaryBarChart';
import SummaryStackedChart from "./db-visuals/SummaryStackedChart";
import { assetData, data } from "./db-visuals/visuals-data";
import { getStaticAssets, getStatsForBarChart } from "../services/assetsService";
import HSBar from "react-horizontal-stacked-bar-chart";

 
  
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
 console.log("###############",highAssetConfidentiality,mediumAssetConfidentiality,lowAssetConfidentiality)
 
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
              setHighAssetAvailability(res.visual.highAssetAvailability[0].high_Asset)
              setHighAssetConfidentiality(res.visual.highAssetConfidentiality[0].high_Asset)
              setHighAssetIntegrity(res.visual.highAssetIntegrity[0].high_Asset)

              setMediumAssetAvailability(res.visual.mediumAssetAvailability[0].mediun_Asset)
              setMediumAssetConfidentiality(res.visual.mediumAssetConfidentiality[0].mediun_Asset)
              setMediumAssetIntegrity(res.visual.mediumAssetIntegrity[0].mediun_Asset)

              setLowAssetAvailability(res.visual.lowAssetAvailability[0].low_Asset)
              setLowAssetConfidentiality(res.visual.lowAssetConfidentiality[0].low_Asset)
              setLowAssetIntegrity(res.visual.lowAssetIntegrity[0].low_Asset)
               console.log("in stactic asset ", res)

 
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
                const result = [];
                result.push(["Group", "H", "M", "L"])
                for(let data of res){
                    result.push([data.group, data.H, data.M, data.L])
                }
                console.log("Result.......", result)
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
                        <div className="V-T-Color">
                           
                             
                                  <HSBar
                                showTextDown
                                id="hsbarExample"
                                        
                              data={[
                                { value: parseInt(highAssetConfidentiality), name: "H",description :`${highAssetConfidentiality}` ,color: "#09375f" },
                                { value: parseInt(mediumAssetConfidentiality), name: "M",description :`${mediumAssetConfidentiality}`, color: "#126dba" },
                                { value: parseInt(lowAssetConfidentiality), name: "L",description :`${lowAssetConfidentiality}`, color:"#72b7f2" }
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
                      { value: parseInt(highAssetIntegrity), name: "H",description :`${highAssetIntegrity}` ,color: "#09375f" },
                      { value: parseInt(mediumAssetIntegrity), name: "M",description :`${mediumAssetIntegrity}`, color: "#126dba" },
                      { value: parseInt(lowAssetIntegrity), name: "L",description :`${lowAssetIntegrity}`, color:"#72b7f2" }
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
            { value: parseInt(highAssetAvailability), name: "H",description :`${highAssetAvailability}` ,color: "#09375f" },
            { value: parseInt(mediumAssetAvailability), name: "M",description :`${mediumAssetAvailability}`, color: "#126dba" },
            { value: parseInt(lowAssetAvailability), name: "L",description :`${lowAssetAvailability}`, color:"#72b7f2" }
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
                        height="500px"
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