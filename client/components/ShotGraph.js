import React from "react";
import Plot from "react-plotly.js";

class ShotGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          x: [0],
          y: [0],
          type: 'scatter',
          mode: 'markers',
          marker: {color: 'green'}
        },
    ],
      layout: {
          title: 'Shotz'
      },
      frames: [],
      config: {},
    };
  }

  render() {

    return (
        console.log(this.state.data[0].x),
        console.log(this.state.data[0].y),
      <Plot
        data={
            this.props.data ?
                Object.values(this.props.data).map((season, idx) => {
                    // console.log(Object.entries(this.props.data))
                    console.log(Object.values(this.props.data))
                    this.state.data[0].x.push(season[0][0])
                    this.state.data[0].y.push(season[1][1])

                    console.log(this.state.data[0].x)
                }) :
                    this.state.data
        
        }
        // layout={this.state.layout}
        // frames={this.state.frames}
        // config={this.state.config}
        // onInitialized={(figure) => this.setState(figure)}
        // onUpdate={(figure) => this.setState(figure)}
      />
    );
  }
}

export default ShotGraph;
