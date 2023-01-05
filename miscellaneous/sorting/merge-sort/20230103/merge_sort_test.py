from merge_sort import merge_sort

test_cases = [
    [],
    [2],
    [2, 1],
    [99, 44, 6, 2],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
]


def test_merge_sort() -> None:
    for nums in test_cases:
        assert merge_sort(nums) == sorted(nums)
