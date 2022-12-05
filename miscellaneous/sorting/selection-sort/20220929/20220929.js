function selectSort(nums) {
    if (nums.length < 2) {
        return nums;
    }

    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            (nums[j] < nums[i]) && ([nums[j], nums[i]] = [nums[i], nums[j]]);
        }
    }

    return nums;
}

module.exports = selectSort;
