import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionActions,
  Button,
  Divider,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


class FilterBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      teams: [],
    };
    
  }

  

  render() {
    return (
      <div id='filter-bar-main'>
        <pre>Filter Bar Component</pre>
        <Accordion defaultExpanded>
          <AccordionSummary id='filter-bar' aria-controls='filter-bar-content' expandIcon={<ExpandMoreIcon />}>
            <div id='filter-label-column'>
              <Typography id='filter-bar-label'>Search Options</Typography>
            </div>
          </AccordionSummary>
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
