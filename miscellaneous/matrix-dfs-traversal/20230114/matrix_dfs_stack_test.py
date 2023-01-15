from matrix_dfs_stack import matrix_dfs

test_matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

result = [1, 6, 11, 16, 17, 18, 19, 20, 15, 10, 9, 8, 3, 4, 5, 14, 13, 12, 7, 2]


def test_matrix_dfs():
    assert matrix_dfs(test_matrix, (0, 0)) == result
