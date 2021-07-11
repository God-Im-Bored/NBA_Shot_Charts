import React, { useState } from "react";

import { seasons } from "../../api/seasons.js";
import { fetchPlayerData } from "../../api";

import {
  Accordion,
  AccordionSummary,
  AccordionActions,
  Button,
  Divider,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Bar = ({ players, playerDataCallback, reset }) => {
  const [player, setPlayer] = useState("");
  const [season, setSeason] = useState("");

  const handleSubmit = async (event) => {
    const playerData = await fetchPlayerData(player, season);

    // console.log(playerData)

    playerDataCallback(playerData);
  };

  const canBeSubmitted = () => {
    return player.length > 0 && season.length > 0;
  };

  const resetData = () => {
    reset()
  }

  const handleReset = (e) => {
    setPlayer('')
    setSeason('')

  }

  const isEnabled = canBeSubmitted();

  return (
    <Accordion>
      <AccordionSummary
        id="filter-bar"
        aria-controls="filter-bar-content"
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>Search Options</Typography>
      </AccordionSummary>

      <Autocomplete
        id="players-list"
        options={
          Array.isArray(players)
            ? players.map((player) => player.full_name)
            : []
        }
        getOptionLabel={(name) => name}
        clearOnEscape
        renderInput={(params) => (
          <TextField
            {...params}
            required
            label="Player"
            value={player}
            onSelect={(e) => setPlayer(e.target.value)}
            onChange={handleReset}
            variants="outlined"
          />
        )}
      />
      <Autocomplete
        id="season-list"
        options={seasons}
        getOptionLabel={(season) => season}
        clearOnEscape
        renderInput={(params) => (
          <TextField
            {...params}
            required
            label="Season"
            value={season}
            onSelect={(e) => setSeason(e.target.value)}
            onChange={handleReset}
            variants="outlined"
          />
        )}
      />

      <Divider />
      <AccordionActions>
        <Button
          type="submit"
          disabled={!isEnabled}
          onClick={(e) => {
            handleSubmit(e.target.value);
          }}
        >
          Submit
        </Button>
        <Button
        type='reset'
        onClick={resetData}
    
        >Reset</Button>
      </AccordionActions>
    </Accordion>
  );
};

export default Bar;
