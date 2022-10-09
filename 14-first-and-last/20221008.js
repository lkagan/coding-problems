module.exports = (nums, target) => {
    const foundAt = binarySearch(nums, target, 0, nums.length - 1);
    let temp = 0;
    let first = foundAt;
    let last = foundAt;

    if (foundAt === -1) {
        return [-1, -1];
    }

    // Find first occurrence of target on left
    while (temp = binarySearch(nums, target, 0, first - 1)) {
        if (nums[temp] !== target) {
            break;
        }

        first = temp;
    }

    // Find last occurrence of target on left
    while (temp = binarySearch(nums, target, last + 1, nums.length - 1)) {
        if (nums[temp] !== target) {
            break;
        }

        last = temp;
    }

    return [first, last];
}

function binarySearch(nums, target, start, end) {
    while (start <= end) {
        let mid = Math.floor((end - start) / 2) + start;

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid - 1] && target < nums[mid]) {
            end = mid - 1;
        } else if (nums[mid + 1]) {
            start = mid + 1;
        }
    }

    return -1;
}