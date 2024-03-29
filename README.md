# NBA Players' Shot Charts

This project is used to display a player's efficiency for each shot type and shot zone as well as display a shot graph, based on specified season. Note, the nba client module only has shot information from 1996-97 to the most recent season. 

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
- NOTE: As of now the flask server must be running for the deployment link to work. This will be fixed soon.
- https://peaceful-meninsky-80b1b7.netlify.app/

## Built With

- [Flask](https://flask.palletsprojects.com/en/2.0.x/) - micro web framework for Python
- [CORS](https://flask-cors.readthedocs.io/en/latest/) - flask extension for configuring CORS
- [React](https://reactjs.org/) - front-end framework
- [Material-UI](https://material-ui.com/) - front-end styling framework
- [D3js](https://d3js.org/) - DOM manipulation and visualization tool
- [Axios](https://axios-http.com/docs/intro) - promise-based HTTP client

## Data From

- [NBA_API](https://github.com/swar/nba_api) - an API client package to access the APIs for NBA.com

## Future Improvements

- Include additional query options (Game Length && Season Type) to allow user to alter ShotChartDetail endpoint even further.
- Include league efficiency averages for each shot zone as a hover option for the shot graph

## Developer

- [Aram Martin](https://www.linkedin.com/in/aram-martin/) - LinkedIn
# nba-py-api
