from dicts_for_first_task import coords

"""хранить каждую точку в dict
 ключ(название ребра?(улк вход)):значение(вес этого ребра)
 для каждой точки хранить dict с точками смежности
 //для оптимизации надо перебирать вершины от начала и от конца маршрута одновременно//
 наследование точек: все точки -> точки определенного этажа -> точки-перекрестки -> точки конечные(без возврата)
 uid
 """
path1 = 0
needPoint = "room2"
startPoint = 'room5'
currentPoint = startPoint
listForCurrentPath = [startPoint]
a = []

def findCurrentPath(listForCurrentPath, needPoint, path1):
    currentPoint = listForCurrentPath[-1]
    # print(listForCurrentPath)
    for keys, dist in coords.items():
        if keys == currentPoint:

            for point in coords[keys]:
                if point == needPoint:
                    a.append((listForCurrentPath + [needPoint], path1 + coords[keys][point]))
                elif (len(listForCurrentPath) > 1 and point != listForCurrentPath[-2]) or len(listForCurrentPath) == 1:
                    findCurrentPath(listForCurrentPath + [point], needPoint, path1 + coords[keys][point])


findCurrentPath(listForCurrentPath, needPoint, path1)
print(sorted(a, key=lambda x: x[-1]))