'use strict';

module.exports = (nums) => {
    let sorted = false;

    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = 0; j < nums.length - i; ++j) {
            if (nums[j] > nums[j+1]) {
                sorted = false;
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            }
        }

        if (sorted) return nums;
    }

    return nums;
}