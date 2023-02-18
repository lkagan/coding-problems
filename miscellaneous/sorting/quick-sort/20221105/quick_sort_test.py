from quick_sort import quick_sort


test_cases = [
    [],
    [2],
    [2, 1],
    [99, 44, 6, 2],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
]


def test_quick_sort():
    for test_case in test_cases:
        assert quick_sort(test_case, 0, len(test_case) - 1) == sorted(test_case)
