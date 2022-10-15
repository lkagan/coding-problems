module.exports = (nums) => {
    for (let i = 1; i < nums.length; ++i) {
        let current = nums[i];

        for (var j = i - 1; j >= 0 && nums[j] > current; --j) {
            nums[j + 1] = nums[j];
        }

        nums[j+1] = current;
    }

    return nums;
}