import React from "react";
import {
  Card,
  CardMedia,
 
} from "@material-ui/core";
import { Scatter } from "react-chartjs-2";

const styles = {
  root: {
    width: 650,
  },
};

const Graph = ({ shots }) => {
  const shotGraph = shots ? (
    <Scatter
      options={{
        responsive: true,
        layout: 4,
        plugins: {
          legend: true,
          position: "chartArea",
          fullSize: true,
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
            max: 250
          },
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
            max: 350
          },
        },
      }}
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
  ) : (
    <img src="court.png" height="575" width='650' />
  );

  return (
    <div>
      <Card style={styles.root}>
        {shotGraph}
      </Card>
    </div>
  );
};

export default Graph;
