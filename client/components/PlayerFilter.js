import React from "react";
import "regenerator-runtime/runtime";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

class PlayerFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shots: [],
      input: ''
    };
    this.handleChange = this.handleChange.bind(this)

  }

  async handleChange(event, name){
    const response = await fetch(`http://localhost:5000/player_info/${name}`)
    const data = await response.json()
    return this.setState(
      { input: event.target.name,
        shots: data
      })
  }

 

  render() {
    console.log(this.state)
    return (
      <div id='player-filter-main'>
        <Autocomplete
          id='names-list'
          options={Array.isArray(this.props.namesList) ? this.props.namesList : []}
          getOptionLabel={(name) => name}
          onChange={this.handleChange}
          clearOnEscape
          renderInput={(params) => <TextField {...params} required label='Player' variants='outlined' />}
          style={{ width: 600}}
        />

      </div>
    )
  }
}

export default PlayerFilter;
