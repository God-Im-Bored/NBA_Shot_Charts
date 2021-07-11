import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
} from "@material-ui/core";
import styles from "./Card.module.css";

const PlayerCard = ({ playerInfo }) => {
  const headers = ["Name", "Team", "Position", "Height", "Weight", "Tenure"];

  console.log(Object.entries(playerInfo ? playerInfo : {}));

  return (
    <div>
      <Card className={styles.root}>
        <CardHeader
          title="NBA"
          subheader="Player Information"
          avatar={
            <Avatar
              aria-label="logo"
              src="/940de4bb883629e952387ad33e5a3374.png"
            ></Avatar>
          }
        />
        <CardMedia
          className={styles.media}
          image="/d5d066ba2fdb5de1412c98ed560d23a3.png"
          title="player-image"
        />
        <CardContent className={styles.desc}>
          <table>
            <thead>
              {headers.map((header, idx) => (
                <tr key={idx}>
                  <td>
                    <Typography
                      className={styles.name}
                      variant="body2"
                      component="h2"
                    >
                      {header}
                    </Typography>
                  </td>
                  </tr>
                  
              ))}
            </thead>
            {/* <tbody>
            <tr>
                    {playerInfo
                      ? Object.values(playerInfo).map((desc) => (
                          
                            <td>
                              <Typography >{desc}</Typography>
                            </td>
                          
                        ))
                      : ""}
                  
                </tr>
            </tbody> */}
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerCard;
