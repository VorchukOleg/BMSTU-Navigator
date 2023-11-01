import networkx as nx
import pandas as pd
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
matplotlib.use('Qt5Agg')

class Node:
    def __init__(self, _node_name, _x_cord, _y_cord, ):
        self.graph_instance = nx.Graph()
        self.node_name = _node_name;
        self.x_cord = _x_cord
        self.y_cord = _y_cord
        self.graph_instance.add_node(_node_name, pos=(_x_cord, _y_cord))
    def GetNode(self):
        return self.graph_instance
    def GetNodeName(self):
        return self.node_name

class BaseNode:
    def __init__(self, _base_node_name, _x_cord, _y_cord, ):
        self.graph_instance = nx.Graph()
        self.base_node_name = _base_node_name;
        self.x_cord = _x_cord
        self.y_cord = _y_cord
        self.graph_instance.add_node( _base_node_name, pos = (_x_cord, _y_cord) )
    def AddNode(self, _node_to_add ):
        self.graph_instance = nx.compose_all([_node_to_add.GetNode(), self.graph_instance])
        self.graph_instance.add_edge(_node_to_add.GetNodeName(), self.base_node_name, weight=5)

    def GetGraph(self):
        return self.graph_instance

    def GetBaseNodeName(self):
        return self.base_node_name

class Floor:
    pass


############################################### коридор 1
base_node_1 = BaseNode('коридор 1', 59.1, 96.6)
node_to_add = Node('104', 50.1, 109.5)
base_node_1.AddNode(node_to_add)
node_to_add = Node('106', 60.4, 110.4)
base_node_1.AddNode(node_to_add)
node_to_add = Node('WC 1', 68.8, 101.7)
base_node_1.AddNode(node_to_add)
node_to_add = Node('101', 51.2, 84.3)
base_node_1.AddNode(node_to_add)
############################################### коридор 2
base_node_2 = BaseNode('коридор 2', 82.4, 91.5)
node_to_add = Node('лестница 1', 75.6, 101.7)
base_node_2.AddNode(node_to_add)
node_to_add = Node('лестница 2', 91.2, 102.8)
base_node_2.AddNode(node_to_add)
node_to_add = Node('лестница 3', 78.7, 78.8)
base_node_2.AddNode(node_to_add)
############################################### коридор 3
base_node_3 = BaseNode('коридор 3', 116.9, 96.8)
node_to_add = Node('WC 2', 97.4, 101.0)
base_node_3.AddNode(node_to_add)
node_to_add = Node('028A', 107.9, 112.2)
base_node_3.AddNode(node_to_add)
node_to_add = Node('034A', 122.8, 112.2)
base_node_3.AddNode(node_to_add)
node_to_add = Node('062A', 135.8, 111.3)
base_node_3.AddNode(node_to_add)
############################################### коридор 4
base_node_4 = BaseNode('коридор 4', 169.4, 96.2)
node_to_add = Node('WC 3', 196.2, 102.8)
base_node_4.AddNode(node_to_add)
############################################### коридор 5
base_node_5 = BaseNode('коридор 5', 212.5, 91.1)
node_to_add = Node('лестница 4', 203.1, 102.1)
base_node_5.AddNode(node_to_add)
node_to_add = Node('лестница 5', 219.8, 103.2)
base_node_5.AddNode(node_to_add)
node_to_add = Node('117A', 202.4, 84.7)
base_node_5.AddNode(node_to_add)
############################################### коридор 6
base_node_6 = BaseNode('коридор 6', 238.2, 95.7)
node_to_add = Node('WC 4', 225.5, 102.5)
base_node_6.AddNode(node_to_add)
############################################### коридор 7
base_node_7 = BaseNode('коридор 7', 252.7, 106.7)
############################################### коридор 8
base_node_8 = BaseNode('коридор 8', 265.0, 103.0)
node_to_add = Node('114', 270.7, 112.0)
base_node_8.AddNode(node_to_add)
node_to_add = Node('137', 258.9, 95.3)
base_node_8.AddNode(node_to_add)
node_to_add = Node('139', 272.3, 95.5)
base_node_8.AddNode(node_to_add)
############################################### коридор 9
base_node_9 = BaseNode('коридор 9', 291.2, 100.1)
node_to_add = Node('141', 276.7, 95.1)
base_node_9.AddNode(node_to_add)
node_to_add = Node('145', 293.4, 94.4)
base_node_9.AddNode(node_to_add)
node_to_add = Node('147', 303.3, 95.7)
base_node_9.AddNode(node_to_add)

