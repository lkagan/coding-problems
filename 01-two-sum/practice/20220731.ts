function twoSum(nums: number[], target: number): number[] {
    const seen = {};

    for (let i = 0; i < nums.length; ++i) {
        const current: number = nums[i];
        const numToFind: number = target - current;

        if (seen[numToFind] !== undefined) {
            return [seen[numToFind], i];
        } else {
            seen[current] = i;
        }
    }
}