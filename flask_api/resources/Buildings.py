from flask_api.resources.db_scripts.db_query import postgresql_insert_Building, postgresql_select_AllBuildings
from flask_restful import Resource, reqparse

class AddBuilding(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']
        self.parser = kwargs['parser']

    def post(self):
        args = self.parser.parse_args()

        uuid = args['uuid']
        displayed_name = args['displayed_name']
        private_name = args['private_name']
        description = args['description']

        self.cursor.execute(postgresql_insert_Building, (uuid, displayed_name, private_name,description,))

        return "Record was successfully added", 200


class GetAllBuildings(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self):
        self.cursor.execute(postgresql_select_AllBuildings)
        building_record = self.cursor.fetchall()

        print (building_record)
        if building_record != []:
            response = []
            for i in range(len(building_record)):
                building = {
                "id": building_record[i][0],
                "uuid": building_record[i][1],
                "displayed_name": building_record[i][2],
                "private_name": building_record[i][3],
                "describtion": building_record[i][4]
                }
                response.append(building)
            return response
        else:
            return "Record not found", 404