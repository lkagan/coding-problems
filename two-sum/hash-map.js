const twoSum = (nums, target) => {
    const seen = {};

    for (let i = 0; i < nums.length; ++i) {
        const missing = target - nums[i];

        if (seen[missing] !== undefined) {
            return [seen[missing], i];
        }

        seen[nums[i]] = i;
    }

    return null;
}


console.log(twoSum([ 2, 7, 11, 15 ], 9)); // [0, 1]
console.log(twoSum([ 3, 2, 4 ], 6)); // [1, 2]
console.log(twoSum([ 3, 3 ], 6)); // [0, 1]
console.log(twoSum([3], 6)); // null
console.log(twoSum([], 6)); // null