from flask import Flask
from flask_cors import CORS
import json

from nba_api.stats.static import players
from nba_api.stats.static import teams
from nba_api.stats.endpoints import shotchartdetail


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

@app.route('/player_info/<player_name>', methods=['GET'])
def player_info(player_name):
    response = shotchartdetail.ShotChartDetail(
                team_id=0,
                player_id=2544
            )
    player_data = json.loads(response.get_json())

    return {'data': player_data}

    # for player in player_list:
    #     if(name == player['full_name']):
    #         response = shotchartdetail.ShotChartDetail(
    #             team_id=0,
    #             player_id=2544
    #         )
    #     player_data = json.loads(response.get_json())

    # return {'player_data': player_data}




if __name__ == '__main__':
    app.run(debug=True)
