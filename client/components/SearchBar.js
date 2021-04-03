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
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/api");
      const jsonData = await response.json();
      setStats(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div id="search-bar">
      <h1>Hey World, from React.JS</h1>
    </div>
  );
};

export default SearchBar;
