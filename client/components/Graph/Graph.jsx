import React from 'react'
import { Scatter } from 'react-chartjs-2'

const Graph = ({ shots }) => {
    const ctx = document.getElementById('court')

    const shotGraph = shots ? (
        <Scatter
            options={{
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }}
            data= {{
                datasets: [
                    {
                        data: shots.madeShots.map((made) => made),
                        label: 'Made',
                        borderColor: '#3333ff',
                        fill: false
                    },
                    {
                        data: shots.missedShots.map((missed) => missed),
                        label: 'Missed',
                        borderColor: "rgba(255, 0, 0, 0.5)",
                        fill: false
                    }
                ]
            }}
        />
    ) : null

    // console.log(shotGraph)


    return (
        shotGraph
       
        
        
    )
}

export default Graph