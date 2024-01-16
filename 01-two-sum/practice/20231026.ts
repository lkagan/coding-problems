function twoSum(nums: number[], target: number): Array<number> {
    const seen: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; ++i) {
        const diff: number = target - nums[i];

        if (seen.has(diff)) {
            return [seen.get(diff) as number, i];
        }

        seen.set(nums[i], i);
    }

    return [];
}