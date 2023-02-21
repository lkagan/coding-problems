function quickSort(nums: Array<number>, start: number, end: number): Array<number> {
    if (nums.length <= 1 || end <= start) return nums;

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

    start < left - 1 && quickSort(nums, start, left - 1);
    end > left + 1 && quickSort(nums, left + 1, end);

    return nums;
}

export default quickSort;