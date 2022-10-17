'use strict';

const quickSort = (nums: number[], start: number, end: number): number[] => {
    const pivot = end;
    let left: number = start;
    let right: number = start;

    while (right < end) {
        if (nums[right] <= nums[pivot]) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }

        right++;
    }

    [nums[left], nums[pivot]] = [nums[pivot], nums[left]];

    left - 1 > start && quickSort(nums, start, left - 1);
    left + 1 < end && quickSort(nums, left + 1, end);
    return nums;
}

export default quickSort;