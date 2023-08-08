from graph_dfs_rec import dfs


def test_dfs():
    adj_list = [
        [1, 3],
        [0],
        [3, 8],
        [0, 2, 4, 5],
        [3, 6],
        [3],
        [4, 7],
        [6],
        [2],
    ]

    expected = [0, 1, 3, 2, 8, 4, 6, 7, 5]

    assert dfs(adj_list, 0) == expected
