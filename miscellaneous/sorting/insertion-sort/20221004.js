function insertionSort(nums) {
    if (nums?.length < 2) {
        return nums;
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            for (let j = 0; j < i; j++) {
                if (nums[i] < nums[j]) {
                    nums.splice(j, 0, nums.splice(i, 1));
                }
            }
        }
    }

    return nums;
}

module.exports = insertionSort;