function twoSum(nums, target) {
    const seen = {};

    for (let i = 0; i < nums.length; ++i) {
       let compliment = target - nums[i];

       if (seen[compliment] !== undefined) {
           return [seen[compliment], i];
       } else {
           seen[nums[i]] = i;
       }
    }

    return null;
}