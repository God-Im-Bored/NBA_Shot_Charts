import React from 'react'

import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        maxWidth: 600
    }
})

const ShotChart = (props) => {
    const classes = useStyles()

    return (
        <div id='player-shot-chart-main'>
            <pre>Shot Chart</pre>
            <Card>
                <h3>Hello</h3>
                <table>

                </table>
            </Card>
        </div>
    )
}

export default ShotChart