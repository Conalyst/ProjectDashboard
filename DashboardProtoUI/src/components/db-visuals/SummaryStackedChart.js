import React from "react";
import * as d3 from "d3v6";

export const SummaryStackedChart = ({ data }) => {
  // Set the dimensions and margins of the graph
  const width = 225,
    height = 50;
  const margin = { top: 5, bottom: 5, left: 5, right: 5 };
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
      .attr("background-color", "#000000");

    const stack = () => {
      const total = d3.sum(data, (d) => d.value);
      let value = 0;
      return data.map((d) => ({
        name: d.name,
        value: d.value / total,
        startValue: value / total,
        endValue: (value += d.value) / total,
      }));
    };

    const x = () => {
      return d3.scaleLinear([0, 1], [margin.left, width - margin.right]);
    };

    const formatPercent = (x) => {
      return x.tickFormat(null, "%");
    };

    const color = d3.scaleOrdinal().range(["#09375f", "#126dba", "#72b7f2"]);

    svg
      .append("g")
      .selectAll("rect")
      .data(stack)
      .join("rect")
        .attr("fill", (d) => color(d.name))
        .attr("x", (d) => x(d.startValue))
        .attr("y", margin.top)
        .attr("width", (d) => x(d.endValue) - x(d.startValue))
        .attr("height", height - margin.top - margin.bottom)
      .append("title");
  });

  return <svg ref={svgRef} width={svgWidth} height={svgHeight} />;
};

export default SummaryStackedChart;
