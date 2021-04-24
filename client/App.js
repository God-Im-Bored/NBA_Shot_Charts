import React from 'react'
import axios from 'axios'
import FilterBar from './components/FilterBar'
import PlayerCard from './components/PlayerCard'




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: {
                name: null,
                id: null,
                photo: null,
                info: null,
                shots: null
            }
        }
        this.updatePlayerName = this.updatePlayerName.bind(this)
        this.updatePlayerID = this.updatePlayerID.bind(this)

    }

    updatePlayerName(playerName) {
        return this.setState(prevState => ({
            player: {
                ...prevState.player,
                name: playerName
            }
        }))
    }

    updatePlayerID(playerID) {
        const imgUrl = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerID}.png`
        this.setState(prevState => ({
            player: {
                ...prevState.player,
                id: playerID
            },
        }))
        axios.get(`http://localhost:5000/card_info/${playerID}`)
            .then((response) => {
                this.setState(prevState => ({
                    player: {
                        ...prevState.player,
                        info: response.data
                    },
                }))
                return axios.get(imgUrl)
            }).then((response) => {
                this.setState(prevState => ({
                    player: {
                        ...prevState.player,
                        photo: response.data
                    },
                }))
            })

    }

    render() {
        console.log(this.state.player)
        return (
            <div>

                <pre>In Development</pre>

                <h2 id='landing-page-title'>NBA Shot Charts</h2>

                <FilterBar nameCallback={this.updatePlayerName} idCallback={this.updatePlayerID}/>

                <PlayerCard athlete={this.state.player.name} id={this.state.player.id} />
                
                <img className='fit-picture'
                    src={this.state.player.photo}
                    alt='player-headshot'
                />
                       
            </div>
        )
    }
}

export default App 