from insertion_sort import sort

test_data = [
    [],
    [2],
    [2, 1],
    [99, 44, 6, 2],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
]


def test_insertion_sort():
    for nums in test_data:
        assert sorted(nums) == sort(nums)