import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

class SegmentFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            segments: ['First Half', 'Overtime', 'Second Half']
        }
        this.onTrigger = this.onTrigger.bind(this)
    }

    onTrigger(event, segment) {
        this.props.callback(segment)
        event.preventDefault();
      }


    render() {
        return (
            <div id='segment-fitler-main'>
                <Autocomplete
                    id='segment-list'
                    options={this.state.segments}
                    onChange={this.onTrigger}
                    getOptionLabel={(segment) => segment}
                    clearOnEscape
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label='Game Segment'
                        variants='outlined'
                        />
                    )}
                    style={{ width: 600 }}
                />


               
            </div>
        )
    }
}

export default SegmentFilter