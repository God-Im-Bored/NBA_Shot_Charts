import axios from 'axios'
import "regenerator-runtime/runtime"

const playersUrl = 'http://localhost:5000/players'
const playerShotsUrl = `http://localhost:5000/${player}/${season}`

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
    let customUrl = playerShotsUrl
    try {
        if (playerName && seasonYear) {
            player = playerName;
            season = seasonYear

        }
        const res = await axios.get(customUrl)
        console.log(res)
        
    } catch (err) {
        console.log(err)
    }
}