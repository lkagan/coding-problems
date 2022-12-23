from bubble_sort import bubble_sort


testCases = [
    [],
    [2],
    [2, 1],
    [99, 44, 6, 2],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
]

def test_bubble_sort():
    for i in range(len(testCases)):
        assert bubble_sort(testCases[i]) == sorted(testCases[i])
