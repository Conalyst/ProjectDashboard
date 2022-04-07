import React from "react";
import * as crossfilter from "crossfilter2";
import SummaryBarChart from './db-visuals/SummaryBarChart';
import SummaryStackedChart from "./db-visuals/SummaryStackedChart";
import { assetData } from "./db-visuals/visuals-data";

export const DashboardVisual = () => {
    return (
    <>
        <div class="asset-rating">
            <p>Asset Ratings</p>
            <p>Total<br/>82</p>
            <p>High<br/>20</p>
            <p>Medium<br/>15</p>
            <p>Low<br/>42</p>
        </div>
            <table className="visual-rating">
                <tr>
                    <td className="stack-bars-summary">
                        <div className="stack-bar-h">
                            Confidentiality
                            <div>
                                <SummaryStackedChart data={assetData.confi} />                            
                            </div>
                        </div>
                        <div className="stack-bar-h">
                            Integrity
                            <div>
                                <SummaryStackedChart data={assetData.integrity} />                            
                            </div>
                        </div>
                        <div className="stack-bar-h">
                            Availability
                            <div>
                                <SummaryStackedChart data={assetData.avail} />                            
                            </div>
                        </div>
                    </td>
                <td className="bar-charts-summary">
                    <span>All Categories</span><br/>
                    <SummaryBarChart data={assetData.summary} />
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
export default DashboardVisual;