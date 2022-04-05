import React from "react";
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'

export const ThreatsDashboardVisual = () => {
    return (
    <>
        <div class="asset-rating">
            <p>Threat Ratings</p>
            <p>Total<br/>82</p>
            <p>High<br/>20</p>
            <p>Medium<br/>15</p>
            <p>Low<br/>42</p>
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