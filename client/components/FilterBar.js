import React from "react";
import axios from "axios";

import PlayerFilter from "./PlayerFilter";
import SegmentFilter from './SegmentFilter'

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
      players: [],
      teams: [],
      userInput: {
        player: null,
        season: null,
        type: null,
        segment: null
      },
      shots: [],
      season: [],
      type: ['Regular Season', 'Pre Season', 'Playoffs', 'All Star'],
      segment: null
    };
    // this.handleChange = this.handleChange.bind(this)
    this.handlePlayer = this.handlePlayer.bind(this)
    this.handleSegment = this.handleSegment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/players")
      .then((response) => {
        this.setState({ players: response.data });
        return axios.get("http://localhost:5000/teams");
      })
      .then((response) => {
        this.setState({ teams: response.data });
      });
  }

  // handleChange(playerInput, seasonInput, segmentInput, typeInput, ) {
  //   console.log('change viewed')
    
  //   return this.setState(prevState => ({
  //     userInput: {
  //       ...prevState.userInput,
  //       player: playerInput,
  //       segment: segmentInput ? segmentInput : null
  //     }
  //   }))
  // }

  handlePlayer(playerInput) {
    console.log('change viewed from player handler')

    return this.setState(prevState => ({
      userInput: {
        ...prevState.userInput,
        player: playerInput
      }
    }))
  }

  handleSegment(segmentInput) {
    console.log('change viewed from segment handler')

    return this.setState(prevState => ({
      userInput: {
        ...prevState.userInput,
        segment: segmentInput
      }
    }))
  }

  async handleSubmit() {
    const response = await fetch(`http://localhost:5000/player_info/${this.state.userInput.player}`)
    const data = await response.json()
    return this.setState({ shots: data})
  }

  handleReset(event) {
    console.log('reset button clicked')
    event.preventDefault()
    this.setState({
      shots: [],
      
    })

  }

  render() {
    console.log(this.state)
    return (
      <div id="filter-bar-main">
        <pre>Filter Bar Component</pre>
        <Accordion defaultExpanded>
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
            playersList={this.state.players}
            namesList={
              Array.isArray(this.state.players.data)
                ? this.state.players.data.map((player) => player.full_name)
                : []
            }
          />
          <SegmentFilter segmentCallback={this.handleSegment} />
          <Divider />
          <AccordionActions>
            <Button onClick={this.handleSubmit} disableElevation={true}>Submit</Button>
            <Button onClick={this.handleReset} disableElevation={true}>Reset</Button>
          </AccordionActions>
        </Accordion>
      </div>
    );
  }
}

export default FilterBar;
