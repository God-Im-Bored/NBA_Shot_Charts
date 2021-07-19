import React from "react";
import styles from "./app.module.css";

import { Bar, PlayerCard, Chart, Graph, Canvas } from "./components";
import { fetchPlayers } from "./api";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      players: [],
      playerData: {},
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
  }

  handleReset(player, season) {
    console.log('reset button pressed')
    this.setState({playerData: {}});
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
          <Canvas />
          <Graph shots={playerData ? playerData.data : {}}/>
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;
