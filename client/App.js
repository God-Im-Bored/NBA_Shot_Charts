import React from 'react'
import FilterBar from './components/FilterBar'
import PlayerCard from './components/PlayerCard'




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: {
                name: null,
                id: null,
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
        

        return this.setState(prevState => ({
            player: {
                ...prevState.player,
                id: playerID
            }
        }))
    }


    render() {
        
        return (
            <div>
                <pre>In Development</pre>
                <h2 id='landing-page-title'>NBA Shot Charts</h2>
                <FilterBar nameCallback={this.updatePlayerName} idCallback={this.updatePlayerID}/>
                <PlayerCard athlete={this.state.player.name} id={this.state.player.id} />
                
                
                
                
                
            </div>
        )
    }
}

export default App 