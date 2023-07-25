from graph_bfs import bfs


def test_bfs():
    adj_list = (
        (1, 3),
        (0,),
        (3, 8),
        (0, 2, 4, 5),
        (3, 6),
        (3,),
        (4, 7),
        (6,),
        (2,),
    )

    expected = [0, 1, 3, 2, 4, 5, 8, 6, 7]

    assert bfs(adj_list, 0) == expected
