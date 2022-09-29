function selectionSort(nums) {
    for (let i = 0; i < nums.length - 1; ++i) {
        let lowestIdx = i;

        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[lowestIdx]) {
                lowestIdx = j;
            }
        }

        if (lowestIdx !== i) {
            [nums[lowestIdx], nums[i]] = [nums[i], nums[lowestIdx]];
        }
    }

    return nums;
}

// Slightly more overhead but easier to follow.
function selectionSortSimplified(nums) {
    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }

    return nums;
}

const numbers = [3,8,1,3,3,5,7,1,2,6,2,7,0,1];
console.log(selectionSort(numbers));
console.log(selectionSortSimplified(numbers));
