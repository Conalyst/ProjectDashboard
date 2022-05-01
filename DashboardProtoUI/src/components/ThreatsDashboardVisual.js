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
    const [highThreatsImpact, setHighThreatsImpact] = useState(null);
    const [mediumThreatsImpact, setMediumThreatsImpact] = useState(null);
    const [lowThreatsImpact, setLowThreatsImpact] = useState(null);
    const [highThreatsLikelihood, setHighThreatsLikelihood] = useState(null);
    const [mediumThreatsLikelihood, setMediumThreatsLikelihood] = useState(null);
    const [lowThreatsLikelihood, setLowThreatsLikelihood] = useState(null);
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
                setHighThreatsImpact(res.visual.highThreatImpact[0].high_Threat)
                setLowThreatsImpact(res.visual.lowThreatImpact[0].low_Threat)
                setMediumThreatsImpact(res.visual.mediumThreatImpact[0].mediun_Threat)
                setHighThreatsLikelihood(res.visual.mediumThreatLikelihood[0].mediun_Threat)
                setMediumThreatsLikelihood(res.visual.mediumThreatLikelihood[0].mediun_Threat)
                setLowThreatsLikelihood(res.visual.mediumThreatLikelihood[0].mediun_Threat)   
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
            <p className="orange-total">Total<br/>{totalThreats}</p>
            <p>High<br/>{highThreats}</p>
            <p>Medium<br/>{mediumThreats}</p>
            <p>Low<br/>{lowThreats}</p>
        </div>
            
        <div className="row g-2 visual-rating-threat">
            <div className=" col-4">
                <div className="threat-summary-label">
                     Overall Rating
                </div>
                <div className="V-T-Color">
                            <div className="Dark-Blue-Color">
                            <div className="Light-Blue-Color">
                            <div className="Grey-Color">
                            </div></div></div>
                            <div className="label-span-s">
                                <span className="value-span-s span-H-s">H({highThreats})</span>
                                <span className="value-span-s span-M-s">M({mediumThreats})</span>
                                <span className="value-span-s span-L-s">L({lowThreats})</span>
                            </div>
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
            
                 
                    ) )}
                  
                
            </div>
            <div className="col-4">
                <div className="threat-summary-label">
                    Impact
                </div>
                <div className="V-T-Color">
                            <div className="Dark-Blue-Color">
                            <div className="Light-Blue-Color">
                            <div className="Grey-Color">
                            </div></div></div>
                            <div className="label-span-s">
                                <span className="value-span-s span-H-s">H({highThreatsImpact})</span>
                                <span className="value-span-s span-M-s">M({mediumThreatsImpact})</span>
                                <span className="value-span-s span-L-s">L({lowThreatsImpact})</span>
                            </div>
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
                   ) )}
                 
               
            </div>
            <div className="col-4">
                <div className="threat-summary-label">
                    Likelihood
                </div>
                <div className="V-T-Color">
                            <div className="Dark-Blue-Color">
                            <div className="Light-Blue-Color">
                            <div className="Grey-Color">
                            </div></div></div>
                            <div className="label-span-s">
                                <span className="value-span-s span-H-s">H({highThreatsLikelihood})</span>
                                <span className="value-span-s span-M-s">M({mediumThreatsLikelihood})</span>
                                <span className="value-span-s span-L-s">L({lowThreatsLikelihood})</span>
                            </div>
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
                    ) )}
            </div>
        </div>         

    </>
    );
};
export default ThreatsDashboardVisual;