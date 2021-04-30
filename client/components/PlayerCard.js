import React from 'react'

import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        maxWidth: 350
    },
    media: {
        height: 280
    }
})

const PlayerCard = (props) => {
    // console.log(props.info ? props.info.data.resultSets[0].rowSet : props.info)
    const classes = useStyles()

    return (
        <div id='player-card-main'>
            <pre>Player Card Component</pre>
            <Card className={classes.root}>
                <CardHeader
                    title=''
                    subreader='Player Team'
                />
                <CardMedia
                    className={classes.media}
                    image={props.avi ? props.avi : '/generic-player.png'}
                    title='player-image'
                />
                <CardContent>
                    <Typography variant='body2' component='h4'>
                        {props.info ? props.info.data.resultSets[0].rowSet[0][3] : ''}
                    </Typography>
                    <Typography variant='body2' component='h4'>
                        {props.info ? props.info.data.resultSets[0].rowSet[0][19] : ''}
                    </Typography>
                    <Typography variant='body2' component='h4' component='h4'>
                        {props.info ? props.info.data.resultSets[0].rowSet[0][15] : ''}
                    </Typography>
                    <Typography variant='body2' component='h4'>
                        {props.info ? props.info.data.resultSets[0].rowSet[0][13] + ' yrs.' : ''}
                    </Typography>

                </CardContent>
            </Card>
        </div>
    )
}


export default PlayerCard
