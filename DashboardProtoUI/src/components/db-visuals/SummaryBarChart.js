import React from "react";
import * as d3 from "d3";

export const SummaryBarChart = ({ data }) => {
  // Set the dimensions and margins of the graph
  // Can't you just fit in and give me round corners already???
  const width = 600,
    height = 300;
  const margin = { top: 20, bottom: 0, left: 40, right: 20 };
  const svgWidth = width - margin.left - margin.right;
  const svgHeight = height - margin.top - margin.bottom;

  const svgRef = React.useRef(null);

  React.useEffect(() => {
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove();

    const svg = svgEl
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			
    const x0 = d3.scale.ordinal().rangeRoundBands([0, svgWidth], 0.4);

    const x1 = d3.scale.ordinal();

    const y = d3.scale.linear().domain([0, 50]).range([svgHeight, 0]);

    const color = d3.scale.ordinal().range(["#09375f", "#126dba", "#72b7f2"]);

    const xAxis = d3.svg.axis().scale(x0).orient("bottom");

    const yAxis = d3.svg.axis().scale(y).orient("left");

    const ageNames = d3.keys(data[0]).filter(function (key) {
      return key !== "group";
    });

    data.forEach(function (d) {
      d.ages = ageNames.map(function (name) {
        return { name: name, value: +d[name] };
      });
    });

    x0.domain(
      data.map(function (d) {
        return d.group;
      })
    );
    x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
    y.domain([
      0,
      d3.max(data, function (d) {
        return d3.max(d.ages, function (d) {
          return d.value;
        });
      }),
    ]);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + svgHeight + ")")
      .call(xAxis);

    svg.append("g").attr("class", "y-axis").call(yAxis);

    const state = svg
      .selectAll(".group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "group")
      .attr("transform", function (d) {
        return "translate(" + x0(d.group) + ",0)";
      });

    state
      .selectAll("rect")
      .data(function (d) {
        return d.ages;
      })
      .enter()
      .append("rect")
      .attr("width", 16)
      .attr("x", function (d) {
        return x1(d.name);
      })
      .attr("y", function (d) {
        return y(d.value);
      })
      .attr("height", function (d) {
        return height - y(d.value);
      })
      .style("fill", function (d) {
        return color(d.name);
      });
  });

  return <svg ref={svgRef} width={svgWidth} height={svgHeight} />;
};

export default SummaryBarChart;
