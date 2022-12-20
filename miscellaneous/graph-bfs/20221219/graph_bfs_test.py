from graph_bfs import graph_bfs

graph = [
    [1, 3],
    [0],
    [3, 8],
    [0, 4, 5, 2],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2],
]

results = [0, 1, 3, 4, 5, 2, 6, 8, 7]


def test_graph_bfs():
    assert graph_bfs(graph) == results
