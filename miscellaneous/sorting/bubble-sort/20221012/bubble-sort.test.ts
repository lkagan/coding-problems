import bubbleSort from './bubble-sort-ts';

const testCases = [
    [],
    [1],
    [2, 1],
    [3, 1, 11, 6, 2, 4, 5],
];

testCases.forEach(testCase => {
    test(`bubbleSort([${testCase}])`, () => {
        expect(bubbleSort(testCase)).toEqual([...testCase].sort((a,b) => a - b));
    })
})
