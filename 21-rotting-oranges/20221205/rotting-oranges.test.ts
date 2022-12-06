import orangesRotting from './rotting-oranges-ts';

const testCases: TestCase[] = [
    { expected: 4, grid: [[2, 1, 1], [1, 1, 0], [0, 1, 1]] },
    { expected: -1, grid: [[2, 1, 1], [0, 1, 1], [1, 0, 1]] },
    { expected: 0, grid: [[0, 2]] }
];

testCases.forEach((testCase, index) => {
    it(`orangesRotting(testCase[${index}])`, () => {
        expect(testCase.expected).toEqual(orangesRotting(testCase.grid));
    })
})

type TestCase = {
    expected: number;
    grid: number[][];
}