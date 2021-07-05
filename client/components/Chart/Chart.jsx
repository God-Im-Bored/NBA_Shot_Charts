import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const Chart = ({ shotTypes, shotZones }) => {
  const typeHeaders = ["Shot Type", "Made", "Missed", "Total", "FG%"];
  //   const zoneHeaders = ['', 'made', 'total', 'frequency', 'FG%']
  const types = ["2", "3", "Total"];
  //   const zones = ["Restricted Area", "Paint", "Midrange", "ABT3", "Left Corner", "Right Corner", "Backcourt"]

  console.log(shotTypes);
  return (
    <div>
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
                    <TableCell>{data[0]}</TableCell>
                    <TableCell>{data[1]}</TableCell>
                    <TableCell>{data[2]}</TableCell>
                    <TableCell>{data[3]}</TableCell>
                  </TableRow>
                );
              })
            : types.map((k, i) => {
                return (
                  <TableRow key={k}>
                    <TableCell component="th" scope="row">
                      {types[i]}
                    </TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                  </TableRow>
                );
              })}
        </TableBody>
      </Table>
      {/* <table>
        <thead>
          <tr>
            {typeHeaders.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {shotTypes
            ? Object.keys(shotTypes).map((k, i) => {
                let data = shotTypes[k];
                return (
                  <tr key={i}>
                    <td>{k}</td>
                    <td>{data[0]}</td>
                    <td>{data[1]}</td>
                    <td>{data[2]}</td>
                    <td>{data[3]}</td>
                  </tr>
                );
              })
            : types.map((k, i) => {
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
    </div>
  );
};

export default Chart;
