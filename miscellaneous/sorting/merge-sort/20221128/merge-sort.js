function mergeSort(nums) {
    if (nums.length < 2) return nums;
    const mid = Math.floor(nums.length / 2);
    return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
}

function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        left[0] < right[0] ? results.push(left.shift()) : results.push(right.shift());
    }

    return [...results, ...left, ...right];
}

module.exports = mergeSort;
