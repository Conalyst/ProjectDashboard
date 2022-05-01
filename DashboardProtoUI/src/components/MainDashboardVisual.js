import React from "react";
import * as crossfilter from "crossfilter2";
// import {csv,timeFormat,timeParse,timeMonth,format} from 'd3';
import risk_data from "./../risk_data.json";
import HeatMap from "./HeatMap";

export const MainDashboardVisual = () => {
    return (
    <>
        
            <HeatMap risk_data={risk_data}/>
        {/* <div className="injury-level1">
                <span className="dark_blue"></span>
                <span className="blue"></span>
                <span className="grey"></span>
        </div> */}
            
    </>
    );
};
export default MainDashboardVisual;