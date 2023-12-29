import networkx as nx
import matplotlib.pyplot as plt


class Graph:
    def __init__(self):
        self.graph = nx.Graph()

    def add_mainpoint(self, codename, coordinates):
        self.graph.add_node(codename, type='mainpoint', coordinates=coordinates)

    def add_vertexpoint(self, codename, coordinates):
        self.graph.add_node(codename, type='vertexpoint', coordinates=coordinates)

    def add_edge(self, source, target, weight):
        self.graph.add_edge(source, target, weight=weight)

    def find_shortest_path(self, start, end):
        shortest_path = nx.shortest_path(self.graph, source=start, target=end, weight='weight')
        shortest_length = nx.shortest_path_length(self.graph, source=start, target=end, weight='weight')
        return shortest_path, shortest_length

    def visualize_graph(self):
        pos = nx.get_node_attributes(self.graph, 'coordinates')
        node_type = nx.get_node_attributes(self.graph, 'type')
        mainpoint_nodes = [node for node, ntype in node_type.items() if ntype == 'mainpoint']
        vertexpoint_nodes = [node for node, ntype in node_type.items() if ntype == 'vertexpoint']

        nx.draw_networkx_nodes(self.graph, pos, nodelist=mainpoint_nodes, node_color='blue', node_size=500, alpha=0.8)
        nx.draw_networkx_nodes(self.graph, pos, nodelist=vertexpoint_nodes, node_color='red', node_size=300, alpha=0.8)
        nx.draw_networkx_labels(self.graph, pos, font_color='white')
        nx.draw_networkx_edges(self.graph, pos, width=1.0, alpha=0.5)

        edge_labels = nx.get_edge_attributes(self.graph, 'weight')
        nx.draw_networkx_edge_labels(self.graph, pos, edge_labels=edge_labels)

        plt.axis('off')
        plt.show()


graph = Graph()

# Добавление связей коридоров
graph.add_edge('коридор1', 'коридор2', 3)
graph.add_edge('коридор2', 'коридор3', 3)

#################################################################### Коридор 1
graph.add_mainpoint('коридор1', (59.1, 96.6))
graph.add_vertexpoint('104', (50.1, 109.5))
graph.add_vertexpoint('106', (60.4, 110.4))
graph.add_vertexpoint('101', (51.2, 84.3))
graph.add_vertexpoint('WC1', (68.8, 101.7))
graph.add_edge('коридор1', '104', 5)
graph.add_edge('коридор1', '106', 5)
graph.add_edge('коридор1', '101', 5)
graph.add_edge('коридор1', 'WC1', 5)

#################################################################### Коридор 2
graph.add_mainpoint('коридор2', (82.4, 91.5))
graph.add_vertexpoint('лестница1', (75.6, 101.7))
graph.add_vertexpoint('лестница2', (91.2, 102.8))
graph.add_vertexpoint('лестница3', (78.7, 78.8))
graph.add_edge('коридор2', 'лестница1', 5)
graph.add_edge('коридор2', 'лестница2', 5)
graph.add_edge('коридор2', 'лестница3', 5)
#################################################################### Коридор 3
graph.add_mainpoint('коридор3', (116.9, 96.8))
graph.add_vertexpoint('WC2', (97.4, 101.0))
graph.add_vertexpoint('028A', (107.9, 112.2))
graph.add_vertexpoint('034A', (122.8, 112.2))
graph.add_vertexpoint('062A', (135.8, 111.3))
graph.add_edge('коридор3', 'WC2', 5)
graph.add_edge('коридор3', '028A', 5)
graph.add_edge('коридор3', '034A', 5)
graph.add_edge('коридор3', '062A', 5)