############################################### коридор 3.1
base_node_31 = BaseNode('коридор 3.1', 133.8, 73.7)
node_to_add = Node('125', 129.0, 76.4)
base_node_31.AddNode(node_to_add)
node_to_add = Node('лестница 6', 134.3, 62.3)
base_node_31.AddNode(node_to_add)
############################################### коридор 3.2
base_node_32 = BaseNode('коридор 3.2', 160.4, 77.3)
node_to_add = Node('121', 145.3, 79.7)
base_node_32.AddNode(node_to_add)
node_to_add = Node('107', 144.4, 72.4)
base_node_32.AddNode(node_to_add)
node_to_add = Node('111', 156.9, 71.8)
base_node_32.AddNode(node_to_add)
node_to_add = Node('113', 166.8, 74.8)
base_node_32.AddNode(node_to_add)
node_to_add = Node('109б', 171.0, 81.7)
base_node_32.AddNode(node_to_add)
node_to_add = Node('109', 180.0, 79.5)
base_node_32.AddNode(node_to_add)
############################################### коридор 3.3
base_node_33 = BaseNode('коридор 3.3', 179.8, 70.2)
############################################### коридор 3.4
base_node_34 = BaseNode('коридор 3.4', 194.5, 66.3)
node_to_add = Node('119', 204.2, 63.4)
base_node_34.AddNode(node_to_add)


G1 = base_node_1.GetGraph()
G2 = base_node_2.GetGraph()
G3 = base_node_3.GetGraph()
G4 = base_node_4.GetGraph()
G5 = base_node_5.GetGraph()
G6 = base_node_6.GetGraph()
G7 = base_node_7.GetGraph()
G8 = base_node_8.GetGraph()
G9 = base_node_9.GetGraph()


G = nx.compose_all([G1, G2, G3, G4, G5, G6, G7, G8, G9]) ## ЕДИНСТВЕННАЯ ПОЛЕЗНАЯ СТРОЧКА. ОБЪЕДИНЕНИЕ ГРАФОВ ВОЕДИНО
G.add_edge(base_node_1.GetBaseNodeName(),base_node_2.GetBaseNodeName(),weight=5)
G.add_edge(base_node_2.GetBaseNodeName(),base_node_3.GetBaseNodeName(),weight=5)
G.add_edge(base_node_3.GetBaseNodeName(),base_node_4.GetBaseNodeName(),weight=5)
G.add_edge(base_node_4.GetBaseNodeName(),base_node_5.GetBaseNodeName(),weight=5)
G.add_edge(base_node_5.GetBaseNodeName(),base_node_6.GetBaseNodeName(),weight=5)
G.add_edge(base_node_6.GetBaseNodeName(),base_node_7.GetBaseNodeName(),weight=5)
G.add_edge(base_node_7.GetBaseNodeName(),base_node_8.GetBaseNodeName(),weight=5)
G.add_edge(base_node_8.GetBaseNodeName(),base_node_9.GetBaseNodeName(),weight=5)

G31 = base_node_31.GetGraph()
G32 = base_node_32.GetGraph()
G33 = base_node_33.GetGraph()
G34 = base_node_34.GetGraph()

G = nx.compose_all([G, G31, G32, G33, G34])

G.add_edge(base_node_3.GetBaseNodeName(),base_node_31.GetBaseNodeName(),weight=5)
G.add_edge(base_node_31.GetBaseNodeName(),base_node_32.GetBaseNodeName(),weight=5)
G.add_edge(base_node_32.GetBaseNodeName(),base_node_33.GetBaseNodeName(),weight=5)
G.add_edge(base_node_33.GetBaseNodeName(),base_node_34.GetBaseNodeName(),weight=5)

initial_point = input('enter initial point')
finish_point = input('enter finish point')

path = nx.shortest_path(G, initial_point, finish_point, weight='weight')
print("shortest parth = " + str(path))
length = nx.shortest_path_length(G, initial_point, finish_point, weight='weight')
print("lenth of the shortest parth = " + str(length))

nodePos = nx.get_node_attributes(G, 'pos')
datafile = 'ULK.jpeg'
#datafile = 'FirstFloorPlan.png'
img = plt.imread(datafile)

plt.imshow(img, zorder=0, extent=[0.0, 327.0, 0.0, 135.0])
nx.draw(G, pos = nodePos, with_labels=True)
plt.show()
