module.exports = (nums, k) => {
    let left = 0;
    let right = 0;
    let pivot = nums.length - 1;
    let target = nums.length - k

    while (true) {
        while (right < pivot) {
            if (nums[right] <= nums[pivot]) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
            }

            right++;
        }

        [nums[left], nums[pivot]] = [nums[pivot], nums[left]];

        if (left === target) {
            return nums[left] || null;
        } else if (target > left) {
            left = left + 1;
            right = left;
        } else {
            pivot = left - 1;
            right = 0;
            left = 0;
        }
    }
}