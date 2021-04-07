import React from "react";
import axios from 'axios'
import PlayerSearch from './PlayerSearch'


class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
      teams: [],
      seasons: [],
      length: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/players')
      .then(response => {
        this.setState({ players: response.data })
        return axios.get('http://localhost:5000/teams')
      })
      .then(response => {
        this.setState({ teams: response.data })
      })
  }



  render() {
    return (
      <div id='search-bar'>
        <h1>Class Component Search Bar</h1>
        <PlayerSearch playersList={this.state.players} />

      </div>

    )
  }
}



export default SearchBar

