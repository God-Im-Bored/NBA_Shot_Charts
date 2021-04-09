import React, { useState } from "react";
import axios from 'axios'
import { TextField } from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab'
import "regenerator-runtime/runtime";

const PlayerSearch = (players) => {
  const [value, setValue] = useState([])
  const { playersList } = players;
  const { data } = playersList;

  const names = Array.isArray(data) ? data.map((player) => player.full_name) : "";

  const handleChange = async (event, name) => {
    setValue(event.target.value)
    console.log(name)
    console.log(value)

    if (event.key === 'Enter') {
      try {
        
        // const result = await axios.get(`http://localhost:5000/player_info/${name}`)
        // console.log(101, result.data)
        console.log('Searched')
    
      } catch (error) {
        console.error(error)
      }
    }
  }

  // name = 'Kawhi Leonard'
  // const search = async (event, name) => {
  //   setValue(event.target.value)
  //   console.log(name)
  //   if (event.key === 'Enter') {
  //     try {
        
  //       const result = await axios.get(`http://localhost:5000/player_info/${name}`)
  //       console.log(101, result.data)
  //       console.log('Searched')
    
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
    
  // }

  return (
    <div id="search-bar">
      <Autocomplete
      id='names-list'
      options={Array.isArray(names) ? names : []}
      getOptionLabel={(name) => name}
      onChange={handleChange}
      onKeyPress={handleChange}
      clearOnEscape
      renderInput={(params) => <TextField {...params} required label='Player' variant='outlined'  />}
      style={{ width: 200 }}
      />
  </div>
  );
};

export default PlayerSearch;
