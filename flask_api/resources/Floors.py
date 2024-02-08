from flask_api.resources.db_scripts.db_query import postgresql_select_Floors_by_Building_ID
from flask_restful import Resource

class GetAllFloorsByBuildingID(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self, building_id):
        self.cursor.execute(postgresql_select_Floors_by_Building_ID, (building_id,))
        floors_record = self.cursor.fetchall()

        if floors_record != []:
            response = []
            for i in range(len(floors_record)):
                floor = {
                    "id": floors_record[i][0],
                    "uuid": floors_record[i][1],
                    "displayed_name": floors_record[i][2],
                    "private_name": floors_record[i][3],
                    "describtion": floors_record[i][4]
                }
                response.append(floor)
            return response
        else:
            return "Record not found", 404