from graph_dfs import graph_dfs


graph = [
    [1,3],
    [0],
    [3,8],
    [0,4,5,2],
    [3,6],
    [3],
    [4,7],
    [6],
    [2],
]

results = [0,1,3,4,6,7,5,2,8]

def test_graph_dfs():
    assert graph_dfs(graph) == results