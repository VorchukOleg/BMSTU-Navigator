import sqlite3

from flask import Flask, render_template, jsonify, request
from backend import graph

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


# Роут для получения списка доступных vertexpoints
@app.route('/api/vertexpoints', methods=['GET'])
def get_vertexpoints():
    conn = sqlite3.connect('datab.db')
    c = conn.cursor()
    c.execute('SELECT codename, coordinates FROM vertexpoints')
    vertexpoints_data = [{'codename': row[0], 'coordinates': row[1]} for row in c.fetchall()]
    conn.close()
    return jsonify(vertexpoints_data)


# Роут для построения маршрута и получения веб-страницы с графом
@app.route('/api/build_route', methods=['POST'])
def build_route():
    start_point = request.json['start_point']
    end_point = request.json['end_point']

    shortest_path, shortest_length = graph.find_shortest_path(start_point, end_point)

    return jsonify({
        'shortest_path': shortest_path,
        'shortest_length': shortest_length
    })


if __name__ == '__main__':
    app.run(debug=True)
