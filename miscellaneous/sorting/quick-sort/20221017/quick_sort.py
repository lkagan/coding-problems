from typing import List


def quick_sort(nums: List[int], start: int, end: int) -> List[int]:
    left = start
    right = start
    pivot = end

    if end - start <= 0:
        return nums

    while right < end:
        if nums[right] <= nums[pivot]:
            [nums[right], nums[left]] = [nums[left], nums[right]]
            left += 1

        right += 1

    [nums[left], nums[pivot]] = [nums[pivot], nums[left]]
    left - 2 >= 0 and quick_sort(nums, start, left - 1)
    end - left >= 2 and quick_sort(nums, left + 1, end)

    return nums
