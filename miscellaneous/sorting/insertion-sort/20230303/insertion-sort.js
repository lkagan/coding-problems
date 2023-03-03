'use strict';

module.exports = (nums) => {
    if (nums.length <= 1) return nums;

    for (let i = 1; i < nums.length; ++i) {
        let j = i - 1;
        const current = nums[i];

        while (j >= 0 && nums[j] > current) {
            nums[j+1] = nums[j--];
        }

        nums[++j] = current;
    }

    return nums;
}