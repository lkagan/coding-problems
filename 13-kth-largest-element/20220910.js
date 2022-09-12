function findKthLargest(nums, k) {
    quickerSort(nums, 0, nums.length - 1, k);
    return nums[nums.length - k];
}

function quickerSort(nums, start, end, k) {
    if (nums?.length < 2) {
        return;
    }

    let left = start;
    let right = start;

    while (right < end) {
        if (nums[right] <= nums[end]) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }

        right++;
    }

    [nums[left], nums[end]] = [nums[end], nums[left]];

    left - 1 > start && quickerSort(nums, start, left - 1);
    left + 1 < end && quickerSort(nums, left + 1, end);
}


let nums;
nums = [3, 2, 1, 5, 6, 4];
const k = 2 // 5

console.log(findKthLargest(nums, k));
// console.log(nums);
