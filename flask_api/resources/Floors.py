from flask_api.resources.db_scripts.db_query import postgresql_select_Floors_by_Building_ID, postgresql_select_AllBasePointsAtTheFloor, postgresql_select_AllRoomsAtTheFloor,\
postgresql_select_FloorIDByBuildingIDAndFloorNumber
from flask_api.models.Floors_model import floor_tuple_to_dict
from flask_api.models.Rooms_model import room_tuple_to_dict
from flask_api.common.util import is_int_convertible
from flask_api.models.BaseNodes_model import basenode_tuple_to_dict
from flask_restful import Resource
from flask import Flask, request

class GetAllFloorsByBuildingID(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self, building_id):
        self.cursor.execute(postgresql_select_Floors_by_Building_ID, (building_id,))
        floors_record = self.cursor.fetchall()
        
        if floors_record != []:
            return floor_tuple_to_dict(floors_record)
        else:
            return "Record not found", 404

class GetAllRoomsAndBasepointsByFloorID(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self):
        floor_id = str(request.args.get('floor_id'))
        
        if not is_int_convertible(floor_id):
            return "Bad request", 400
        
        
        self.cursor.execute(postgresql_select_AllBasePointsAtTheFloor,(floor_id,))
        basepoints_record = self.cursor.fetchall()
        basenode_dict = basenode_tuple_to_dict(basepoints_record)

        self.cursor.execute(postgresql_select_AllRoomsAtTheFloor,(floor_id,))
        rooms_record = self.cursor.fetchall()
        rooms_dict = room_tuple_to_dict(rooms_record)

        return  {"basenode": basenode_dict,
        "rooms": rooms_dict
        }

class GetAllRoomsAndBasepointsByBuildingIDAndFloorNumber(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self):
        floor_number = str(request.args.get('floor_number'))
        building_id = str(request.args.get('building_id'))
        
        if (not is_int_convertible(building_id) and not is_int_convertible(floor_number)) :
            return "Bad request", 400
        
        self.cursor.execute(postgresql_select_FloorIDByBuildingIDAndFloorNumber, (building_id, floor_number,))
        floor_id_record = self.cursor.fetchall()
        floor_id = floor_id_record[0][0]
        
        self.cursor.execute(postgresql_select_AllBasePointsAtTheFloor,(floor_id,))
        basepoints_record = self.cursor.fetchall()
        basenode_dict = basenode_tuple_to_dict(basepoints_record)

        self.cursor.execute(postgresql_select_AllRoomsAtTheFloor,(floor_id,))
        rooms_record = self.cursor.fetchall()
        rooms_dict = room_tuple_to_dict(rooms_record)

        return  {"basenode": basenode_dict,
        "rooms": rooms_dict  }
           
        