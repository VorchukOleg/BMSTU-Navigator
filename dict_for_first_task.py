coords = {
    "firstPoint": {"secondPoint": 10, "room1": 4, "room2": 5, "room3": 3},
    "room1": {"firstPoint": 4},
    "room2": {"firstPoint": 5, "secondPoint": 100},
    "room3": {"firstPoint": 3},
    "secondPoint": {"firstPoint": 10, "thirdPoint": 10, "room4": 4, "room5": 6, "room2": 2},
    "room4": {"secondPoint": 4},
    "room5": {"secondPoint": 6},
    "room6": {"secondPoint": 2},
    "thirdPoint": {"secondPoint": 10, "forthPoint": 10, "room2": 100, "room8": 4, "room9": 1},
    "room7": {"thirdPoint": 2},
    "room8": {"thirdPoint": 4},
    "room9": {"thirdPoint": 1},
    "forthPoint": {"thirdPoint": 10, "room10": 3, "room11": 7, "room12": 6},
    "room10": {"forthPoint": 3},
    "room11": {"forthPoint": 7},
    "room12": {"forthPoint": 6},
}

# points = {
#     'groundStageFirstPoint': {"enter": 20, "groundStageSecondPoint": 20, "cafe": 10, "garderob1": 5},
#     'groundStageSecondPoint': {"groundStageFirstPoint": 20, "groundStageThirdPoint": 20, "coworking": 11,
#                                "garderob2": 4},
#     'groundStageThirdPoint': {"groundStageSecondPoint": 20, "finish": 20, "buffet": 15, "garderob3": 6}
# }
# class Point:
#     def __init__(self, name):
#         self.name = name
#         self.paths = {b: 20}
#
# a = Point('coworking1')
# b = Point('coworking2')
# c = Point('coworking3')
# d = Point('coworking4')
#
# points = {a: {b: 20}, b, c, d}