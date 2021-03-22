import React, { useState, useEffect } from "react";
import axios from "axios";
import "regenerator-runtime/runtime";
import {
  SearchIcon,
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
  Select,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const [stats, setStats] = useState([{}]);
  useEffect(() => {
    fetch("/api").then((response) =>
      response.json().then((data) => {
        console.log((setStats(data)));
      })
    );
  }, []);

  return (
    <div id="search-bar">
      <FormControl className={classes.formControl}>
        <InputLabel>Season Year</InputLabel>
        <Select></Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Season Type</InputLabel>
        <Select></Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Player</InputLabel>
        <Select></Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Game Length</InputLabel>
        <Select></Select>
      </FormControl>
    </div>
  );
};

export default SearchBar;
