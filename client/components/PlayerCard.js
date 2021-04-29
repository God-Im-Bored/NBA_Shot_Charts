import React from 'react'

import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        maxWidth: 300
    },
    media: {
        height: 280
    }
})

const PlayerCard = (props) => {
    console.log(props)
    const classes = useStyles()

    return (
        <div id='player-card-main'>
            <pre>Player Card Component</pre>
            <Card className={classes.root}>
                <CardHeader
                    title='Card Info'
                    subreader='Player Team'
                />
                <CardMedia
                    className={classes.media}
                    image={props.avi ? props.avi : '/generic-player.png'}
                    title='player-image'
                />
                <CardContent>
                    <Typography variant='body2' component='h4'>
                        {props.athlete}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}


export default PlayerCard
