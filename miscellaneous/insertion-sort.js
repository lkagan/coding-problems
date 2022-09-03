function insertionSort(nums) {
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] < nums[i - 1]) {
            for (let j = 0; j < i; j++) {
                if (nums[i] < nums[j]) {
                    nums.splice(j, 0, nums.splice(i, 1)[0]);
                    break;
                }
            }
        }
    }

    return nums;
}

const numbers = [3,8,1,3,3,5,7,1,2,6,2,7,0,1];
console.log(insertionSort(numbers));
