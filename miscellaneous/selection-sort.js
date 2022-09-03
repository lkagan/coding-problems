function selectionSort(nums) {
    for (let i = 0; i < nums.length - 1; ++i) {
        let lowestIdx = i;

        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[lowestIdx]) {
                lowestIdx = j;
            }
        }

        if (lowestIdx !== i) {
            let lowest = nums [lowestIdx];
            nums[lowestIdx] = nums[i];
            nums[i] = lowest;
        }
    }

    return nums;
}

function selectionSort(nums) {
    for (let i = 0; i < nums.length - 1; ++i) {
        let lowestIdx = i;

        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] < nums[lowestIdx]) {
                lowestIdx = j;
            }
        }

        if (lowestIdx !== i) {
            let lowest = nums [lowestIdx];
            nums[lowestIdx] = nums[i];
            nums[i] = lowest;
        }
    }

    return nums;
}

const numbers = [3,8,1,3,3,5,7,1,2,6,2,7,0,1];
// const numbers = [0,3,1,2];
console.log(selectionSort(numbers));