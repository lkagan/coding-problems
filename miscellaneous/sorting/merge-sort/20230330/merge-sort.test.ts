import mergeSort from './merge-sort-ts';

const testData = [
    [],
    [2],
    [2, 1],
    [99, 44, 6, 2],
    [1, 2, 3, 4, 5, 6, 9, 100],
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
];

describe('Sorts using merge sort', () => {
    testData.forEach(nums => {
        it(`sorts [${nums}]`, () => {
            expect(mergeSort([...nums])).toEqual([...nums].sort((a,b) => a - b));
        })
    })
})