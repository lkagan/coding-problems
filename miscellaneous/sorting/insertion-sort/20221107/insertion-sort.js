'use strict';

module.exports = (nums) => {
    if (!nums || nums?.length < 2) {
        return nums;
    }

    for (let i = 1; i < nums.length; ++i) {
        let j = i - 1;
        let current = nums[i];

        while (j >= 0 && current < nums[j]) {
            nums[j+1] = nums[j--];
        }

        nums[j+1] = current;
    }

    return nums;
}