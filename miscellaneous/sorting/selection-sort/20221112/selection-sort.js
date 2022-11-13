'use strict';

module.exports = (nums) => {
    for (let i = 0; i < nums.length - 1; ++i) {
        let min = i;
        let sorted = true;

        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[min]) {
                sorted = false;
                min = j;
            }
        }

        if (sorted) {
            return nums;
        }

        min !== i && ([nums[min], nums[i]] = [nums[i], nums[min]]);
    }

    return nums;
}
