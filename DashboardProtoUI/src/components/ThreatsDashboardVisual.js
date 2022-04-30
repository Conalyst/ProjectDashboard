import React,{useEffect,useState} from "react";
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'
import { getStaticThreats, getAgents } from "../services/threatService";
import SummaryBarChart from './db-visuals/SummaryBarChart';
import SummaryStackedChart from "./db-visuals/SummaryStackedChart";
import HSBar from "react-horizontal-stacked-bar-chart";
 
export const ThreatsDashboardVisual = () => {

    const [data, setData] = useState([]) 
    const map = {'0': 0, '1': 10, '2': 20, '3': 30, '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 90}
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
                const data = {
                    totalThreats: res.static.numberThreat[0].total_Threat,
                    highThreats: res.static.highThreat[0].high_Threat,
                    mediumThreats: res.static.mediumThreat[0].mediun_Threat,
                    lowThreats: res.static.lowThreat[0].low_Threat,
                    // agentsRating: res.Agents.AgentsRating,
                    // agentsImpact: res.Agents.AgentsImpact,
                    // agentsLikelihood: res.Agents.AgentsLikelihood,
                    highThreatsImpact: map[res.visual.highThreatImpact[0].high_Threat],
                    lowThreatsImpact: map[res.visual.lowThreatImpact[0].low_Threat],
                    mediumThreatsImpact: map[res.visual.mediumThreatImpact[0].mediun_Threat],
                    highThreatsLikelihood: map[res.visual.mediumThreatLikelihood[0].mediun_Threat],
                    mediumThreatsLikelihood: map[res.visual.mediumThreatLikelihood[0].mediun_Threat],
                    lowThreatsLikelihood: map[res.visual.mediumThreatLikelihood[0].mediun_Threat]
                }
                setData(data)    
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

      useEffect(() => {
        console.log("data@@@@@@@@@@", data)
        // console.log("data....", data.highAssetConfidentiality, data.mediumAssetConfidentiality, data.lowAssetConfidentiality)
        // console.log(data.agentsRating[0].agent)
      }, [data])

  
    return (
    <>
        <div class="asset-rating">
            <p>Threats Ratings</p>
            <p className="orange-total">Total<br/>{data.totalThreats}</p>
            <p>High<br/>{data.highThreats}</p>
            <p>Medium<br/>{data.mediumThreats}</p>
            <p>Low<br/>{data.lowThreats}</p>
        </div>
            
        <div className="row g-2 visual-rating-threat">
            <div className=" col-4">
                <div className="Overall-Rating-threat">
                     Overall Rating
                </div>
                <div className="V-T-Color">
                <HSBar
                     showTextDown
                     id="hsbarExample"
                         data={[
                            { value: map[data.highThreats] , description: "H", color: "#09375f" },
                            { value: map[data.mediumThreats] , description: "M", color: "#126dba" },
                            { value: map[data.lowThreats] , description: "L", color:"#72b7f2" }
                            ]}
                        />
                        </div>
                <div className="Top-3-threat-agents-with-High-Overall-ratings">
                     Top 3 threat agents with High Overall ratings:
                </div>     
               
                {agentsRating.map((agent) => (
                  <div className="Rectangle-1407">                  
                    <span className="Phishing">                       
                        {agent.agent}
                    </span>
                    </div>                           
                ))}
                  
                
            </div>
            <div className="col-4">
                <div className="Overall-Rating-threat">
                    Impact
                </div>
                <div className="V-T-Color">
                <HSBar
                     showTextDown
                     id="hsbarExample"
                         data={[
                            { value: data.highThreatsImpact , description: "H", color: "#09375f" },
                            { value: data.mediumThreatsImpact , description: "M", color: "#126dba" },
                            { value: data.lowThreatsImpact , description: "L", color:"#72b7f2" }
                            ]}
                        />
                        </div>   
                <div className="Top-3-threat-agents-with-High-Overall-ratings">
                    Top 3 threat agents with High Impact:                  
                </div>
                {agentsImpact.map((agent) => (
                    <div div className="Rectangle-1407-Mal">               
                        <span className="Malware">
                            {agent.agent}
                        </span>
                    </div>
                ))}                 
              
            </div>
            <div className="col-4">
                <div className="Overall-Rating-threat">
                    Likelihood
                </div>
                <div className="V-T-Color">
                <HSBar
                     showTextDown
                     id="hsbarExample"
                         data={[
                            { value: data.highThreatsLikelihood , description: "H", color: "#09375f" },
                            { value: data.mediumThreatsLikelihood , description: "M", color: "#126dba" },
                            { value: data.lowThreatsLikelihood , description: "L", color:"#72b7f2" }
                            ]}
                        />
                        </div>                
                <div className="Top-3-threat-agents-with-High-Overall-ratings">
                    Top 3 threat agents with High Likelihood:
                </div>
                {agentsLikelihood.map((agent) => (
                    <div className="Rectangle-1408-Fin">
                        <span className="Financial-Fraud">
                            {agent.agent}
                        </span>
                    </div>
                ))}
            </div>
        </div>         

    </>
    );
};
export default ThreatsDashboardVisual;