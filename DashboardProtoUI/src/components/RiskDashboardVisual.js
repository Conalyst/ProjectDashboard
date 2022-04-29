import React,{useEffect,useState} from "react";
import * as crossfilter from "crossfilter2";
import {csv,timeFormat,timeParse,timeMonth,format} from 'd3'
import { getStaticRisks } from "../services/riskService";
import HSBar from "react-horizontal-stacked-bar-chart";
import { Chart } from "react-google-charts";

export const RiskDashboardVisual = () => {
    const [totalRisks, setTotalRisks] = useState(null);
    const [highRisks, setHighRisks] = useState(null);
    const [mediumRisks, setMediumRisks] = useState(null);
    const [lowRisks, setLowRisks] = useState(null);
    useEffect(() => {
        console.log("in detail")
        const storedUser = localStorage.getItem("storedUser");   
        const parsedUser = JSON.parse(storedUser);
       
        return new Promise((resolve, reject) => {
          try {
            // do db call or API endpoint axios call here and return the promise.
            getStaticRisks()
            .then((res) => {
              setTotalRisks(res.static.numberRisk[0].total_Risk);
              setHighRisks(res.static.highRisk[0].high_Risk)
              setMediumRisks(res.static.mediumRisk[0].mediun_Risk)
              setLowRisks(res.static.lowRisk[0].low_Risk)
               
            })
              .catch((err) => {
                console.log("getAllRisks > err=", err);
               
                reject("Request error!");
              });
          } catch (error) {
            console.error("getAllRisks error!==", error);
            reject("getAllRisks error!");
          }
        });
      }, []);
    return (
    <>
        <div class="asset-rating">
            <p>Risks Ratings</p>
            <p className="orange-total">Total<br/>{totalRisks}</p>
            <p>High<br/>{highRisks}</p>
            <p>Medium<br/>{mediumRisks}</p>
            <p>Low<br/>{lowRisks}</p>
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
        <div className=""><div className="Impact-level">
  Impact
</div></div><div className="Level"><span className="H">
  H
</span><span className="M">
  M
</span><span className="M">
  L
</span></div>
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
    <div className="Level-bottom"><span className="H">
       H
      </span><span className="M">
        M
      </span><span className="M">
         L
      </span>
      </div>
        <div className="Likelihood-r">
            Likelihood
            </div>      
               </div>
               
            <div className="col-4">
                <div className="Overall-Rating-threat">
                    Impact
                </div>
                <div className="Group-1359"><div className="V-T-Color">
                <HSBar
          showTextDown       
          id="hsbarExample"
          data={[
            { value: 8, description: "H", color: "#09375f" },
            { value: 5, description: "M", color: "#126dba" },
            { value: 22, description: "L", color:"#72b7f2" }
          ]}
        />
               {/* <div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                    <span className="span-H">
                         H
                    </span>
                    <span className="span-M">
                         M
                    </span>
                    <span className="span-L">
                         L
                    </span>*/}
    </div>
            </div>   
            <div className="Overall-Rating-threat">
                    Likelihood
                </div>
                <div className="Group-1359"><div className="V-T-Color">
                <HSBar
          showTextDown       
          id="hsbarExample"
          data={[
            { value: 8, description: "H", color: "#09375f" },
            { value: 1, description: "M", color: "#126dba" },
            { value: 2, description: "L", color:"#72b7f2" }
          ]}
        />
                 {/*<div className="Dark-Blue-Color"><div className="Light-Blue-Color"><div className="Grey-Color"></div></div></div>
                    <span className="span-H">
                         H
                    </span>
                    <span className="span-M">
                         M
                    </span>
                    <span className="span-L">
                         L
                    </span>*/}
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