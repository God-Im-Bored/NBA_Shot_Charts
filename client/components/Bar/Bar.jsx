import React from "react";

import { seasons } from '../../api/seasons.js'
import { fetchPlayerShots } from '../../api'

import {
  Accordion,
  AccordionSummary,
  AccordionActions,
  Button,
  Divider,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";



const Bar = ({ players }) => {

  const handleSubmit = async (player, season) => {
    
    const test = await fetchPlayerShots(player, season)

    
  }
  




  return (
    <Accordion>
      <AccordionSummary
        id="filter-bar"
        aria-controls="filter-bar-content"
        expandIcon={<ExpandMoreIcon />}
        >
        <Typography>
          Search Options
        </Typography>
      </AccordionSummary>


      <Autocomplete
        id='players-list'
        options={
          Array.isArray(players) ? players.map((player) => player.full_name) : []
        }
        getOptionLabel={(name) => name}
        clearOnEscape
        renderInput={(params) => (
          <TextField
            {...params}
            required
            label='Player'
            variants='outlined'
          />
        )}
         />
         <Autocomplete
          id='season-list'
          options={seasons}
          getOptionLabel={(season) => season}
          clearOnEscape
          renderInput={(params) => (
            <TextField
            {...params}
            margin='normal'
            fullWidth
            required
            label='Season'
            variants='outlined'
            />
          )}
          />

     

      <Divider />
      <AccordionActions>
        <Button
          onClick={(e) => {handleSubmit(e.target.value)} }>
          Submit
        </Button>
        <Button>
          Reset
        </Button>
      </AccordionActions>
    </Accordion>
  )
};

export default Bar;
