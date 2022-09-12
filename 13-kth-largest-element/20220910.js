function findKthLargest(nums, k) {
    const indexToFind = nums.length - k;
    return quickSelect(nums, 0, nums.length - 1, indexToFind);
}

function quickSelect(nums, start, end, indexToFind) {
    if (start === end) {
        return nums[start];
    }

    let left = start;
    let right = start;

    while (right < end) {
        if (nums[right] <= nums[end]) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }

        right++;
    }

    [nums[left], nums[end]] = [nums[end], nums[left]];

    if (left === indexToFind) {
        return nums[indexToFind];
    } else if (left > indexToFind) {
        return quickSelect(nums, start, left - 1, indexToFind);
    } else {
        return quickSelect(nums, left + 1, end, indexToFind);
    }
}


let nums, k;
nums = [3, 2, 1, 5, 6, 4];
k = 2 // 5

nums = [3,2,3,1,2,4,5,5,6]
k = 4;
console.log(findKthLargest(nums, k));
