import React from "react";
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
    }
  };

export const DashboardVisual = () => {
    return (
    <>
        <div class="asset-rating">
            <p>Asset Ratings</p>
            <p className="orange-total">Total<br/>82</p>
            <p>High<br/>20</p>
            <p>Medium<br/>15</p>
            <p>Low<br/>42</p>
        </div>
        <table className="visual-rating">
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
export default DashboardVisual;