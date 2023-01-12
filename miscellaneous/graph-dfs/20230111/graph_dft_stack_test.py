from graph_dft_stack import GraphDft

graph = [
    [1,3],
    [0],
    [3,8],
    [0,2,4,5],
    [3,6],
    [3],
    [4,7],
    [6],
    [2],
]

results = [0,3,5,4,6,7,2,8,1]

def test_graph_dft():
    assert GraphDft().graph_dft(graph) == results