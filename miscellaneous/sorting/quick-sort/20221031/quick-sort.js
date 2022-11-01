'use strict';

const quickSort = (nums, start, end) => {
    if (end - start <= 1) {
        return nums;
    }

    const pivot = nums.length - 1;
    let right = 0;
    let left = 0;

    while (right < end) {
        if (nums[right] <= nums[pivot]) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }

        right++;
    }

    (left - 1) > 0 && quickSort(nums, 0, left - 1);
    (right < nums.length - 1) && quickSort(nums, left + 1, nums.length - 1);
    return nums;
}

module.exports = quickSort;