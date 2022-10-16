const mergeSort = (nums) => {
    if (nums.length <= 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);
    return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
}

const merge = (left, right) => {
    const merged = [];
    let i = 0, j = 0, k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged[k] = left[i];
            i++;
        } else {
            merged[k] = right[j];
            j++;
        }

        k++;
    }

    if (j === right.length ) {
        return merged.concat(left.slice(i));
    } else {
        return merged.concat(right.slice(j));
    }
}

module.exports = mergeSort;