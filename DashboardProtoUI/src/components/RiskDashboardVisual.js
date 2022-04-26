import React from "react";
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'
import { Chart } from "react-google-charts";

export const RiskDashboardVisual = () => {

    const pie_data = [
        ["Risks", "3"],
        ["Operational", 11],
        ["Technical", 11 ],
        ["Governance", 12],
       
      ];
    
    const options = {
        pieHole: 0.6,
        is3D: false,
        colors: ['#ed723c', '#ffb244', '#f3d381']
      };
    return (
    <>
        <div class="asset-rating">
            <p>Risks Ratings</p>
            <p className="orange-total">Total<br/>82</p>
            <p>High<br/>20</p>
            <p>Medium<br/>15</p>
            <p>Low<br/>42</p>
        </div>
        <div className="row g-2 visual-rating-risk">
            <div className=" col-4">
           
            <div style={{
                display:'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div>
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#de5656'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f8a20e'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f6be5b'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#39e9ae'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#36bf91'}} />
        </div>
        <div>
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#de5656'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f8a20e'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f6be5b'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#39e9ae'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#39e9ae'}} />
        </div>
        <div>
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#de5656'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f8a20e'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f6be5b'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f6be5b'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f6be5b'}} />
        </div>
        <div>
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#de5656'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f8a20e'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f8a20e'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f8a20e'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#f8a20e'}} />
        </div>
        <div>
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#de5656'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#de5656'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#de5656'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#de5656'}} />
          <div style={{width: 58, height: 58, marginBottom:3, marginLeft:3, backgroundColor: '#de5656'}} />
        </div>
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
           </div>
            <div className="col-4">
                <div className="Group-300006272">
                <span className="High-Value-Assets-Distributed-per-Risk-Category">
  High Value Assets Distributed 
per Risk Category
</span>
                </div>
                
     
          <Chart
            chartType="PieChart"
            width="100%"
            height="100%"
            data={pie_data}
            options={options}
          />
       
                
          
            
            </div>
        </div>         
    </>
    );
};
export default RiskDashboardVisual;