from flask import Flask
from flask_cors import CORS
from nba_api.stats.static import players

player_dict = players.get_players()




app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=["GET"])
def index():
    return 'Flask API Index. Sup Bubba'


@app.route('/api', methods=['GET'])
def api():
    return {
        'userId': 1,
        'title': 'Flask React Application',
        'completed': False,
        "Glen": True
    }

@app.route('/players', methods=['GET'])
def players():
    return { "data": player_dict }
       


if __name__ == '__main__':
    app.run(debug=True)
