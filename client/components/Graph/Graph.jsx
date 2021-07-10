import React from "react";
import { Scatter } from "react-chartjs-2";

const Graph = ({ shots }) => {
  const court = document.getElementById("court");

  const shotGraph = shots ? (
    <Scatter
      // options={{
      //     scales: {
      //         y: {

      //         }
      //     }
      // }}
      data={{
        datasets: [
          {
            data: shots.madeShots ? shots.madeShots.map((made) => made) : [],
            label: "Made",
            borderColor: "#04724D",
            fill: false,
          },
          {
            data: shots.missedShots
              ? shots.missedShots.map((missed) => missed)
              : [],
            label: "Missed",
            borderColor: "rgba(255, 0, 0, 0.5)",
            fill: false,
          },
        ],
      }}
    />
  ) : null;

  return shotGraph;
};

export default Graph;
