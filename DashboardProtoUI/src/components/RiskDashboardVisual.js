import React,{useEffect,useState} from "react";
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'
import { getStaticRisks } from "../services/riskService";
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
    return (
    <>
        <div class="asset-rating">
            <p>Risks Ratings</p>
            <p className="orange-total">Total<br/>{totalRisks}</p>
            <p>High<br/>{highRisks}</p>
            <p>Medium<br/>{mediumRisks}</p>
            <p>Low<br/>{lowRisks}</p>
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
export default RiskDashboardVisual;