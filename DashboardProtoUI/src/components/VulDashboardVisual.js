import React,{useEffect,useState} from "react";
import * as crossfilter from "crossfilter2";
import SummaryBarChart from './db-visuals/SummaryBarChart';
import SummaryStackedChart from "./db-visuals/SummaryStackedChart";
import { vulData, vulImpactData, vulLikeliData } from "./db-visuals/visuals-data";
import { getStaticVulnerability } from "../services/vulnerabilityService";
export const VulDashboardVisual = () => {

    const [totalVulnerabilities, setTotalVulnerabilities] = useState(null);
    const [highVulnerabilities, setHighVulnerabilities] = useState(null);
    const [mediumVulnerabilities, setMediumVulnerabilities] = useState(null);
    const [lowVulnerabilities, setLowVulnerabilities] = useState(null);

    const [highVulnerabilityImpact, setHighVulnerabilityImpact] = useState(null);
    const [mediumVulnerabilityImpact, setMediumVulnerabilityImpact] = useState(null);
    const [lowVulnerabilityImpact, setLowVulnerabilityImpact] = useState(null);

    const [highVulnerabilityLikelihood, setHighVulnerabilityLikelihood] = useState(null);
    const [mediumVulnerabilityLikelihood, setMediumVulnerabilityLikelihood] = useState(null);
    const [lowVulnerabilityLikelihood, setLowVulnerabilityLikelihood] = useState(null);
    useEffect(() => {
        console.log("in detail")
        const storedUser = localStorage.getItem("storedUser");   
        const parsedUser = JSON.parse(storedUser);
       
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getStaticVulnerability()
            .then((res) => {
              setTotalVulnerabilities(res.static.numberVulnerability[0].total_Vulnerability);
              setHighVulnerabilities(res.static.highVulnerability[0].high_Vulnerability)
              setMediumVulnerabilities(res.static.mediumVulnerability[0].mediun_Vulnerability)
              setLowVulnerabilities(res.static.lowVulnerability[0].low_Vulnerability)

              setHighVulnerabilityImpact(res.visual.highVulnerabilityImpact[0].high_Vulnerability)
              setMediumVulnerabilityImpact(res.visual.mediumVulnerabilityImpact[0].mediun_Vulnerability)
              setLowVulnerabilityImpact(res.visual.lowVulnerabilityImpact[0].low_Vulnerability)

              setHighVulnerabilityLikelihood(res.visual.highVulnerabilityLikelihood[0].high_Vulnerability)
              setMediumVulnerabilityLikelihood(res.visual.mediumVulnerabilityLikelihood[0].mediun_Vulnerability)
              setLowVulnerabilityLikelihood(res.visual.lowVulnerabilityLikelihood[0].low_Vulnerability)
               
            })
              .catch((err) => {
                console.log("getAllVulnerabilities > err=", err);
               
                reject("Request error!");
              });
          } catch (error) {
            console.error("getAllVulnerabilities error!==", error);
            reject("getAllVulnerabilities error!");
          }
        });
      }, []);

    return (
    <>
        <div class="asset-rating">
            <p>Vulnerability Ratings</p>
            <p className="orange-total">Total<br/>{totalVulnerabilities}</p>
            <p>High<br/>{highVulnerabilities}</p>
            <p>Medium<br/>{mediumVulnerabilities}</p>
            <p>Low<br/>{lowVulnerabilities}</p>
        </div>
        <table className="visual-rating">
            <tr>
                <td className="stack-bars-summary">
                    <div className="stack-bar-h">
                        Impact
                        {/* <div>
                            <SummaryStackedChart data={vulData.impact} />                            
                        </div> */}
                        <div className="Group-1359"><div className="V-T-Color">
                <div className="Dark-Blue-Color"  ><div className="Light-Blue-Color"  ><div className="Grey-Color"  ></div></div></div>
                    <span className="span-H"  >
                         H({highVulnerabilityImpact})
                    </span>
                    <span className="span-M">
                         M({mediumVulnerabilityImpact})
                    </span>
                    <span className="span-L">
                         L({lowVulnerabilityImpact})
                    </span>
                </div>
            </div>  

                    </div>
                    <div className="stack-bar-h">
                        Likelihood
                        {/* <div>
                            <SummaryStackedChart data={vulData.likelihood} />                            
                        </div> */}

<div className="Group-1359"><div className="V-T-Color">
                <div className="Dark-Blue-Color"  ><div className="Light-Blue-Color"  ><div className="Grey-Color"  ></div></div></div>
                    <span className="span-H"  >
                         H({highVulnerabilityLikelihood})
                    </span>
                    <span className="span-M">
                         M({mediumVulnerabilityLikelihood})
                    </span>
                    <span className="span-L">
                         L({lowVulnerabilityLikelihood})
                    </span>
                </div>
            </div>  
                    </div>
                </td>
                <td className="bar-charts-summary">
                    <span>All Categories</span><br/>
                    <SummaryBarChart data={vulData.summary} />
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
export default VulDashboardVisual;