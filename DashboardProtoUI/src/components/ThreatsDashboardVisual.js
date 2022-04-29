import React from "react";
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'
import HSBar from "react-horizontal-stacked-bar-chart";

export const ThreatsDashboardVisual = () => {
    return (
    <>
        <div className="asset-rating">
            <p>Threats Ratings</p>
            <p className="orange-total">Total<br/>82</p>
            <p>High<br/>20</p>
            <p>Medium<br/>15</p>
            <p>Low<br/>42</p>
        </div>
        <div className="row g-2 visual-rating-threat">
            <div className=" col-4">
                <div className="Overall-Rating-threat">
                    Overall Rating
                </div>
                <div className="Group-1359"><div className="V-T-Color">
                <HSBar
          showTextDown
          
         
          id="hsbarExample"
          data={[
            { value: 1, description: "H", color: "#09375f" },
            { value: 5, description: "M", color: "#126dba" },
            { value: 4, description: "L", color:"#72b7f2" }
          ]}

        
        />
               {/*} <div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                <span className="span-H">
                    H
                </span>
                <span className="span-H">
                    M
                </span>
                <span className="span-H">
                    L
                </span>*/}</div></div>   
                <div className="grey-threat">
                <div className="Top-3-threat-agents-with-High-Overall-ratings">
                     Top 3 threat agents with High Overall ratings:
                </div>
                <div className="Rectangle-1407">
                    <span className="text-thr ">
                        Phishing
                    </span>
                </div>
                <div className="Rectangle-1407">
                    <span className="text-thr ">
                        Lost or stolen device
                    </span>
                </div>
                <div className="Rectangle-1407">
                    <span className="text-thr">
                        Document sharing
                    </span>
                </div>
                </div>
            </div>
            <div className="col-4">
                <div className="Overall-Rating-threat">
                    Impact
                </div>
                <div className="Group-1359"><div className="V-T-Color">
                <HSBar
           showTextDown
          
         
          id="hsbarExample"
          data={[
            { value: 80, description: "H", color: "#09375f" },
            { value: 40, description: "M", color: "#126dba" },
            { value: 12, description: "L", color:"#72b7f2" }
          ]}
        />
                {/*<div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                    <span className="span-H">
                         H
                    </span>
                    <span className="span-H">
                         M
                    </span>
                    <span className="span-H">
                         L
                    </span>*/}
                </div>
            </div>    
            <div className="grey-threat">
                <div className="Top-3-threat-agents-with-High-Overall-ratings">
                    Top 3 threat agents with High Impact:
                </div>
                <div className="Rectangle-1407">
                    <span className="text-thr ">
                        Malware
                    </span>
                </div>
                <div className="Rectangle-1407">
                    <span className="text-thr ">
                        Phishing
                    </span>
                </div>
                <div className="Rectangle-1407">
                    <span className="text-thr ">
                        Document sharing
                    </span>
                </div>
                </div>
            </div>
            <div className="col-4">
                <div className="Overall-Rating-threat">
                    Likelihood
                </div>
                <div className="Group-1359"><div className="V-T-Color">
                <HSBar
          showTextDown       
          id="hsbarExample"
          data={[
            { value: 8, description: "H", color: "#09375f" },
            { value: 5, description: "M", color: "#126dba" },
            { value: 22, description: "L", color:"#72b7f2" }
          ]}
        />
                {/*<div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                    <span className="span-H">
                         H
                    </span>
                    <span className="span-H">
                         M
                    </span>
                    <span className="span-H">
                         L
                    </span>*/}
                     </div>
                </div>   
                <div className="grey-threat">             
                <div className="Top-3-threat-agents-with-High-Overall-ratings">
                    Top 3 threat agents with High Likelihood:
                </div>
                <div className="Rectangle-1407">
                    <span className="text-thr ">
                        Financial Fraud
                    </span>
                </div>
                <div className="Rectangle-1407">
                    <span className="text-thr ">
                        Lost or stolen device
                    </span>
                </div>
                <div className="Rectangle-1407">
                    <span className="text-thr ">
                        Denial of service
                    </span>
                </div>
                </div>
            </div>
        </div>         
    </>
    );
};
export default ThreatsDashboardVisual;