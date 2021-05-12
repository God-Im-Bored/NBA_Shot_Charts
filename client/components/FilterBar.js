import React from "react";
import axios from "axios";

import PlayerFilter from "./PlayerFilter";
import SegmentFilter from "./SegmentFilter";

import {
  Accordion,
  AccordionSummary,
  AccordionActions,
  Button,
  Divider,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: {
        player: null,
        season: null,
        type: null,
        segment: null,
      },
      profile: {
        id: null,
        name: null,
        team: null,
        shots: {},
        data: {}
      },
      shots: [],
      season: [],
      type: ["Regular Season", "Pre Season", "Playoffs", "All Star"],
      segment: null,
    };
    // this.handleChange = this.handleChange.bind(this)
    this.handlePlayer = this.handlePlayer.bind(this);
    this.handleSegment = this.handleSegment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handlePlayer(playerInput) {
    this.props.nameCallback(playerInput);

    return this.setState((prevState) => ({
      userInput: {
        ...prevState.userInput,
        player: playerInput,
      },
    }));
  }

  handleSegment(segmentInput) {
    return this.setState((prevState) => ({
      userInput: {
        ...prevState.userInput,
        segment: segmentInput,
      },
    }));
  }

  async handleSubmit() {
    const response = await fetch(
      `http://localhost:5000/player_info/${this.state.userInput.player}`
    );
    const data = await response.json();

    this.setState({ shots: data.player_data.resultSets[0].rowSet });
    
    data.player_data
      ? this.props.idCallback(data.player_data.parameters.PlayerID)
      : console.log("no player id");

    /*
    -- Shots Object --
    array of attempted field goals --> data.player_data.resultsets[0].rowSet
    */
    let sca = data.player_data.resultSets[0].rowSet

    // set team, id and name (from most recent game) on profile
    this.setState((prevState) => ({
      profile: {
        ...prevState.profile,
        id: sca[sca.length - 1][3],
        name: sca[sca.length - 1][4],
        team: sca[sca.length - 1][6]
      }
    }))

    // set data object on profile
    let made = 0, missed = 0, made3 = 0, missed3 = 0, made2 = 0, missed2 = 0, madeRA = 0, missedRA = 0, madePaint = 0, missedPaint = 0, madeMR = 0, missedMR = 0, madeATB3 = 0, missedATB3 = 0, madeLCor = 0, missedLCor = 0, madeRCor = 0, missedRCor = 0, madeBC = 0, missedBC = 0, madeITP = 0, missedITP = 0
    for (let i = 0; i < sca.length; i++) {
      // shot value info
      if (sca[i][10] === 'Made Shot' && sca[i][12] === '2PT Field Goal') {
        made2++
        made++
      } else if (sca[i][10] === 'Missed Shot' && sca[i][12] === '2PT Field Goal') {
        missed2++
        missed++
      } else if (sca[i][10] === 'Made Shot' && sca[i][12] === '3PT Field Goal') {
        made3++
        made++
      } else {
        missed3++
        missed++
      }  

      // shot zone makes/misses
      if (sca[i][13] === 'Restricted Area' && sca[i][10] === 'Made Shot') {
        madeRA++
      } else {
        if (sca[i][13] === 'Restricted Area' && sca[i][10] === 'Missed Shot') {
          missedRA++
        }
      }

      if (sca[i][13] === 'In The Paint (Non-RA)' && sca[i][10] === 'Made Shot') {
        madeITP++
      } else {
        if (sca[i][13] === 'In The Paint (Non-RA)' && sca[i][10] === 'Missed Shot') {
          missedITP++
        }
      }

      if (sca[i][13] === 'Mid-Range' && sca[i][10] === 'Made Shot') {
        madeMR++
      } else {
        if (sca[i][13] === 'Mid-Range' && sca[i][10] === 'Missed Shot') {
          missedMR++
        }
      }

      if (sca[i][13] === 'Above the Break 3' && sca[i][10] === 'Made Shot') {
        madeATB3++
      } else {
        if (sca[i][13] === 'Above the Break 3' && sca[i][10] === 'Missed Shot') {
          missedATB3++
        }
      }

      if (sca[i][13] === 'Left Corner 3'  && sca[i][10] === 'Made Shot') {
        madeLCor++
      } else {
        if (sca[i][13] === 'Left Corner 3'  && sca[i][10] === 'Missed Shot') {
          missedLCor++
        }
      }

      if (sca[i][13] === 'Right Corner 3' && sca[i][10] === 'Made Shot') {
        madeRCor++
      } else {
        if (sca[i][13] === 'Right Corner 3' && sca[i][10] === 'Missed Shot') {
          missedRCor++
        }
      }

      if (sca[i][13] === 'Backcourt' && sca[i][10] === 'Made Shot') {
        madeBC++
      } else {
        if (sca[i][13] === 'Backcourt' && sca[i][10] === 'Missed Shot') {
          missedBC++
        }
      }

    }

    // shot [x, y] and seasons
    let year = null
    const map = {}
    for (let i = 0; i < sca.length; i++) {
      let gameDay = sca[i][21], date = gameDay.toString(), year = date.slice(0, 4), month = date.slice(4, 6)
      const leap = year - 1, x = sca[i][17], y = sca[i][18]

      if (month >= 8 || month <= 6 && year - 1 === leap) {
        if (!map[year]) {
          map[year] = []
          map[year].push([x, y])
        } else {
          map[year].push([x, y])
        }
  
    }

  }

    this.setState((prevState) => ({
      profile: {
        ...prevState.profile,
        shots: map
      }
    }))

    const twoFreq = (made2 + missed2) / (made + missed)
    const twoFG = made2 / (made2 + missed2)

    const threeFreq = (made3 + missed3) / (made + missed)
    const threeFG = made3 / (made3 + missed3)

    this.setState((prevState) => ({
      profile:{
        ...prevState.profile,
        data: {
          shotValue: {
            twos: [made2, (made2 + missed2), twoFreq.toFixed(2), twoFG.toFixed(2)],
            threes: [made3, (made3 + missed3), threeFreq.toFixed(2), threeFG.toFixed(2)],
            total: [made, (made + missed)]
          },
          shotZone: {
            RA: [madeRA, (madeRA + missedRA), ((madeRA + missedRA) / (made + missed)).toFixed(2), (madeRA / (madeRA + missedRA)).toFixed(2)],
            Paint: [madeITP, (madeITP + missedITP), ((madeITP + missedITP) / (made + missed)).toFixed(2), (madeITP / (madeITP + missedITP)).toFixed(2)],
            MR: [madeMR, (madeMR + missedMR), ((madeMR + missedMR) / (made + missed)).toFixed(2), (madeMR / (madeMR + missedMR)).toFixed(2)],
            ATB3: [madeATB3, (madeATB3 + missedATB3), ((madeATB3 + missedATB3) / (made + missed)).toFixed(2), (madeATB3 / (madeATB3 + missedATB3)).toFixed(2)],
            lCOR: [madeLCor, (madeLCor + missedLCor), ((madeLCor + missedLCor) / (made + missed)).toFixed(2), (madeLCor / (madeLCor + missedLCor)).toFixed(2)],
            rCOR: [madeRCor, (madeRCor + missedRCor), ((madeRCor + missedRCor) / (made + missed)).toFixed(2), (madeRCor / (madeRCor + missedRCor)).toFixed(2)],
            BC: [madeBC, (madeBC + missedBC), ((madeBC + missedBC) / (made + missed)).toFixed(2), (madeBC / (madeBC + missedBC)).toFixed(2)]

          }
        }
      }
    }))

    this.props.chartDataCallback(this.state.profile.data)
    this.props.graphDataCallback(this.state.profile.shots)


  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      shots: [],
    });
  }

  render() {
    return (
      <div id="filter-bar-main">
        <Accordion>
          <AccordionSummary
            id="filter-bar"
            aria-controls="filter-bar-content"
            expandIcon={<ExpandMoreIcon />}
          >          
            <div id="filter-label-column">
              <Typography id="filter-bar-label">Search Options</Typography>
            </div>
          </AccordionSummary>
          <PlayerFilter
            playerCallback={this.handlePlayer}
            playersList={this.props.players}
            namesList={
              Array.isArray(this.props.players.data)
                ? this.props.players.data.map((player) => player.full_name)
                : []
            }
          />
          {/* <SegmentFilter segmentCallback={this.handleSegment} /> */}
          <Divider />
          <AccordionActions>
            <Button
              id="submit-btn"
              onClick={this.handleSubmit}
              disableElevation={true}
            >
              Submit
            </Button>
            <Button onClick={this.handleReset} disableElevation={true}>
              Reset
            </Button>
          </AccordionActions>
        </Accordion>
      </div>
    );
  }
}

export default FilterBar;
