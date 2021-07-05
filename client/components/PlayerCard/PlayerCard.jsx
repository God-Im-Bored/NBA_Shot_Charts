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

import logo from './loader.gif'


const PlayerCard = ({ playerInfo }) => {
  console.log(playerInfo);
  return (
    <div>
      
      <Card className={styles.root}>
        <CardHeader title="NBA" subheader="Player Information"
          avatar={
            <Avatar aria-label='logo' src='/940de4bb883629e952387ad33e5a3374.png'>
            </Avatar>
          }
        />
        <CardMedia
          className={styles.media}
          image='/d5d066ba2fdb5de1412c98ed560d23a3.png'
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
            {playerInfo ? playerInfo.height : ""}
          </Typography>
          <Typography variant="body2" component="h4">
            {playerInfo
              ? playerInfo.weight + " lbs."
              : ""}
          </Typography>
          <Typography variant="body2" component="h4">
            {playerInfo ? playerInfo.tenure + " yrs." : ""}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerCard;
