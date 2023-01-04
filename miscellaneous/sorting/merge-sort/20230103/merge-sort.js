'use strict';

/**
 *
 * @param nums [number]
 * @returns {*}
 */
function mergeSort(nums) {
    if (nums.length <= 1) return nums;

    const mid = Math.floor((nums.length) / 2);

    return merge(
        mergeSort(nums.slice(0, mid)),
        mergeSort(nums.slice(mid))
    );
}

function merge(left, right) {
    const merged = [];

    while (left.length && right.length) {
        merged.push(left[0] > right[0] ? right.shift() : left.shift());
    }

    return [...merged, ...left, ...right];
}

module.exports = mergeSort;