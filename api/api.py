from flask import Flask
from flask_cors import CORS, cross_origin

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


if __name__ == '__main__':
    app.run(debug=True)
