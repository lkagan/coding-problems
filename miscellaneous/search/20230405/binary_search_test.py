from binary_search import binarySearch

nums = 2, 5, 99, 128, 167, 2000, 45000
target = 167


def test_binary_search():
    assert binarySearch(nums, target) == nums.index(target)
