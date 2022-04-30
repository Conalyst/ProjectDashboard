import React from "react";
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'
import Chart from "react-google-charts";
import HSBar from "react-horizontal-stacked-bar-chart";


export const VulDashboardVisual = () => {

  const ldata = [
    ["Group", "H", "M", "L"],
    ["Technical", 3, 5, 9],
    ["Operational", 3, 10, 8],
    ["Personnel", 2, 7, 5]
  ];
  
  const options = {
    chartArea: { width: "75%" },
    colors: ["#09375f", "#126dba", "#72b7f2"],
    hAxis: {},
    vAxis: {
        minValue: 0,
        ticks: [5, 10]
    },
    bar: {
        groupWidth: 64
    }
};
    return (
    <>
        <div class="asset-rating">
            <p>Vulnerability Ratings</p>
            <p className="orange-total">Total<br/>82</p>
            <p>High<br/>20</p>
            <p>Medium<br/>15</p>
            <p>Low<br/>42</p>
        </div>
        <table className="visual-rating">
            <tr>
                <td className="stack-bars-summary">
                    <div className="stack-bar-h">
                        Impact
                        <div className="V-T-Color">
                        <HSBar
          showTextDown
     
          id="hsbarExample"
          data={[
            { value: 1, description: "H", color: "#09375f" },
            { value: 5, description: "M", color: "#126dba" },
            { value: 4, description: "L", color:"#72b7f2" }
          ]}

        />
                 </div>
                    </div>
                    <div className="stack-bar-h">
                        Likelihood
                        <div className="V-T-Color">
                        <HSBar
           showTextDown
          
         
          id="hsbarExample"
          data={[
            { value: 80, description: "H", color: "#09375f" },
            { value: 40, description: "M", color: "#126dba" },
            { value: 12, description: "L", color:"#72b7f2" }
          ]}
        />
                        </div>
                    </div>
                </td>
                <td className="bar-charts-summary">
                    <span>All Categories</span><br/>
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="300px"
                        data={ldata}
                        options={options}
                    />
                </td>
            </tr>
        </table>
    </>
    );
};
export default VulDashboardVisual;