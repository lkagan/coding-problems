'use strict';

module.exports = (nums) => {
    if (nums.length <= 1) return nums;
    let sorted = true;

    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[i]) {
                sorted = false;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }

            if (sorted) return nums;
        }
    }

    return nums;
}