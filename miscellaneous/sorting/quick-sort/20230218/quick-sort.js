'use strict'

const quickSort = (nums, start, end) => {
    if (nums.length <= 1) return nums;

    let left = start;
    let right = start;
    const pivot = end;

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


module.exports = quickSort;