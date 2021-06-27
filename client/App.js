import React from "react";
import styles from "./app.module.css"

import { Bar, Card, Chart, Graph } from './components'

class App extends React.Component {
  


  render() {
    return (
      <div className={styles.container}>
        <h2>Hello from App component</h2>
        <Bar />
        <Card />
        <Chart />
        <Graph />
        
      </div>
    )
  }
}


export default App
