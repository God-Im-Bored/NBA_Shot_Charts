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
// import logo from './logo.png'
// import logo from './loader.gif'
import generic from './generic-player.png'

const PlayerCard = ({ playerInfo }) => {
  console.log(playerInfo);
  return (
    <div>
      
      <Card className={styles.root}>
        <CardHeader title="NBA" subheader="Player Information"
          avatar={
            <Avatar aria-label='logo'>
              LOGO
            </Avatar>
          }
        />
        <CardMedia
          className={styles.media}
          image={playerInfo ? generic : generic}
          title='player-image'
          />
        <CardContent className={styles.desc}>
          <Typography className={styles.name} variant="body2" component="h4">
            {playerInfo ? playerInfo.name : ""}
          </Typography>
          <Typography variant="body2" component="h4">
            {playerInfo ? playerInfo.team : ""}
          </Typography>
          <Typography variant="body2" component="h4">
            {playerInfo ? playerInfo.position : ""}
          </Typography>
          <Typography variant="body2" component="h4">
            {playerInfo ? "Height:" + playerInfo.height : ""}
          </Typography>
          <Typography variant="body2" component="h4">
            {playerInfo
              ? "Weight:" + playerInfo.weight + "lbs."
              : ""}
          </Typography>
          <Typography variant="body2" component="h4">
            {playerInfo ? playerInfo.tenure + "yrs." : ""}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerCard;
