def basenode_tuple_to_dict(tuple):
    array = []
    for i in range(len(tuple)):
        base_point = {
        "id": tuple[i][0],
        "uuid": tuple[i][1],
        "coordinates": tuple[i][2],
        "floor_id": tuple[i][3]
        }
        array.append(base_point)
    return array

def basenode_with_connections_tuple_to_dict(basenode_tuple, connections_tuple):
    connections = []
    for i in range(len(connections_tuple)):
        connection = {
            "base_connection_id" : connections_tuple[i][0],
            "weight": connections_tuple[i][1],
            "connection_type": connections_tuple[i][2],
            "base_point_1_id": connections_tuple[i][3],
            "base_point_2_id": connections_tuple[i][4],
    }
    connections.append(connection)
    result = {
        "id": basenode_tuple[0][0],
        "uuid": basenode_tuple[0][1],
        "coordinates": basenode_tuple[0][2],
        "floor_id": basenode_tuple[0][3],
        "connections": connections
        }
    return result