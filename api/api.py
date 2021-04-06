from flask import Flask
from flask_cors import CORS

from nba_api.stats.static import players
from nba_api.stats.static import teams


player_list = players.get_players()
team_list = teams.get_teams()


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=["GET"])
def index():
    return 'Flask API Index. Sup Bubba'

@app.route('/players', methods=['GET'])
def players():
    return { 'data': player_list}

@app.route('/teams', methods=['GET'])
def teams():
    return {'data': team_list}




if __name__ == '__main__':
    app.run(debug=True)
