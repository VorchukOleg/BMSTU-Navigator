import networkx as nx
import matplotlib.pyplot as plt


class Vertex:
    def __init__(self, id, weight):
        self.id = id
        self.weight = weight


class MainPoint:
    def __init__(self, id, vertices):
        self.id = id
        self.vertices = vertices


# Функция для поиска минимального расстояния и точек пути
def find_shortest_path(graph, start, end):
    shortest_path = nx.dijkstra_path(graph, start, end)
    shortest_distance = nx.dijkstra_path_length(graph, start, end)
    return shortest_distance, shortest_path


# Создаем список главных точек (main)
main = []
main.append(MainPoint(1, [Vertex(2, 3), Vertex(13, 3), Vertex(3, 4), Vertex(3, 2), Vertex(9, 3), Vertex(10, 3)]))
main.append(MainPoint(2, [Vertex(4, 5), Vertex(5, 1), Vertex(12, 5)]))
main.append(MainPoint(3, [Vertex(6, 3), Vertex(7, 2), Vertex(8, 4), Vertex(14, 2)]))

# Создаем граф
G = nx.Graph()

# Добавляем вершины и ребра в граф
for main_point in main:
    G.add_node(main_point.id)
    for vertex in main_point.vertices:
        G.add_node(vertex.id)
        G.add_edge(main_point.id, vertex.id, weight=vertex.weight)

# Отрисовываем граф
pos = nx.spring_layout(G)
nx.draw(G, pos, with_labels=True)

# Добавляем веса ребер
labels = nx.get_edge_attributes(G, 'weight')
nx.draw_networkx_edge_labels(G, pos, edge_labels=labels)

# Пример поиска расстояния и пути между вершинами 1 и 8
print("Введите id двух точек: ")
start_vertex, end_vertex = map (int, input ().split ())
shortest_distance, shortest_path = find_shortest_path(G, start_vertex, end_vertex)
print("Минимальное расстояние:", shortest_distance)
print("Путь:", shortest_path)

# Отображаем граф на экране
plt.show()