import json
from json import JSONDecodeError

import psycopg2
from flask_api.resources.db_scripts.db_query import postgresql_insert_BasePoint, \
    postgresql_select_AllBasePointsAtTheFloor, postgresql_select_AllBasePointsAtTheFloorNoFloorUuid, \
    postgresql_select_BasePoint_by_Uuid, postgresql_select_BasePoint_Connections_by_BasePointUuid, \
    postgresql_insert_BasePoint_Connection, postgresql_select_AllBasePointsConnections, \
    postgresql_select_only_coords_from_BasePoint_by_Uuid
from flask_api.models.BaseNodes_model import basenode_tuple_to_dict, basenode_with_connections_tuple_to_dict
from flask_api.common.util import find_polygon_center, manhattan_distance
from flask_restful import Resource, reqparse
from flask import Flask, request, jsonify
from jsonschema.exceptions import ValidationError
from werkzeug.exceptions import NotFound


class AddBasePoint(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']
        self.parser = kwargs['parser']

    def post(self):
        try:
            args = self.parser.parse_args()
            uuid = args['uuid']
            floor_uuid = args['floor_uuid']
            coordinates = args['coordinates']

            coordinates_str = str(coordinates).replace("'", '"')
            json_coordinates = json.dumps(json.loads(coordinates_str))

            self.cursor.execute(postgresql_insert_BasePoint, (floor_uuid, json_coordinates,))
            self.cursor.connection.commit()  # Commit changes to the database

            return "Record was successfully added", 200
        except (JSONDecodeError, ValidationError) as e:  # Handle JSON parsing and validation errors
            return f"Error parsing coordinates: {str(e)}", 400  # Bad request
        except psycopg2.Error as e:  # Handle database errors
            self.cursor.connection.rollback()  # Rollback changes in case of errors
            return f"Database error: {str(e)}", 500  # Internal server error


class GetAllBasePointsAtTheFloor(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self, floor_uuid):  # Используем ююид этажа в запросах
        try:
            str_floor_uuid = str(floor_uuid)
            if str_floor_uuid != 'None':
                self.cursor.execute(postgresql_select_AllBasePointsAtTheFloor, (str_floor_uuid,))
            else:
                self.cursor.execute(postgresql_select_AllBasePointsAtTheFloorNoFloorUuid)
            basepoints_record = self.cursor.fetchall()

            if basepoints_record != []:
                return basenode_tuple_to_dict(basepoints_record)
            else:
                return [], 404  # Not Found (no records)
        except psycopg2.Error as e:  # Handle database errors
            return f"Database error: {str(e)}", 500  # Internal Server Error


class GetBaseNodeByUuid(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self, basenode_uuid):
        str_basenode_uuid = str(basenode_uuid)

        try:
            self.cursor.execute(postgresql_select_BasePoint_by_Uuid, (str_basenode_uuid,))
            basepoint_record = self.cursor.fetchall()

            self.cursor.execute(postgresql_select_BasePoint_Connections_by_BasePointUuid, (str_basenode_uuid,))
            base_connections_record = self.cursor.fetchall()

            if basepoint_record:
                return basenode_with_connections_tuple_to_dict(basepoint_record, base_connections_record)
            else:
                raise NotFound("Base node with UUID '{}' not found".format(str_basenode_uuid))

        except Exception as e:
            print("An unexpected error occurred:", e)
            return jsonify({'message': "internal_server_error_message"}), 500


class AddBaseNodeConnection(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']
        self.parser = kwargs['parser']

    def post(self, basenode_uuid):
        args = self.parser.parse_args()

        basenode_uuid = str(basenode_uuid)

        node_to_connect_uuid = args['node_uuid']
        floor_uuid = args['floor_uuid']

        try:
            # Check for basepoint existence
            self.cursor.execute(postgresql_select_BasePoint_by_Uuid, (basenode_uuid,))
            basepoint_record = self.cursor.fetchall()
            if not basepoint_record:
                return {'message': 'Basepoint with UUID "{}" not found'.format(basenode_uuid)}, 404

            # Process data and insert connections
            basenode_center_x, basenode_center_y = find_polygon_center(basepoint_record[0][3])
            self.cursor.execute(postgresql_select_only_coords_from_BasePoint_by_Uuid, (node_to_connect_uuid,))
            node_to_connect_coordinates_record = self.cursor.fetchall()
            node_to_connect_center_x, node_to_connect_center_y = find_polygon_center(
                node_to_connect_coordinates_record[0][0])
            weight = manhattan_distance(basenode_center_x, basenode_center_y, node_to_connect_center_x,
                                        node_to_connect_center_y)

            self.cursor.execute(postgresql_insert_BasePoint_Connection,
                                (weight, basenode_uuid, node_to_connect_uuid, floor_uuid,))
            self.cursor.execute(postgresql_insert_BasePoint_Connection,
                                (weight, node_to_connect_uuid, basenode_uuid, floor_uuid,))
            self.cursor.connection.commit()

            return {'message': 'Record successfully added'}, 201

        except Exception as e:
            print(e)  # Log the error for debugging
            self.cursor.connection.rollback()
            return {'message': 'Internal server error'}, 500


class GetAllBasePointsConnections(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self):
        try:
            self.cursor.execute(postgresql_select_AllBasePointsConnections)
            baseconnection_record = self.cursor.fetchall()

            if not baseconnection_record:
                return {'message': 'Record not found'}, 404  # Clearer message

        except Exception as e:
            print(f"An error occurred: {e}")
            return {'message': 'Internal server error'}, 500

        return baseconnection_record
