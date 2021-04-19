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
    };
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

  render() {
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
            playersList={this.state.players}
            namesList={
              Array.isArray(this.state.players.data)
                ? this.state.players.data.map((player) => player.full_name)
                : []
            }
          />
          <Divider />
          <AccordionActions>
            <Button size="small">Submit</Button>
          </AccordionActions>
        </Accordion>
      </div>
    );
  }
}

export default FilterBar;
