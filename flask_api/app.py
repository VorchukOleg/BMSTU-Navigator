
############# непосредственно API
import os
import json

from flask import Flask, render_template, request
from flask_restful import Resource, Api, reqparse
from flask import render_template
from flask_cors import CORS
from dotenv import load_dotenv

##################

from .resources.BaseNodes import AddBasePoint, GetBaseNodeByID, GetAllBasePointsConnections, GetAllBasePointsAtTheFloor, AddBaseNodeConnection
from .resources.Buildings import GetAllBuildings, AddBuilding
from .resources.Floors import GetAllFloorsByBuildingID
from .resources.Rooms import GetPath, GetRoomBasePoint, GetRoomCoordinates
from .resources.Misc import GetAllCoords
from .common.util import get_db_connection, get_parser

##################

SECRET_KEY = os.urandom(32)
load_dotenv()

################### Запросы





##################



app = Flask(__name__)
api = Api(app)
CORS(app) # This will enable CORS for all routes



parser = get_parser()
connection = get_db_connection()
connection.autocommit = True
cursor = connection.cursor()

kwargs_cursor_and_parser = { 'cursor': cursor, 'parser' : parser}
kwargs_cursor = {'cursor': cursor}


api.add_resource(GetAllCoords, '/get_all_coords', resource_class_kwargs=kwargs_cursor)

api.add_resource(GetRoomCoordinates, '/get_room_coords', resource_class_kwargs=kwargs_cursor_and_parser)
api.add_resource(GetRoomBasePoint, '/get_room_basepoint', resource_class_kwargs=kwargs_cursor_and_parser)
api.add_resource(GetAllBasePointsConnections, '/get_all_baseconnections', resource_class_kwargs=kwargs_cursor)
api.add_resource(GetPath, '/get_path', resource_class_kwargs=kwargs_cursor_and_parser)
api.add_resource(AddBuilding, '/buildings/add_building', resource_class_kwargs=kwargs_cursor_and_parser)
api.add_resource(GetAllBuildings, '/buildings/get_all_buildings', resource_class_kwargs=kwargs_cursor)
api.add_resource(GetAllFloorsByBuildingID, '/floors/<int:building_id>', resource_class_kwargs=kwargs_cursor)
api.add_resource(AddBasePoint, '/base_nodes/add_base_point', resource_class_kwargs=kwargs_cursor_and_parser)
api.add_resource(GetAllBasePointsAtTheFloor, '/base_nodes/get_base_point', resource_class_kwargs=kwargs_cursor_and_parser)
api.add_resource(GetBaseNodeByID, '/base_nodes/<int:base_node_id>', resource_class_kwargs=kwargs_cursor )
api.add_resource(AddBaseNodeConnection, '/base_nodes/<int:base_node_id>/connection', resource_class_kwargs=kwargs_cursor_and_parser)



if __name__ == '__main__':
    app.run(debug=True)
    cursor.close() # судя по всему закрытие соединения с БД нужно вставить сюда, но я на самом деле хз
    connection.close()
    print("Работа сервера завершена")