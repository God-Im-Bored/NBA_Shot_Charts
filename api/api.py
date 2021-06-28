from flask import Flask
from flask_cors import CORS
import json

from nba_api.stats.static import players
from nba_api.stats.static import teams
from nba_api.stats.endpoints import shotchartdetail, commonplayerinfo
from nba_api.stats.library.parameters import ContextMeasureDetailed, ContextMeasureSimple


player_list = players.get_players()
team_list = teams.get_teams()


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=["GET"])
def index():
    return 'Nba Shot Charts Flask API Index'


@app.route('/players', methods=['GET'])
def players():
    return {'data': player_list}


@app.route('/teams', methods=['GET'])
def teams():
    return {'data': team_list}

@app.route('/card_info/<id>', methods=['GET'])
def card_info(id):
    response = commonplayerinfo.CommonPlayerInfo(
        player_id=id
    )
    card_data = json.loads(response.get_json())
    return {'data': card_data}

@app.route('/player_info/<player_name>', methods=['GET'])
def player_info(player_name):
    for player in player_list:
        if(player_name == player['full_name']):
            response = shotchartdetail.ShotChartDetail(
                team_id=0,
                player_id=player['id'],
                context_measure_simple='FGA'
            )
            player_data= json.loads(response.get_json())
    return {'player_data': player_data}

if __name__ == '__main__':
    app.run(debug=True)
