'use strict'

import axios from "axios";
import "regenerator-runtime/runtime";

// const Buffer = require('buffer/').Buffer
// const fs = require('fs')
const playersUrl = "http://localhost:5000/players";


export const fetchPlayers = async () => {
  try {
    const { data } = await axios.get(playersUrl);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchPlayerData = async (playerName, seasonYear) => {
  let customUrl = `http://localhost:5000/player_info/${playerName}/${seasonYear}`;

  try {
    if (playerName && seasonYear) {
      // player_data.resultSets[0].rowSet === shots array

      const {
        data: { player_data },
      } = await axios.get(customUrl);

      // shots array data and player id retrieved from api request
      const shotsArr = player_data.resultSets[0].rowSet;
      const playerId = player_data.resultSets[0].rowSet[0][3];

      const cardInfoUrl = `http://localhost:5000/card_info/${playerId}`;
      const cardHeadshot = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`;

      const {
        data: { data },
      } = await axios.get(cardInfoUrl);

      // common player info and player headshot retrieved from api request
      const commonPlayerInfo = data.resultSets[0].rowSet;
      const res = await axios.get(cardHeadshot)

      // convert a base64 data into an image; Base64 --> Buffer --> Image
      // const buffer = Buffer.from(res.data, 'base64')
      // console.log(buffer)
      // fs.writeFileSync('new-path.png', buffer)



      let info = {
        // img: playerHeadshot.data,
        name: commonPlayerInfo[0][3],
        position: commonPlayerInfo[0][15],
        height: commonPlayerInfo[0][11],
        weight: commonPlayerInfo[0][12],
        team: commonPlayerInfo[0][19],
        tenure: commonPlayerInfo[0][13],
      };

      const len = shotsArr.length;

      let player = {
        info,
        shotTypeData: { 2: [], 3: [], Total: [] },
        shotZoneData: {
          Restricted_Area: [],
          Paint: [],
          Midrange: [],
          Above_The_Break_3: [],
          lCOR: [],
          rCOR: [],
          Backcourt: [],
        },
        data: {
          madeShots: [],
         missedShots: []
        },
      };

      let made = 0,
        missed = 0,
        made3 = 0,
        missed3 = 0,
        made2 = 0,
        missed2 = 0,
        madeRA = 0,
        missedRA = 0,
        madeMR = 0,
        missedMR = 0,
        madeATB3 = 0,
        missedATB3 = 0,
        madeLCor = 0,
        missedLCor = 0,
        madeRCor = 0,
        missedRCor = 0,
        madeBC = 0,
        missedBC = 0,
        madeITP = 0,
        missedITP = 0;

      for (let i = 0; i < len; i++) {

        // separate made/missed shots
        if (shotsArr[i][10] === 'Made Shot') {
          // data array that contains [x, y] loc of each shot
          player.data.madeShots.push([shotsArr[i][17], shotsArr[i][18]])
        } else {
          player.data.missedShots.push([shotsArr[i][17], shotsArr[i][18]])
        }
      

        // shot type make/misses
        if (
          shotsArr[i][10] === "Made Shot" &&
          shotsArr[i][12] === "2PT Field Goal"
        ) {
          made2++;
          made++;
        } else if (
          shotsArr[i][10] === "Missed Shot" &&
          shotsArr[i][12] === "2PT Field Goal"
        ) {
          missed2++;
          missed++;
        } else if (
          shotsArr[i][10] === "Made Shot" &&
          shotsArr[i][12] === "3PT Field Goal"
        ) {
          made3++;
          made++;
        } else {
          missed3++;
          missed++;
        }

        // shot zone makes/misses
        if (
          shotsArr[i][13] === "Restricted Area" &&
          shotsArr[i][10] === "Made Shot"
        ) {
          madeRA++;
        } else {
          if (
            shotsArr[i][13] === "Restricted Area" &&
            shotsArr[i][10] === "Missed Shot"
          ) {
            missedRA++;
          }
        }

        if (
          shotsArr[i][13] === "In The Paint (Non-RA)" &&
          shotsArr[i][10] === "Made Shot"
        ) {
          madeITP++;
        } else {
          if (
            shotsArr[i][13] === "In The Paint (Non-RA)" &&
            shotsArr[i][10] === "Missed Shot"
          ) {
            missedITP++;
          }
        }

        if (
          shotsArr[i][13] === "Mid-Range" &&
          shotsArr[i][10] === "Made Shot"
        ) {
          madeMR++;
        } else {
          if (
            shotsArr[i][13] === "Mid-Range" &&
            shotsArr[i][10] === "Missed Shot"
          ) {
            missedMR++;
          }
        }

        if (
          shotsArr[i][13] === "Above the Break 3" &&
          shotsArr[i][10] === "Made Shot"
        ) {
          madeATB3++;
        } else {
          if (
            shotsArr[i][13] === "Above the Break 3" &&
            shotsArr[i][10] === "Missed Shot"
          ) {
            missedATB3++;
          }
        }

        if (
          shotsArr[i][13] === "Left Corner 3" &&
          shotsArr[i][10] === "Made Shot"
        ) {
          madeLCor++;
        } else {
          if (
            shotsArr[i][13] === "Left Corner 3" &&
            shotsArr[i][10] === "Missed Shot"
          ) {
            missedLCor++;
          }
        }

        if (
          shotsArr[i][13] === "Right Corner 3" &&
          shotsArr[i][10] === "Made Shot"
        ) {
          madeRCor++;
        } else {
          if (
            shotsArr[i][13] === "Right Corner 3" &&
            shotsArr[i][10] === "Missed Shot"
          ) {
            missedRCor++;
          }
        }

        if (
          shotsArr[i][13] === "Backcourt" &&
          shotsArr[i][10] === "Made Shot"
        ) {
          madeBC++;
        } else {
          if (
            shotsArr[i][13] === "Backcourt" &&
            shotsArr[i][10] === "Missed Shot"
          ) {
            missedBC++;
          }
        }
      }

      // shot types makes/misses/FG%
      player.shotTypeData[2].push(
        made2,
        missed2,
        made2 + missed2,
        (made2 / (made2 + missed2)).toFixed(3)
      );

      player.shotTypeData[3].push(
        made3,
        missed3,
        made3 + missed3,
        (made3 / (made3 + missed3)).toFixed(3)
      );

      player.shotTypeData["Total"].push(
        made,
        missed,
        made + missed,
        (made / (made + missed)).toFixed(3)
      );

      // shot zone makes/misses/FG%
      player.shotZoneData["Restricted_Area"].push(
        madeRA,
        madeRA + missedRA,
        ((madeRA + missedRA) / (made + missed)).toFixed(2),
        (madeRA / (madeRA + missedRA)).toFixed(3)
      );

      player.shotZoneData["Paint"].push(
        madeITP,
        madeITP + missedITP,
        ((madeITP + missedITP) / (made + missed)).toFixed(2),
        (madeITP / (madeITP + missedITP)).toFixed(3)
      );

      player.shotZoneData["Midrange"].push(
        madeMR,
        madeMR + missedMR,
        ((madeMR + missedMR) / (made + missed)).toFixed(2),
        (madeMR / (madeMR + missedMR)).toFixed(3)
      );

      player.shotZoneData["Above_The_Break_3"].push(
        madeATB3,
        madeATB3 + missedATB3,
        ((madeATB3 + missedATB3) / (made + missed)).toFixed(2),
        (madeATB3 / (madeATB3 + missedATB3)).toFixed(3)
      );

      player.shotZoneData["lCOR"].push(
        madeLCor,
        madeLCor + missedLCor,
        ((madeLCor + missedLCor) / (made + missed)).toFixed(2),
        (madeLCor / (madeLCor + missedLCor)).toFixed(3)
      );

      player.shotZoneData["rCOR"].push(
        madeRCor,
        madeRCor + missedRCor,
        ((madeRCor + missedRCor) / (made + missed)).toFixed(2),
        (madeRCor / (madeRCor + missedRCor)).toFixed(3)
      );

      player.shotZoneData["Backcourt"].push(
        madeBC,
        madeBC + missedBC,
        ((madeBC + missedBC) / (made + missed)).toFixed(2),
        (madeBC / (madeBC + missedBC)).toFixed(3)
      );
      
      return player;
    }
  } catch (err) {
    console.log(err);
  }
};
