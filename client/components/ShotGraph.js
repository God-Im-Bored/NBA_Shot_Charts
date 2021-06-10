import React from "react";
import Plot from "react-plotly.js";

class ShotGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          x: [1, 2, 3],
          y: [2, 4, 6],
          type: 'scatter',
          mode: 'markers',
          marker: {color: 'green'}
        },
      ],
      layout: {},
      frames: [],
      config: {},
    };
  }

  render() {
    return (
      <Plot
        data={this.state.data}
        layout={this.state.layout}
        frames={this.state.frames}
        config={this.state.config}
        onInitialized={(figure) => this.setState(figure)}
        onUpdate={(figure) => this.setState(figure)}
      />
    );
  }
}

export default ShotGraph;
