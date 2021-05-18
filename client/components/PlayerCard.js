import React from 'react'

import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        maxWidth: 350
    },
    media: {
        height: 280,
        width: 225
    },
    desc: {
        textAlign: 'center' 
    },
    name: {
        fontWeight: 'bold'
    },
})

const PlayerCard = (props) => {
 
    const classes = useStyles()

    return (
        <div id='player-card-main'>
            <Card className={classes.root}>
                <CardHeader
                    title=''
                    subheader=''
                />
                <CardMedia
                    className={classes.media}
                    image={props.avi ? props.avi : '/generic-player.png'}
                    title='player-image'
                />
                <CardContent className={classes.desc}>
                    <Typography className={classes.name} variant='body2' component='h4'>
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
