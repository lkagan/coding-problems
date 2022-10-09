module.exports = (nums, target) => {
    const notFound = [-1,-1];

    if (! nums?.length) {
        return  notFound;
    }

    let first = binarySearch(nums, target, 0, nums.length - 1);

    if (first === null) {
        return [-1, -1];
    }

    let last = first;
    let temp = 0;

    while (first !== null) {
        temp = first;
        first = binarySearch(nums, target, 0, first - 1);
    }

    first = temp;

    while (last !== null) {
        temp = last;
        last = binarySearch(nums, target, last + 1, nums.length - 1);
    }

    last = temp;

    return [first, last];
}

function binarySearch(nums, target, first, last) {
    while (first <= last) {
        let mid = Math.floor((last - first) / 2) + first;

        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }

    return null;
}