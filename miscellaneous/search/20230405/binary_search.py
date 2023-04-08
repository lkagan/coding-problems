import math
from typing import Tuple


def binarySearch(nums: Tuple[int], target: int, start: int = None, end: int = None) -> int:
    start = 0 if start is None else start = start
    end = len(nums) - 1 if end is None else end = end

    if end - start < 0:
        return -1

    mid = math.floor((start - end) / 2) + start

    if target < nums[mid]:
        return binarySearch(nums, target, start, mid)

    if target > nums[mid]:
        return binarySearch(nums, target, mid)

    if target == nums[mid]:
        return mid

    return -1



