import React from "react";
<<<<<<< HEAD
import Chart from "react-google-charts";

export const data = [
    ["Group", "H", "M", "L"],
    ["Data", 15, 43, 25],
    ["Network", 30, 24, 12],
    ["Personnel", 21, 32, 15],
    ["Software", 10, 43, 30],
    ["Intangible", 41, 30, 19]
  ];
  
export const options = {
    chartArea: { width: "75%" },
    colors: ["#09375f", "#126dba", "#72b7f2"],
    hAxis: {
    },
    vAxis: {
        minValue: 0
    },
    bar: {
        groupWidth: 64
    }
};
=======
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'
import Chart from "react-google-charts";
import HSBar from "react-horizontal-stacked-bar-chart";
>>>>>>> 4308267 (Visuals)

export const DashboardVisual = () => {
       const ldata = [
        ["Group", "H", "M", "L"],
        ["Data", 15, 43, 25],
        ["Network", 30, 24, 12],
        ["Personnel", 21, 32, 15],
        ["Software", 10, 43, 30],
        ["Intangible", 41, 30, 19]
      ];
      
        const options = {
        chartArea: { width: "75%" },
        colors: ["#09375f", "#126dba", "#72b7f2"],
        hAxis: {
        },
        vAxis: {
            minValue: 0
        },
        bar: {
            groupWidth: 64
        }
    }
    return (
    <>
        <div className="asset-rating">
            <p>Asset Ratings</p>
            <p className="orange-total">Total<br/>82</p>
            <p>High<br/>20</p>
            <p>Medium<br/>15</p>
            <p>Low<br/>42</p>
        </div>
        <table className="visual-rating">
<<<<<<< HEAD
            <tr>
                <td className="stack-bars-summary">
                    <div className="stack-bar-h">
                        Confidentiality
                        <div className="V-T-Color">
                            <div className="Dark-Blue-Color">
                            <div className="Light-Blue-Color">
                            <div className="Grey-Color">
                            </div></div></div>
                            <div className="label-span-s">
                                <span className="value-span-s span-H-s">H</span>
                                <span className="value-span-s span-M-s">M</span>
                                <span className="value-span-s span-L-s">L</span>
                            </div>
                        </div>
                    </div>
                    <div className="stack-bar-h">
                        Integrity
                        <div className="V-T-Color">
                            <div className="Dark-Blue-Color">
                            <div className="Light-Blue-Color">
                            <div className="Grey-Color">
                            </div></div></div>
                            <div className="label-span-s">
                                <span className="value-span-s span-H-s">H</span>
                                <span className="value-span-s span-M-s">M</span>
                                <span className="value-span-s span-L-s">L</span>
                            </div>
                        </div>
                    </div>
                    <div className="stack-bar-h">
                        Availability
                        <div className="V-T-Color">
                            <div className="Dark-Blue-Color">
                            <div className="Light-Blue-Color">
                            <div className="Grey-Color">
                            </div></div></div>
                            <div className="label-span-s">
                                <span className="value-span-s span-H-s">H</span>
                                <span className="value-span-s span-M-s">M</span>
                                <span className="value-span-s span-L-s">L</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="bar-charts-summary">
=======
                 <tr>


                 <td className="stack-bars-summary">
                    <div className="stack-bar-h">
                    Confidentiality
                        <div className="V-T-Color">
                        <HSBar
          showTextDown       
          id="hsbarExample"
          data={[
            { value: 1, description: "H", color: "#09375f" },
            { value: 1, description: "M", color: "#126dba" },
            { value: 2, description: "L", color:"#72b7f2" }
          ]}
        />
                        </div>
                    </div>
                    <div className="stack-bar-h">
                    Integrity
                        <div className="V-T-Color">
                        <HSBar
          showTextDown       
          id="hsbarExample"
          data={[
            { value: 5, description: "H", color: "#09375f" },
            { value: 5, description: "M", color: "#126dba" },
            { value: 2, description: "L", color:"#72b7f2" }
          ]}
        />
                        </div>
                    </div>
                    <div className="stack-bar-h">
                    Availability
                        <div className="V-T-Color">
                        <HSBar
          showTextDown       
          id="hsbarExample"
          data={[
            { value: 3, description: "H", color: "#09375f" },
            { value: 5, description: "M", color: "#126dba" },
            { value: 2, description: "L", color:"#72b7f2" }
          ]}
        />
                        </div>
                    </div>
                </td>
                
                    <td className="bar-charts-summary">
>>>>>>> 4308267 (Visuals)
                    <span>All Categories</span><br/>
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
<<<<<<< HEAD
                        height="300px"
                        data={data}
                        options={options}
                    />
                </td>
            </tr>
        </table>            
=======
                        height="500px"
                        data={ldata}
                        options={options}
                    />

                </td>
                </tr>
            </table>
        
            
>>>>>>> 4308267 (Visuals)
    </>
    );
};
export default DashboardVisual;