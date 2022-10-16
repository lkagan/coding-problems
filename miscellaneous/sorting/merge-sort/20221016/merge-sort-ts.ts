'use strict';

// @ts-ignore
const mergeSort = (nums: number[]): number[] => {
    if (nums.length <= 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);
    return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
}

const merge = (left: number[], right: number[]): number[] => {
    let result: number[] = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift()!);
        } else {
            result.push(right.shift()!);
        }
    }

    return [...result, ...left, ...right];
}

export default mergeSort;