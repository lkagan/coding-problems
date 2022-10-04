const insertionSort = require('./20221004');

const args = [
    [],
    [1],
    [1,0,2,9,7]
];

describe('Sorts arrays', () => {
    args.forEach(nums => {
        it('Sorts ' + JSON.stringify(nums), () => {
            expect(insertionSort(nums)).toEqual(nums.sort((a, b) => a - b));
        })
    })
})