import React from "react";
import {
  Card,
  Divider,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const Chart = ({ shotTypes, shotZones }) => {
  const typeHeaders = ["Shot Type", "Made", "Missed", "Total", "FG%"];
  const zoneHeaders = ["Zone Type", "Made", "Total", "Frequency", "FG%"];
  const types = ["2", "3", "Total"];
    const zones = ["Restricted Area", "Paint", "Midrange", "ABT3", "Left Corner", "Right Corner", "Backcourt"]

  
  return (
    <div>
      <TableContainer component={Card}>
        <Table aria-label="shot type table">

          <TableHead>
            <TableRow>
              {typeHeaders.map((h, i) => (
                <TableCell key={i}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {shotTypes
              ? Object.keys(shotTypes).map((k, i) => {
                  let data = shotTypes[k];

                  return (
                    <TableRow key={k}>
                      <TableCell component="th" scope="row">
                        {types[i]}
                      </TableCell>
                      <TableCell align='right'>{data[0]}</TableCell>
                      <TableCell align='right'>{data[1]}</TableCell>
                      <TableCell align='right'>{data[2]}</TableCell>
                      <TableCell align='right'>{data[3]}</TableCell>
                    </TableRow>
                  );
                })
              : types.map((k, i) => {
                  return (
                    <TableRow key={k}>
                      <TableCell component="th" scope="row">
                        {types[i]}
                      </TableCell>
                      <TableCell align='right'>0</TableCell>
                      <TableCell align='right'>0</TableCell>
                      <TableCell align='right'>0</TableCell>
                      <TableCell align='right'>0</TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
        <Divider />
        
        <Table aria-label="shot zone table">
          <TableHead>
            <TableRow>
              {zoneHeaders.map((h, i) => (
                <TableCell key={i}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {shotZones
              ? Object.keys(shotZones).map((k, i) => {
                  let data = shotZones[k];

                  return (
                    <TableRow key={k}>
                      <TableCell component="th" scope="row">
                        {zones[i]}
                      </TableCell>
                      <TableCell align='right'>{data[0]}</TableCell>
                      <TableCell align='right'>{data[1]}</TableCell>
                      <TableCell align='right'>{data[2]}</TableCell>
                      <TableCell align='right'>{data[3]}</TableCell>
                    </TableRow>
                  );
                })
              : zones.map((k, i) => {
                  return (
                    <TableRow key={k}>
                      <TableCell component="th" scope="row">
                        {zones[i]}
                      </TableCell>
                      <TableCell align='right'>0</TableCell>
                      <TableCell align='right'>0</TableCell>
                      <TableCell align='right'>0</TableCell>
                      <TableCell align='right'>0</TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>

        {/* <table>
          <thead>
              <tr>
                  {zoneHeaders.map((h, i) => {
                      <th key={i}>{h}</th>
                  })}
              </tr>
          </thead>
          <tbody>
          {shotZones
            ? Object.keys(shotZones).map((k, i) => {
                let data = shotZones[k];
                return (
                  <tr key={i}>
                    <td>{k}</td>
                    <td>{data[0]}</td>
                    <td>{data[1]}</td>
                    <td>{data[2]}</td>
                    <td>{data[3]}</td>
                    <td>{data[4]}</td>
                  </tr>
                );
              })
            : zones.map((k, i) => {
                return (
                  <tr key={i}>
                    <td>{k}</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                );
              })}

          </tbody>
      </table> */}
      </TableContainer>
    </div>
  );
};

export default Chart;
