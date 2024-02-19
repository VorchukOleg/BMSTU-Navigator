def floor_tuple_to_dict(tuple):
    array = []
    for i in range(len(tuple)):
        floor = {
            "id": tuple[i][0],
            "uuid": tuple[i][1],
            "displayed_name": tuple[i][2],
            "private_name": tuple[i][3],
            "describtion": tuple[i][4],
            "floor_number": tuple[i][6]
        }
        array.append(floor)
    return array        