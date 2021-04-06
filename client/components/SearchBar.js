import React, { useState, useEffect } from "react";
import axios from "axios";
import "regenerator-runtime/runtime";
import { FormControl, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const [playerData, setPlayerData] = useState({});

  const handleChange = (event) => {
    setPlayerData(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/players");
      setPlayerData(result.data);
    };
    fetchData();
  }, []);

  return (
    Array.isArray(playerData.data) ? console.log(playerData.data.filter(item => item.is_active === true)) : 'Hi :)',
    <div id="search-bar">
      <h1>Player Search Bar</h1>
      {/* {console.log(playerData.data.filter(item => item.is_active === true))} */}
      <FormControl className={classes.formControl}>
        <TextField
          id="player-select"
          select
          label="Player"
          value=""
          onChange={handleChange}
          helperText="Please select a player"
        >
          {Array.isArray(playerData.data) ? (
            playerData.data.map((name) => {
              return <h6 key={name.id}>{name.full_name}</h6>;
            })
          ) : (
            <div>Uh Oh.</div>
          )}
        </TextField>
      </FormControl>
    </div>
  );
};

export default SearchBar;
