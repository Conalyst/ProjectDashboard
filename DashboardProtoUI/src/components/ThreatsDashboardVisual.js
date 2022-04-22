import React,{useEffect,useState} from "react";
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'
import { getStaticThreats } from "../services/threatService";
export const ThreatsDashboardVisual = () => {

   

    const [totalThreats, setTotalThreats] = useState(null);
    const [highThreats, setHighThreats] = useState(null);
    const [mediumThreats, setMediumThreats] = useState(null);
    const [lowThreats, setLowThreats] = useState(null);
    useEffect(() => {
        console.log("in detail")
        const storedUser = localStorage.getItem("storedUser");   
        const parsedUser = JSON.parse(storedUser);
       
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getStaticThreats()
            .then((res) => {
              setTotalThreats(res.static.numberThreat[0].total_Threat);
              setHighThreats(res.static.highThreat[0].high_Threat)
              setMediumThreats(res.static.mediumThreat[0].mediun_Threat)
              setLowThreats(res.static.lowThreat[0].low_Threat)
               
            })
              .catch((err) => {
                console.log("getAllThreats > err=", err);
               
                reject("Request error!");
              });
          } catch (error) {
            console.error("getAllThreats error!==", error);
            reject("getAllThreats error!");
          }
        });
      }, []);

    return (
    <>
        <div class="asset-rating">
            <p>Threats Ratings</p>
            <p>Total<br/>{totalThreats}</p>
            <p>High<br/>{highThreats}</p>
            <p>Medium<br/>{mediumThreats}</p>
            <p>Low<br/>{lowThreats}</p>
        </div>
            <table className="visual-rating">
                <tr>
                    <td className="stack-bars-summary">
                        Confidentiality
                    </td>
                    <td className="bar-charts-summary">
                        Availability
                    </td>
                </tr>
            </table>
        <div className="injury-level1">
                <span className="dark_blue"></span>
                <span className="blue"></span>
                <span class="grey"></span>
        </div>
            
    </>
    );
};
export default ThreatsDashboardVisual;