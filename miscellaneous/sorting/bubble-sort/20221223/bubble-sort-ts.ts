export default (nums: Array<number>): Array<number> => {
    if (nums.length <= 1) return nums;

    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = 0; j < nums.length - i - 1; ++j) {
            nums[j] > nums[j+1] && ([nums[j], nums[j+1]] = [nums[j+1], nums[j]]);
        }
    }

    return nums;
}