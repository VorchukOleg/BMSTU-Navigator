
#select queries
postgresql_select_RoomBasePoint = """SELECT base_point_id FROM public.room WHERE room_id = %s """
postgresql_select_AllCoords = """SELECT room_id, coordinates FROM room """
postgresql_select_RoomCoordinates = """SELECT coordinates FROM public.room WHERE room_id = %s """
postgresql_select_AllBasePoints = """SELECT * FROM public.base_point"""
postgresql_select_AllBasePointsAtTheFloor = """SELECT * FROM public.base_point WHERE floor_id = %s """
postgresql_select_AllRoomsAtTheFloor = """SELECT * FROM public.room WHERE floor_id = %s """
postgresql_select_AllBasePointsAtTheFloorNoFloorID = """SELECT * FROM public.base_point"""
postgresql_select_AllBuildings = """SELECT * FROM public.building """
postgresql_select_FloorIDByBuildingIDAndFloorNumber = """SELECT floor_id FROM public.floor WHERE building_id = %s and floor_number = %s"""
postgresql_select_AllBasePointsConnections = """SELECT base_point_1_id, base_point_2_id FROM public.base_connection """
postgresql_select_BasePoint_by_ID = """SELECT * FROM public.base_point WHERE  base_point_id = %s """
postgresql_select_only_coords_from_BasePoint_by_ID = """SELECT coordinates FROM public.base_point WHERE  base_point_id = %s """
postgresql_select_Floors_by_Building_ID = """SELECT * FROM public.floor WHERE  building_id = %s """
postgresql_select_BasePoint_Connections_by_BasePointID = """SELECT * FROM public.base_connection WHERE  base_point_1_id = %s """

#insert queries
postgresql_insert_BasePoint_Connection = """INSERT INTO base_connection(weight, base_point_1_id, base_point_2_id)
                                                 VALUES (%s, %s, %s);"""
postgresql_insert_BasePoint = """INSERT INTO base_point(uuid, floor_id, coordinates)
                                                 VALUES (%s, %s, %s);"""
postgresql_insert_Building = """INSERT INTO building(uuid, displayed_name, private_name, description)
                                                 VALUES (%s, %s, %s, %s);"""