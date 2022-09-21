const lengthOfLongestSubstring = require('./20220921');

describe('Longest substring', () => {
    const tests = {
        '': 0,
        'a': 1,
        'aaa': 1,
        'abac': 3,
        'pwwkew': 3,
    };

    for (const test in tests) {
        it(`Expects ${test} to be ${tests[test]}`, () => {
            expect(lengthOfLongestSubstring(test)).toBe(tests[test]);
        });
    }
})