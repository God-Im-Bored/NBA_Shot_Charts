import React from "react";
import axios from "axios";
import PlayerFilter from "./PlayerFilter";
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
      userInput: null,
      shots: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleChange(input) {
    console.log('change viewed')
    return this.setState({ userInput: input})
  }

  async handleSubmit() {
    const response = await fetch(`http://localhost:5000/player_info/${this.state.userInput}`)
    const data = await response.json()
    return this.setState({ shots: data})
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
            callback={this.handleChange}
            playersList={this.state.players}
            namesList={
              Array.isArray(this.state.players.data)
                ? this.state.players.data.map((player) => player.full_name)
                : []
            }
          />
          <Divider />
          <AccordionActions>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </AccordionActions>
        </Accordion>
      </div>
    );
  }
}

export default FilterBar;
