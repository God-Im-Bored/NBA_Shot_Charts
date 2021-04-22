import React from 'react'

import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'


class PlayerCard extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }



    render() {
        console.log(this.props)
        return (
            <div id='player-card-main'>
                <pre>Player Card Component</pre>
                <Card>
                    <CardHeader
                        title='Card Info'
                        subreader='Player Team'
                    />
                    <CardContent>
                        <Typography variant='body2' component='h4'>
                            {this.props.athlete}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default PlayerCard
