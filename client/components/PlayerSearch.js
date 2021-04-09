import React, { useState, useEffect } from "react";
import { FormControl, TextField, MenuItem, InputLabel } from "@material-ui/core";
import axios from "axios";
import "regenerator-runtime/runtime";

const PlayerSearch = (players) => {
  const [value, setValue] = useState([])
  const { playersList } = players;
  const { data } = playersList;

  const names = Array.isArray(data) ? data.map((player) => player.full_name) : "";
  // console.log(777, names);

  const handleClick = (e) => {
    setValue(e.target.value)
    console.log("You Clicked Me");
  };

  const handleChange = (e) => {
    console.log("You changed me");
  };

  return (
    <div id="search-bar">
    
    <FormControl>
      <TextField
        select
        id='player-select-list'
        label='Player'
        helperText='Please select a player'
        SelectProps={{
          multiple: true,
          value: []
        }}
        onClick={handleClick}
        >
          {Array.isArray(names) ? (
            names.map((name, index) => {
              return <MenuItem key={index} value={name}>{name}</MenuItem>
            })
          ): (
            'HELLO'
          )}
        </TextField>
    </FormControl>
  </div>
  );
};

export default PlayerSearch;
