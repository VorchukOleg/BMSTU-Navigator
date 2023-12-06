import sqlite3
import json

def get_coordinates_by_id():

    conn = sqlite3.connect("database.db")
    c = conn.cursor()

    id_value = int(input("Введите id: "))

    c.execute("SELECT coordinates FROM my_table_Final WHERE id=?", (id_value,))
    result = c.fetchone()

    if result:
        coordinates_value = json.loads(result[0])
        print(f"Координаты для id {id_value}: {coordinates_value}")
    else:
        print("Нет данных для указанного id.")

    conn.close()

get_coordinates_by_id()