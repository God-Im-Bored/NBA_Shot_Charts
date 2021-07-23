import React from "react";
import * as d3 from "d3";

const Graph = ({ shots }) => {
  const width = 480;
  const height = (width / 50) * 47;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  shot_xScale.range([margin.left, innerWidth]).nice();
  shot_yScale.range([margin.top, innerHeight]).nice();

  const svg = d3.select("g");

  if (shots) {
    // const made = svg
    //   .selectAll("svg")
    //   .data(shots.madeShots)
    //   .enter()
    //   .append("circle");

    // const missed = svg
    //   .selectAll("svg")
    //   .data(shots.missedShots)
    //   .enter()
    //   .append("circle");

    // made
    //   .attr("cx", (d) => shot_xScale(d[0]))
    //   .attr("cy", (d) => shot_yScale(d[1]))
    //   .attr("r", 3)
    //   .attr("fill", "green")
    //   .attr("class", "made");

    // missed
    //   .attr("cx", (d) => shot_xScale(d[0]))
    //   .attr("cy", (d) => shot_yScale(d[1]))
    //   .attr("r", 3)
    //   .attr("fill", "red")
    //   .attr("class", "missed");
  }

  return <br></br>;
};

export default Graph;
