import React, { useEffect, useState } from "react";
import * as crossfilter from "crossfilter2";
import { csv, timeFormat, timeParse, timeMonth, format } from "d3";
import { getStaticThreats, getAgents } from "../services/threatService";
import SummaryBarChart from "./db-visuals/SummaryBarChart";
import SummaryStackedChart from "./db-visuals/SummaryStackedChart";
import HSBar from "react-horizontal-stacked-bar-chart";

export const ThreatsDashboardVisual = () => {
  const [data, setData] = useState([]);
  const map = {
    0: 0,
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 60,
    7: 70,
    8: 80,
    9: 90,
  };


  const [totalThreats, setTotalThreats] = useState(null);
  const [highThreats, setHighThreats] = useState(null);
  const [mediumThreats, setMediumThreats] = useState(null);
  const [lowThreats, setLowThreats] = useState(null);
  const [highThreatsImpact, setHighThreatsImpact] = useState(null);
  const [mediumThreatsImpact, setMediumThreatsImpact] = useState(null);
  const [lowThreatsImpact, setLowThreatsImpact] = useState(null);
  const [highThreatsLikelihood, setHighThreatsLikelihood] = useState(null);
  const [mediumThreatsLikelihood, setMediumThreatsLikelihood] = useState(null);
  const [lowThreatsLikelihood, setLowThreatsLikelihood] = useState(null);
  const [agentsRating, setAgentsRating] = useState([]);
  const [agentsImpact, setAgentsImpact] = useState([]);
  const [agentsLikelihood, setAgentsLikelihood] = useState([]);

  console.log("-------------", agentsLikelihood);

  useEffect(() => {
    console.log("in detail");
    const storedUser = localStorage.getItem("storedUser");
    const parsedUser = JSON.parse(storedUser);

    return new Promise((resolve, reject) => {
      try {
        // do db call or API endpoint axios call here and return the promise.
        getStaticThreats()
          .then((res) => {
            setTotalThreats(res.static.numberThreat[0].total_Threat);
            setHighThreats(res.static.highThreat[0].high_Threat);
            setMediumThreats(res.static.mediumThreat[0].mediun_Threat);
            setLowThreats(res.static.lowThreat[0].low_Threat);
            setAgentsRating(res.Agents.AgentsRating);
            setAgentsImpact(res.Agents.AgentsImpact);
            setAgentsLikelihood(res.Agents.AgentsLikelihood);
            setHighThreatsImpact(res.visual.highThreatImpact[0].high_Threat);
            setLowThreatsImpact(res.visual.lowThreatImpact[0].low_Threat);
            setMediumThreatsImpact(
              res.visual.mediumThreatImpact[0].mediun_Threat
            );
            setHighThreatsLikelihood(
              res.visual.mediumThreatLikelihood[0].mediun_Threat
            );
            setMediumThreatsLikelihood(
              res.visual.mediumThreatLikelihood[0].mediun_Threat
            );
            setLowThreatsLikelihood(
              res.visual.mediumThreatLikelihood[0].mediun_Threat
            );
            // setData(data)
            // setAgentsRating(res.Agents.AgentsRating)
            // setAgentsImpact(res.Agents.AgentsImpact)
            // setAgentsLikelihood(res.Agents.AgentsLikelihood)
          })
          .catch((err) => {
            console.log("getAllThreats > err=", err);

            reject("Request error!");
          });
      } catch (error) {
        console.error("getAllThreats error!==", error);
        reject("getAllThreats error!");
      }
    });
  }, []);

  useEffect(() => {
    console.log("data@@@@@@@@@@", data);
    // console.log("data....", data.highAssetConfidentiality, data.mediumAssetConfidentiality, data.lowAssetConfidentiality)
    // console.log(data.agentsRating[0].agent)
  }, [data]);

  return (
    <>
      <div class="asset-rating">
        <p>Threats Ratings</p>
        <p className="orange-total">
          Total
          <br />
          {totalThreats}
        </p>
        <p>
          High
          <br />
          {highThreats}
        </p>
        <p>
          Medium
          <br />
          {mediumThreats}
        </p>
        <p>
          Low
          <br />
          {lowThreats}
        </p>
      </div>

      <div className="row g-2 visual-rating-threat">
        <div className=" col-4">
          <div className="Overall-Rating-threat">Overall Rating</div>
          <div className="V-T-Color">
            <HSBar
              showTextDown
              id="hsbarExample"
              data={[
                {
                  value: parseInt(highThreats),
                  name: "H",
                  description: `${highThreats}`,
                  color: "#09375f",
                },
                {
                  value: parseInt(mediumThreats),
                  name: "M",
                  description: `${mediumThreats}`,
                  color: "#126dba",
                },
                {
                  value: parseInt(lowThreats),
                  name: "L",
                  description: `${lowThreats}`,
                  color: "#72b7f2",
                },
              ]}
            />
          </div>
          <div className="grey-threat">
            <div className="Top-3-threat-agents-with-High-Overall-ratings">
              Top 3 threat agents with High Overall ratings:
            </div>

            {agentsRating.map((agent) => (
              <div className="Rectangle-1407">
                <span className="text-thr">{agent.agent}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-4">
          <div className="Overall-Rating-threat">Impact</div>
          <div className="V-T-Color">
            <HSBar
              showTextDown
              id="hsbarExample"
              data={[
                {
                  value: parseInt(highThreatsImpact),
                  name: "H",
                  description: `${highThreatsImpact}`,
                  color: "#09375f",
                },
                {
                  value: parseInt(mediumThreatsImpact),
                  name: "M",
                  description: `${mediumThreatsImpact}`,
                  color: "#126dba",
                },
                {
                  value: parseInt(lowThreatsImpact),
                  name: "L",
                  description: `${lowThreatsImpact}`,
                  color: "#72b7f2",
                },
              ]}
            />
          </div>
          <div className="grey-threat">
            <div className="Top-3-threat-agents-with-High-Overall-ratings">
              Top 3 threat agents with High Impact:
            </div>
            {agentsImpact.map((agent) => (
              <div div className="Rectangle-1407">
                <span className="text-thr">{agent.agent}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-4">
          <div className="Overall-Rating-threat">Likelihood</div>
          <div className="V-T-Color">
            <HSBar
              showTextDown
              id="hsbarExample"
              data={[
                {
                  value: parseInt(highThreatsLikelihood),
                  name: "H",
                  description: `${highThreatsLikelihood}`,
                  color: "#09375f",
                },
                {
                  value: parseInt(mediumThreatsLikelihood),
                  name: "M",
                  description: `${mediumThreatsLikelihood}`,
                  color: "#126dba",
                },
                {
                  value: parseInt(lowThreatsLikelihood),
                  name: "L",
                  description: `${lowThreatsLikelihood}`,
                  color: "#72b7f2",
                },
              ]}
            />
          </div>

          {/* </div>     */}
          <div className="grey-threat">
            <div className="Top-3-threat-agents-with-High-Overall-ratings">
              Top 3 threat agents with High Likelihood:
            </div>
            {agentsLikelihood.map((agent) => (
              <div className="Rectangle-1407">
                <span className="text-thr">{agent.agent}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ThreatsDashboardVisual;
