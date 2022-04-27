import React from "react";
import Chart from "react-google-charts";

export const data = [
    ["Group", "H", "M", "L"],
    ["Technical", 3, 5, 9],
    ["Operational", 3, 10, 8],
    ["Personnel", 2, 7, 5]
  ];
  
export const options = {
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

export const VulDashboardVisual = () => {
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
                        Likelihood
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
                    <span>All Categories</span><br/>
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="300px"
                        data={data}
                        options={options}
                    />
                </td>
            </tr>
        </table>          
    </>
    );
};
export default VulDashboardVisual;