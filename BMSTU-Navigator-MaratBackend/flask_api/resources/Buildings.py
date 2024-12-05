from flask_api.resources.db_scripts.db_query import postgresql_insert_Building, postgresql_select_AllBuildings
from flask_restful import Resource, reqparse
from flask_api.models.Buildings_model import building_tuple_to_dict

class AddBuilding(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']
        self.parser = kwargs['parser']

    def post(self):
        args = self.parser.parse_args()
        building_uuid = args['building_uuid'] # добавлен ююид этажа
        displayed_name = args['displayed_name']
        private_name = args['private_name']
        description = args['description']
        floor_count = args['floor_count'] # исправлено вывод кол-ва этажей(почему-то второй раз выводилось описание)

        try:
            self.cursor.execute(postgresql_insert_Building,
                                (building_uuid, displayed_name, private_name, description, floor_count,))
            self.cursor.connection.commit()

            return {'message': 'Building successfully added'}, 201

        except Exception as e:
            print(e)
            self.cursor.connection.rollback()  # Rollback on errors
            return {'message': 'Internal server error'}, 500


class GetAllBuildings(Resource):
    def __init__(self, **kwargs):
        self.cursor = kwargs['cursor']

    def get(self):
        try:
            self.cursor.execute(postgresql_select_AllBuildings)
            building_record = self.cursor.fetchall()

            if not building_record:
                return {'message': 'No buildings found'}, 404

            return building_tuple_to_dict(building_record)

        except Exception as e:
            print(e)  # Log the error for debugging
            return {'message': 'Internal server error'}, 500