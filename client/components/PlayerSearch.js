import React, { useState, useEffect } from "react";
import axios from "axios";
import "regenerator-runtime/runtime";

const PlayerSearch = (players) => {
  const [playerData, setPlayerData] = useState({});
  const { playersList } = players;
  const { data } = playersList;

  const names = Array.isArray(data)
    ? data.map((player) => player.full_name)
    : "";
  console.log(777, names);

  const handleClick = (e) => {
    console.log("You Clicked Me");
  };

  const handleChange = (e) => {
    console.log("You changed me");
  };

  return (
    <div className="form-body">
      <form>
        <label>
          Players:
          <select
            multiple={true}
            value={Array.isArray(names) ? names : []}
            onChange={handleChange}
          >
            <option>hi</option>
            <option>hello</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default PlayerSearch;
