function binarySearch(values, target, start, end) {
    start = start ?? 0;
    end = end ?? values.length - 1;

    const mid = start + Math.floor((end - start) / 2);

    if (target < values[mid]) return binarySearch(values, target, 0, mid);
    else if (target > values[mid]) return binarySearch(values, target, mid, end);
    else if (values[mid] === target) return mid;
}

module.exports = binarySearch;