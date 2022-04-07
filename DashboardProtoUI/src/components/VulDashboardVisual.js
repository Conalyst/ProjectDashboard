import React from "react";
import * as crossfilter from "crossfilter2";
import SummaryBarChart from './db-visuals/SummaryBarChart';
import SummaryStackedChart from "./db-visuals/SummaryStackedChart";
import { vulData, vulImpactData, vulLikeliData } from "./db-visuals/visuals-data";

export const VulDashboardVisual = () => {
    return (
    <>
        <div class="asset-rating">
            <p>Vulnerability Ratings</p>
            <p>Total<br/>51</p>
            <p>High<br/>7</p>
            <p>Medium<br/>22</p>
            <p>Low<br/>22</p>
        </div>
        <table className="visual-rating">
            <tr>
                <td className="stack-bars-summary">
                    <div className="stack-bar-h">
                        Impact
                        <div>
                            <SummaryStackedChart data={vulData.impact} />                            
                        </div>
                    </div>
                    <div className="stack-bar-h">
                        Likelihood
                        <div>
                            <SummaryStackedChart data={vulData.likelihood} />                            
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