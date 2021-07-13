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

  const headers = [
    "Name",
    "Team",
    "Experience",
    "Position",
    "Height",
    "Weight",
  ];

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
        {playerInfo ? (
          <CardMedia
            className={styles.media}
            image={playerInfo.Headshot}
            title="player-image"
          />
        ) : (
          <CardMedia
            className={styles.media}
            image="/d5d066ba2fdb5de1412c98ed560d23a3.png"
            title="player-image"
          />
        )}

        <CardContent>
          <table>
            <thead>
              {playerInfo
                ? Object.entries(playerInfo).map((key, idx) => (
                    <tr key={idx}>
                      <td>
                        <Typography
                          className={styles.name}
                          variant="body2"
                          component="h2"
                        >
                          {key[0]} :
                        </Typography>
                      </td>
                      <td>
                        <Typography>{key[1]}</Typography>
                      </td>
                    </tr>
                  ))
                : headers.map((header, idx) => (
                    <tr key={idx}>
                      <td>
                        <Typography
                          className={styles.name}
                          variant="body2"
                          component="h2"
                        >
                          {header} :
                        </Typography>
                      </td>
                    </tr>
                  ))}
            </thead>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerCard;
