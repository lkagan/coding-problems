from typing import List


def quick_sort(nums: List[int], start: int, end: int) -> List[int]:
    if len(nums) < 2 or end <= start:
        return nums

    left = start
    right = start
    pivot = end

    while right < end:
        if nums[right] <= nums[pivot]:
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left += 1

        right += 1

    [nums[pivot], nums[left]] = [nums[left], nums[pivot]]

    left - 1 > start and quick_sort(nums, start, left - 1)
    left + 1 < end and quick_sort(nums, left + 1, end)

    return nums
