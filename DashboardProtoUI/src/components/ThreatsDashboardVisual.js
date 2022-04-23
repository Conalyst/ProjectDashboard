import React,{useEffect,useState} from "react";
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'
import { getStaticThreats, getAgents } from "../services/threatService";
import SummaryBarChart from './db-visuals/SummaryBarChart';
import SummaryStackedChart from "./db-visuals/SummaryStackedChart";
export const ThreatsDashboardVisual = () => {

   

    const [totalThreats, setTotalThreats] = useState(null);
    const [highThreats, setHighThreats] = useState(null);
    const [mediumThreats, setMediumThreats] = useState(null);
    const [lowThreats, setLowThreats] = useState(null);
    const [agentsRating, setAgentsRating] = useState([]);
    const [agentsImpact, setAgentsImpact] = useState([]);
    const [agentsLikelihood, setAgentsLikelihood] = useState([]);
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
              setAgentsRating(res.Agents.AgentsRating)
              setAgentsImpact(res.Agents.AgentsImpact)
              setAgentsLikelihood(res.Agents.AgentsLikelihood)
             
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

         

           {/* {threats.map((threat) => ( */}
           <table className="visual-rating">
          
                <td className="stack-bars-summary">
               
                      <div className="stack-bar-h">
                      Top 3 threat agents with high Rating 
                    overallratings:
                      {agentsRating.map((agent) => (
                        
                          <tr className="cr-text">
                      <td>{agent.agent}
                      
                      </td>
                      </tr>
                      ) )}
                      </div>
                 </td>
                
                 <td className="stack-bars-summary">
                 <div className="stack-bar-h">
                      Top 3 threat agents with high Impact :
                      {agentsImpact.map((agent) => (
                          <tr className="cr-text">
                      <td>{agent.agent}</td>
                      </tr>
                      ) )}
                      </div>
                 </td>
                
                 <td className="stack-bars-summary">
                 <div className="stack-bar-h">
                      Top 3 threat agents with high Likelihood :
                      {agentsLikelihood.map((agent) => (
                          <tr className="cr-text">
                      <td>{agent.agent}</td>
                      </tr>
                      ) )}
                      </div>
                  </td>
        
     
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