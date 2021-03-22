from flask import Flask

app = Flask(__name__)


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
    app.run(debug=True, port=2999)
