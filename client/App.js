import React from "react";
import styles from "./app.module.css";

import { Bar, PlayerCard, Chart, Graph } from "./components";
import { fetchPlayers } from "./api";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      players: [],
      playerData: localStorage.getItem("PlayerData"),
    };
    this.updatePlayerData = this.updatePlayerData.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  async componentDidMount() {
    const playersList = await fetchPlayers();

    this.setState({
      players: playersList,
    });
  }

  updatePlayerData(data) {
    this.setState({ playerData: data });
    localStorage.setItem("PlayerData", JSON.stringify(this.state.playerData));
  }

  handleReset(player, season) {
    this.setState({ playerData: {} });

    setTimeout(() => {
      const missedShots = document.getElementsByClassName("missed");
      const madeShots = document.getElementsByClassName("made");

      while (missedShots.length > 0) {
        missedShots[0].parentNode.removeChild(missedShots[0]);
      }

      while (madeShots.length > 0) {
        madeShots[0].parentNode.removeChild(madeShots[0]);
      }
    }, 0);
  }

  render() {
    const { players, playerData } = this.state;

    return (
      <div>
        <h2 className={styles.header}>Nba Shot Charts</h2>
        <div className={styles.bar}>
          <Bar
            players={players}
            playerDataCallback={this.updatePlayerData}
            reset={this.handleReset}
          />
        </div>

        <div className={styles.container}>
          <PlayerCard playerInfo={playerData ? playerData.info : {}} />
          <Chart
            shotTypes={playerData ? playerData.shotTypeData : {}}
            shotZones={playerData ? playerData.shotZoneData : {}}
          />

          <Graph shots={playerData ? playerData.data : {}} />
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;
