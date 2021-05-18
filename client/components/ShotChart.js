import React from 'react'

import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        maxWidth: 400
    }
})


const ShotChart = (props) => {
    const classes = useStyles()
    
    return (
        props.data ? console.log(Object.entries(props.data)) : console.log('hi'),
       
        <div id='player-shot-chart-main'>
            <Card className={classes.root}>
                <CardHeader 
                    title='Field Goal Breakdown'
                    subheader='Player Shot Info'
                />
                <table>
                    <thead>
                        <tr>
                           <th>Player</th>
                           <th>League</th> 
                        </tr>
                        <tr>
                            <th>Shot Value</th>
                            <th>FGM</th>
                            <th>FMA</th>
                            <th>PPS</th>
                            <th>Freq</th>
                            <th>PPS</th>
                            <th>Freq</th>
                        </tr>
                        <tr>
                            <th>Shot Zone</th>
                        </tr>
                    </thead>
                        
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>

                </table>
            </Card>
        </div>
    )
}

export default ShotChart