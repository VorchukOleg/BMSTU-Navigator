def room_tuple_to_dict(tuple):
    array = []
    for i in range(len(tuple)):
        base_point = {
        "id": tuple[i][0],
        "uuid": tuple[i][1],
        "displayed_name": tuple[i][2],
        "private_name": tuple[i][3],
        "description": tuple[i][4],
        "room_type": tuple[i][5],
        "coordinates": tuple[i][6],
        "floor_id": tuple[i][7],
        "base_point_id" : tuple[i][8]
        }
        array.append(base_point)
    return array