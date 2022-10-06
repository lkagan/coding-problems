const findKthLargest = require('./20221004');

const args = [
    {
        nums: [4, 6, 1],
        k: 2,
        result: 4
    },
    {
        nums: [],
        k: 0,
        result: null
    },
    {
        nums: [1],
        k: 1,
        result: 1
    },
    {
        nums: [3,2,3,1,2,4,5,5,6],
        k: 4,
        result: 4
    }
];

describe('Gets the kth largest number', () => {
    args.forEach(arg => {
        it(`Returns ${arg.k} largest number from ` + JSON.stringify(arg.nums), () => {
            expect(findKthLargest(arg.nums, arg.k)).toBe(arg.result);
        })
    })
});