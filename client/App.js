import React from "react";
import styles from "./app.module.css"

import { Bar, Card, Chart, Graph } from './components'
import { fetchPlayers } from './api'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  async componentDidMount() {
    const playersList = await fetchPlayers()

    this.setState({
      players: playersList
    })
  }
  


  render() {
    const { players } = this.state
    
    return (
      <div className={styles.container}>
        <h2>Nba Shot Charts</h2>
        <Bar players={players}/>
        <Card />
        <Chart />
        <Graph />
        
      </div>
    )
  }
}


export default App
