import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab'
import "regenerator-runtime/runtime";

const PlayerSearch = (players) => {
  const [value, setValue] = useState([])
  const { playersList } = players;
  const { data } = playersList;

  const names = Array.isArray(data) ? data.map((player) => player.full_name) : "";

  const handleChange =(event, name) => {
    setValue(event.target.value)
    console.log(name)
    console.log(value)
  }

  return (
    <div id="search-bar">
      <Autocomplete
      id='names-list'
      options={Array.isArray(names) ? names : []}
      getOptionLabel={(name) => name}
      onChange={handleChange}
      autoComplete
      clearOnEscape
      renderInput={(params) => <TextField {...params} required label='Player' variant='outlined' />}
      style={{ width: 200 }}
      />
  </div>
  );
};

export default PlayerSearch;
