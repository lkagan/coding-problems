function quickSort(nums: number[], start: number, end: number): number[] {
    const pivot = end;
    let left = start;
    let right = start;

    while (right < end) {
        if (nums[right] <= nums[pivot]) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }

        right++;
    }

    [nums[pivot], nums[left]] = [nums[left], nums[pivot]];

    start < left - 1 && quickSort(nums, start, left - 1);
    end > left + 1 && quickSort(nums, left + 1, end);

    return nums;
}

export default quickSort;