from selection_sort import selection_sort

testCases = [
    [],
    [2],
    [2, 1],
    [99, 44, 6, 2],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
]


def test_selection_sort() -> None:
    for i in range(len(testCases)):
        assert selection_sort(testCases[i]) == sorted(testCases[i])
