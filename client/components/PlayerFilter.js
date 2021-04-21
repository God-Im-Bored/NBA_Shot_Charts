import React from "react";
import "regenerator-runtime/runtime";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

class PlayerFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shots: [],
      input: "",
    };
    this.onTrigger = this.onTrigger.bind(this)
  }

  onTrigger(event, name) {
    this.props.playerCallback(name)
    event.preventDefault();
  }

  render() {
    return (
      <div id="player-filter-main">
        <Autocomplete
          id="names-list"
          options={
            Array.isArray(this.props.namesList) ? this.props.namesList : []
          }
          onChange={this.onTrigger}
          getOptionLabel={(name) => name}
          clearOnEscape
          renderInput={(params) => (
            <TextField
              {...params}
              required
              label="Player"
              variants="outlined"
            />
          )}
          style={{ width: 600 }}
        />
      </div>
    );
  }
}

export default PlayerFilter;
