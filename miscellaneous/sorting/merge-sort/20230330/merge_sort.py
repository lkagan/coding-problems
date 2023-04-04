from typing import List
from math import floor


def sort(nums: List[int]) -> List[int]:
    length = len(nums)

    if length < 2:
        return nums

    mid = floor(length / 2)
    return merge(sort(nums[0:mid]), sort(nums[mid:length]));


def merge(left, right):
    merged = []

    while left and right:
        merged.append(left.pop(0) if left[0] < right[0] else right.pop(0))

    return merged + left + right

