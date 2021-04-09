import React, { useState } from "react";
import axios from 'axios'
import { TextField } from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab'
import "regenerator-runtime/runtime";

const PlayerSearch = (players) => {
  const [value, setValue] = useState([])
  const [shot, setShot] = useState([])
  const { playersList } = players;
  const { data } = playersList;

  const names = Array.isArray(data) ? data.map((player) => player.full_name) : "";

  const handleChange = async (event, name) => {
    const res = await fetch(`http://localhost:5000/player_info/${name}`)
    const shots = await res.json()
    console.log(shots)
    setValue(event.target.value)
    console.log(name)
    console.log(value)
  }

  // name = 'Kawhi Leonard'
  // const search = async (event, name) => {
  //   console.log(name)
  //   if (event.key === 'Enter') {
  //     try {
        
  //       const res = await fetch(`http://localhost:5000/player_info/${name}`)
  //       const shots = await res.json()
  //       console.log(222, shots)
  //       await setShots(shots)
  //       setValue('')
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
      // onKeyPress={search}
      clearOnEscape
      renderInput={(params) => <TextField {...params} required label='Player' variant='outlined'  />}
      style={{ width: 200 }}
      />
  </div>
  );
};

export default PlayerSearch;
