import psycopg2
import os
from flask_restful import reqparse

def get_db_connection():
    # версия для работы в контейнере
    connection = psycopg2.connect(host = os.getenv("HOST_NAME"),
                                  database = os.getenv("DATABASE_NAME"),
                                  user = os.getenv("USER_NAME"),
                                  port = os.getenv("BACKEND_PORT_POSTGRES"),
                                  password = os.getenv("PASSWORD_POSTGRES"))


    # # версия для работы вне контейнера (в случае, если проблемы с кодировкой при импорте переменных окружения)
    # connection = psycopg2.connect(host = 'localhost',
    #                         database = 'BMSTU_Navigator',
    #                         user = 'postgres',
    #                         port = 5432,
    #                         password = 'postgres')


    return  connection

def get_parser():
    parser = reqparse.RequestParser()
    parser.add_argument('uuid')
    parser.add_argument('floor_id')
    parser.add_argument('coordinates')
    parser.add_argument('node_id')
    parser.add_argument('weight')
    parser.add_argument('displayed_name')
    parser.add_argument('private_name')
    parser.add_argument('description')
    return parser