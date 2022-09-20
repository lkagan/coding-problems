const backspaceCompare = require('./20220919-2pointers');

const testCases = [
    ['ab#c', 'ac', true],
    ['ab#c', 'abc', false],
    ['', 'a#b#c#', true]
]
describe('Two strings are equal', () => {
    testCases.forEach(test => {
        it(`${test[0]} and ${test[1]} should be ${test[2]}`, () => {
            expect(backspaceCompare(test[0], test[1])).toBe(test[2]);
        });
    });
});