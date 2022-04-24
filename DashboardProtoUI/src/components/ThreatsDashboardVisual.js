import React from "react";
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'

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
                <div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                <span className="span-H">
                    H
                </span>
                <span className="span-M">
                    M
                </span>
                <span className="span-L">
                    L
                </span></div></div>    
                <div className="Top-3-threat-agents-with-High-Overall-ratings">
                     Top 3 threat agents with High Overall ratings:
                </div>
                <div className="Rectangle-1407">
                    <span className="Phishing">
                        Phishing
                    </span>
                </div>
                <div className="Rectangle-1408">
                    <span className="Phishing">
                        Lost or stolen device
                    </span>
                </div>
                <div className="Rectangle-1409">
                    <span className="Phishing">
                        Document sharing
                    </span>
                </div>
            </div>
            <div className="col-4">
                <div className="Overall-Rating-threat">
                    Impact
                </div>
                <div className="Group-1359"><div className="V-T-Color">
                <div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                    <span className="span-H">
                         H
                    </span>
                    <span className="span-M">
                         M
                    </span>
                    <span className="span-L">
                         L
                    </span>
                </div>
            </div>    
                <div className="Top-3-threat-agents-with-High-Overall-ratings">
                    Top 3 threat agents with High Impact:
                </div>
                <div className="Rectangle-1407">
                    <span className="Malware">
                        Malware
                    </span>
                </div>
                <div className="Rectangle-1408">
                    <span className="Phishing">
                        Phishing
                    </span>
                </div>
                <div className="Rectangle-1409">
                    <span className="Phishing">
                        Document sharing
                    </span>
                </div>
            </div>
            <div className="col-4">
                <div className="Overall-Rating-threat">
                    Likelihood
                </div>
                <div className="Group-1359"><div className="V-T-Color">
                <div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                    <span className="span-H">
                         H
                    </span>
                    <span className="span-M">
                         M
                    </span>
                    <span className="span-L">
                         L
                    </span>
                     </div>
                </div>                
                <div className="Top-3-threat-agents-with-High-Overall-ratings">
                    Top 3 threat agents with High Likelihood:
                </div>
                <div className="Rectangle-1408">
                    <span className="Financial-Fraud">
                        Financial Fraud
                    </span>
                </div>
                <div className="Rectangle-1408">
                    <span className="Phishing">
                        Lost or stolen device
                    </span>
                </div>
                <div className="Rectangle-1409">
                    <span className="Phishing">
                        Denial of service
                    </span>
                </div>
            </div>
        </div>         
    </>
    );
};
export default ThreatsDashboardVisual;