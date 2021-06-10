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
        {props.data ? (
            Object.entries(props.data.shotValue).map((type, i) => {
              // console.log(type[0]),
             <pre>type[0]</pre>
             

              {/* <tr key={type[0]}>
                <th>type[0]</th>
                <td>{type[0]}</td>
                {type[1].map((value) => (
                  <td key={value}>{type[1].value}</td>
                ))}
              </tr>; */}

             

            })
          ) : (
            <pre>Hi</pre>
            // <tbody>
            //   <tr>
            //     <th>twos</th>
            //   </tr>
            //   <tr>
            //     <th>threes</th>
            //   </tr>
            //   <tr>
            //     <th>total</th>
            //   </tr>
            // </tbody>
          )}
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
