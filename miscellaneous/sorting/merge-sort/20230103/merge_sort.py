from typing import List
from math import floor

def merge_sort(nums: List[int]) -> List[int]:
    if len(nums) <= 1:
        return nums

    mid = floor(len(nums)/2)

    merged = merge(merge_sort(nums[:mid]), merge_sort(nums[mid:]))
    return merged


def merge(left: List[int], right: List[int]) -> List[int]:
    merged: List[int] = []

    while len(left) and len(right):
        merged.append(left.pop(0) if left[0] < right[0] else right.pop(0))

    return merged + left + right