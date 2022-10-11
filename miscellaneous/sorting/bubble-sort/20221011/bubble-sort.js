module.exports = (nums) => {
    if (nums?.length < 2) {
        return nums;
    }

    for (let i = nums.length - 2; i >= 0; --i) {
        for (let j = 0; j <= i; ++j) {
            nums[j] > nums[j+1] && ([nums[j], nums[j+i]] = [nums[j+1], nums[j]]);
        }
    }

    return nums;
}