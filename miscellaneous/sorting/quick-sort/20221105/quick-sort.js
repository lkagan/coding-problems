'use strict';

function quickSort(nums, start, end) {
    const pivot = end;
    let right = start;
    let left = start;

    while (right < pivot) {
        if (nums[right] < nums[pivot]) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }

        right++;
    }

    [nums[pivot], nums[left]] = [nums[left], nums[pivot]];

    start < left - 1 && quickSort(nums, start, left - 1);
    left + 1 < end && quickSort(nums, left + 1, end);

    return nums;
}

module.exports = quickSort;
