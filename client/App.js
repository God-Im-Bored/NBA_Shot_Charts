import React from "react";
import axios from "axios";
import FilterBar from "./components/FilterBar";
import PlayerCard from "./components/PlayerCard";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        name: null,
        id: null,
        photo: null,
        info: null,
        shots: null,
      },
      players: [],
      teams: []
    };
    this.updatePlayerName = this.updatePlayerName.bind(this);
    this.updatePlayerID = this.updatePlayerID.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/players")
      .then((response) => {
        this.setState({ players: response.data });
        return axios.get("http://localhost:5000/teams");
      })
      .then((response) => {
        this.setState({ teams: response.data });
      });
  }

  updatePlayerName(playerName) {
    return this.setState((prevState) => ({
      player: {
        ...prevState.player,
        name: playerName,
      },
    }));
  }

  updatePlayerID(playerID) {
    const imgUrl = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerID}.png`;
    this.setState((prevState) => ({
      player: {
        ...prevState.player,
        id: playerID,
      },
    }));
    axios
      .get(`http://localhost:5000/card_info/${playerID}`)
      .then((response) => {
        this.setState((prevState) => ({
          player: {
            ...prevState.player,
            info: response.data,
          },
        }));
        return axios.get(imgUrl);
      })
      .then((response) => {
        this.setState((prevState) => ({
          player: {
            ...prevState.player,
            photo: response.data,
          },
        }));
      });
  }

  render() {
    return (
      <div>
        <pre>In Development</pre>

        <h2 id="landing-page-title">NBA Shot Charts</h2>

        <FilterBar
          nameCallback={this.updatePlayerName}
          idCallback={this.updatePlayerID}
          players={this.state.players}
          teams={this.state.teams}
        />

        <div id="viz-panel">
          <PlayerCard
            athlete={this.state.player.name}
            id={this.state.player.id}
            avi={this.state.player.photo}
            info={this.state.player.info}
          />
          
        </div>
      </div>
    );
  }
}

export default App;
