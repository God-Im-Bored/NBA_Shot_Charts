import React from "react";
import styles from "./app.module.css";

import { Bar, PlayerCard, Chart, Graph } from "./components";
import { fetchPlayers } from "./api";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      players: [],
      playerData: {},
    };
    this.updatePlayerData = this.updatePlayerData.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  async componentDidMount() {
    const playersList = await fetchPlayers();

    this.setState({
      players: playersList,
    });
  }

  updatePlayerData(data) {
    this.setState({ playerData: data });
    
  }

  handleReset(player, season) {
    console.log('hi reset', player, season)
   

  }

  render() {
    const { players, playerData } = this.state;

    return (
      <div className={styles.container}>
        <h2>Nba Shot Charts</h2>
        <Bar
          players={players}
          playerDataCallback={this.updatePlayerData}
          className={styles.components}
          reset={this.handleReset}
        />
        <PlayerCard playerInfo={playerData.info} />
        <Chart shotTypes={playerData.shotTypeData} shotZones={playerData.shotZoneData}/>
        <Graph />
      </div>
    );
  }
}

export default App;
