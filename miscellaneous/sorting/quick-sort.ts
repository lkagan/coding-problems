function quickSort(nums: number[], start: number, end: number): number[] {
    let left: number = start;
    let right: number = start;
    let pivot: number = end;

    while (right < end) {
        if (nums[right] <= nums[pivot]) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }

        right++;
    }

    [nums[pivot], nums[left]] = [nums[left], nums[pivot]];

    start < left - 1 && quickSort(nums, start, left - 1);
    left + 1 < end && quickSort(nums, left + 1, end);
    return(nums);
}

const tests = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [2, 1, 3, 4, 5, 6, 7, 8, 9],
    [3, 2, 1, 4, 5, 6, 7, 8, 9],
];

for (let nums of tests) {
    console.log(quickSort(nums, 0, nums.length - 1));
}