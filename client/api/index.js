import axios from 'axios'
import "regenerator-runtime/runtime"

const playersUrl = 'http://localhost:5000/players'
const player = {

    shotTypeData: {
        2: ['made', 'missed', 'total'],
        3: ['made', 'missed', 'total'],
        total: ['made', 'missed', 'total']
    },
    shotZoneData: {
        RA: ['made', 'missed', 'total'],
        
    },
    data: [[x, y], [x, y], [x, y], 'etc']
}

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
            
            const shotsArr = player_data.resultSets[0].rowSet 
            
            shotsArr.map((shot) => {

            })
            

        }
        
    } catch (err) {
        console.log(err)
    }
}