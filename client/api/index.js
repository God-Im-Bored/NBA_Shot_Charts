import axios from 'axios'
import "regenerator-runtime/runtime"

const playersUrl = 'http://localhost:5000/players'
const playerShotsUrl = `http://localhost:5000/player_info/${player}/${season}`

let player = null, season = null

export const fetchPlayers = async () => {
    try {

        const { data } = await axios.get(playersUrl)     
        return data.data

    } catch (err) {
        console.log(err)
    }
}

export const fetchPlayerShots = async (playerName, seasonYear) => {
    let customUrl = `http://localhost:5000/player_info/${playerName}/${seasonYear}`
    try {
        if (playerName && seasonYear) {
            // player_data.resultSets[0].rowSet === shots array
            
            const { data: { player_data } } = await axios.get(customUrl)
            console.log(player_data.resultSets[0].rowSet)

        }
        
    } catch (err) {
        console.log(err)
    }
}