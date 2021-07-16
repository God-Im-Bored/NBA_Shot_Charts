# NBA Players' Shot Charts

This project is used to display a player's efficiency for each shot type and shot zone as well as display a shot graph, based on specified season. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deoployment notes on how to deploy the project on a live system.

### Prerequisites

- NPM

### Installing

Clone or unzip the repository and navigate to the project directory on your local machine.

```JavaScript
npm install
```

## Deployment

To run the application

```JavaScript
npm run start-flask-api
npm run build-watch
npm run start
Navigate to http://localhost:8080/
```

## Live Demo

- https://peaceful-meninsky-80b1b7.netlify.app//

## Built With

- [Flask](https://flask.palletsprojects.com/en/2.0.x/) - micro web framework for Python
- [React](https://reactjs.org/) - front-end framework
- [Material-UI](https://material-ui.com/) - front-end styling framework
- [ChartsJs](https://www.chartjs.org/) - charting tool
- [Axios](https://axios-http.com/docs/intro) - promise-based HTTP client

## Data From

- [NBA_API](https://github.com/swar/nba_api) - an API client package to access the APIs for NBA.com

## Future Improvements

- Incorporate D3.JS library for more fluid DOM manipulation to superimpose the scatterplot onto a svg element, in this case, the half court.
- Include additional query options (Game Length && Season Type) to allow user to alter ShotChartDetail endpoint even further.

## Developer

- [Aram Martin](https://www.linkedin.com/in/aram-martin/) - LinkedIn
