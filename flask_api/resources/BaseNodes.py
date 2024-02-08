import json
from flask_api.resources.db_scripts.db_query import postgresql_insert_BasePoint, postgresql_select_AllBasePointsAtTheFloor, postgresql_select_AllBasePointsAtTheFloorNoFloorID,\
    postgresql_select_BasePoint_by_ID, postgresql_select_BasePoint_Connections_by_BasePointID, postgresql_insert_BasePoint_Connection, postgresql_select_AllBasePointsConnections
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
        json_coordinates = json.dumps(coordinates)

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
        print (basepoints_record)
        if basepoints_record != []:
            response = []
            for i in range(len(basepoints_record)):
                base_point = {
                "id": basepoints_record[i][0],
                "uuid": basepoints_record[i][1],
                "coordinates": basepoints_record[i][2],
                "floor_id": basepoints_record[i][3]
                }
                response.append(base_point)
            return response
        else:
            return "Record not found", 404

class GetBaseNodeByID(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self, base_node_id):
        self.cursor.execute(postgresql_select_BasePoint_by_ID, (base_node_id,))
        basepoint_record = self.cursor.fetchall()

        self.cursor.execute(postgresql_select_BasePoint_Connections_by_BasePointID, (base_node_id,))
        base_connections_record = self.cursor.fetchall()

        if ((basepoint_record != []) and (base_connections_record != [])):
            connections = []
            for i in range(len(base_connections_record)):
                connection = {
                    "base_connection_id" : base_connections_record[i][0],
                    "weight": base_connections_record[i][1],
                    "connection_type": base_connections_record[i][2],
                    "base_point_1_id": base_connections_record[i][3],
                    "base_point_2_id": base_connections_record[i][4],
                }
                connections.append(connection)
            response = {
                "id": basepoint_record[0][0],
                "uuid": basepoint_record[0][1],
                "coordinates": basepoint_record[0][2],
                "floor_id": basepoint_record[0][3],
                "connections": connections
            }
            return response

        else:
            return "Record not found", 404

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
            self.cursor.execute(postgresql_insert_BasePoint_Connection, (weight, base_node_id, node_to_connect_id))
            self.cursor.execute(postgresql_insert_BasePoint_Connection, (weight, node_to_connect_id, base_node_id))
        else:
            return "Record not found", 404

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
            return "Record not found", 404
