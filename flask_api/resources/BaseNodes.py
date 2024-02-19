import json
from flask_api.resources.db_scripts.db_query import postgresql_insert_BasePoint, postgresql_select_AllBasePointsAtTheFloor, postgresql_select_AllBasePointsAtTheFloorNoFloorID,\
    postgresql_select_BasePoint_by_ID, postgresql_select_BasePoint_Connections_by_BasePointID, postgresql_insert_BasePoint_Connection, postgresql_select_AllBasePointsConnections,\
    postgresql_select_only_coords_from_BasePoint_by_ID
from flask_api.models.BaseNodes_model import basenode_tuple_to_dict, basenode_with_connections_tuple_to_dict
from flask_api.common.util import find_polygon_center, manhattan_distance
from flask_restful import Resource, reqparse
from flask import Flask, request

class AddBasePoint(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']
        self.parser = kwargs['parser']

    def post(self):
        args = self.parser.parse_args()
        uuid = args['uuid']
        floor_id = args['floor_id']
        coordinates = args['coordinates']
       
        coordinates_str = str(coordinates).replace("'", '"')
        json_coordinates = json.dumps(json.loads(coordinates_str))

        self.cursor.execute(postgresql_insert_BasePoint, (uuid, floor_id, json_coordinates,))

        return "Record was successfully added", 200

class GetAllBasePointsAtTheFloor(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self):
        floor_id = str(request.args.get('id'))
        if (floor_id != 'None'):
            self.cursor.execute(postgresql_select_AllBasePointsAtTheFloor,(floor_id,))
            basepoints_record = self.cursor.fetchall()
        else:
            self.cursor.execute(postgresql_select_AllBasePointsAtTheFloorNoFloorID)
            basepoints_record = self.cursor.fetchall()

        if basepoints_record != []:
           return basenode_tuple_to_dict(basepoints_record)
        else:
            return [] #"Record not found", 404

class GetBaseNodeByID(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self, base_node_id):
        self.cursor.execute(postgresql_select_BasePoint_by_ID, (base_node_id,))
        basepoint_record = self.cursor.fetchall()

        self.cursor.execute(postgresql_select_BasePoint_Connections_by_BasePointID, (base_node_id,))
        base_connections_record = self.cursor.fetchall()

        if ((basepoint_record != []) and (base_connections_record != [])):
            return basenode_with_connections_tuple_to_dict(basepoint_record, base_connections_record)
        else:
            return [] #"Record not found", 404

class AddBaseNodeConnection(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']
        self.parser = kwargs['parser']

    def post(self, base_node_id):
        args = self.parser.parse_args()

        node_to_connect_id = args['node_id']
        weight = args['weight']
        
        self.cursor.execute(postgresql_select_BasePoint_by_ID, (base_node_id,))
        
        basepoint_record = self.cursor.fetchall()
        if basepoint_record != []:
            base_node_center_x, base_node_id_center_y = find_polygon_center(basepoint_record[0][2])
            self.cursor.execute(postgresql_select_only_coords_from_BasePoint_by_ID, (node_to_connect_id,))
            node_to_connect_coordinates_record = self.cursor.fetchall()
            print(node_to_connect_coordinates_record[0][0])
            node_to_connect_center_x, node_to_connect_center_y = find_polygon_center(node_to_connect_coordinates_record[0][0])
            weight = manhattan_distance(base_node_center_x, base_node_id_center_y, node_to_connect_center_x, node_to_connect_center_y)
            self.cursor.execute(postgresql_insert_BasePoint_Connection, (weight, base_node_id, node_to_connect_id))
            self.cursor.execute(postgresql_insert_BasePoint_Connection, (weight, node_to_connect_id, base_node_id))
        else:
            return [] #"Record not found", 404

        return "Record was successfully added", 200

class GetAllBasePointsConnections(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self):

        self.cursor.execute(postgresql_select_AllBasePointsConnections)
        baseconnection_record = self.cursor.fetchall()
        print (baseconnection_record)
        if baseconnection_record != []:
            return baseconnection_record
        else:
            return [] #"Record not found", 404
