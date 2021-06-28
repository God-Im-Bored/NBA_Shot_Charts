import axios from 'axios'
import "regenerator-runtime/runtime"

const playersUrl = 'http://localhost:5000/players'

export const fetchPlayers = async () => {
    try {

        const { data } = await axios.get(playersUrl)     
        return data.data

    } catch (err) {
        console.log(err)
    }
}