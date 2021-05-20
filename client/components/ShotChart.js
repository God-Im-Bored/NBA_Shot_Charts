import React from "react";

import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

const ShotChart = (props) => {
  const classes = useStyles();

  return (
    <div id="player-shot-chart-main">
      <Card className={classes.root}>
        <CardHeader title="Field Goal Breakdown" subheader="Player Shot Info" />
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>League</th>
            </tr>
            <tr>
              <th>Shot Value</th>

              <th>FGM</th>
              <th>FMA</th>
              <th>PPS</th>
              <th>Freq</th>
              <th>PPS</th>
              <th>Freq</th>
            </tr>
          </thead>
          {props.data ? (
            Object.entries(props.data.shotValue).map((type) => {
              <tr key={type[0]}>
                <td>{type[0]}</td>
                {type[1].map((value) => (
                  <td key={value}>{type[1].value}</td>
                ))}
              </tr>;
            })
          ) : (
            <tbody>
              <tr>
                <th>3 Pt Shots</th>
              </tr>
              <tr>
                <th>2 Pt Shots</th>
              </tr>
              <tr>
                <th>Total</th>
              </tr>
            </tbody>
          )}
          <tbody>
            <tr>
              <th>Shot Zone</th>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ShotChart;
