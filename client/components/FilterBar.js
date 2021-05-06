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
    // console.log('data -->', data.player_data.resultSets[0].rowSet) // array of ALL shots (arrays) in players career
    this.setState({ shots: data.player_data.resultSets[0].rowSet });
    
    
    data.player_data
      ? this.props.idCallback(data.player_data.parameters.PlayerID)
      : console.log("no player id");
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      shots: [],
    });
  }

  render() {
    console.log('FB state -->', this.state)
    return (
      <div id="filter-bar-main">
        <pre>Filter Bar Component</pre>
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
          <SegmentFilter segmentCallback={this.handleSegment} />
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
