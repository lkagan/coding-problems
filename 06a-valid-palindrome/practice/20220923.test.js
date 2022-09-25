const isPalindrome = require('./20220923');

const input = [
    ['madam', true],
    ['Ma da-m', true],
    ['madman', false]
];

describe('Is a valid palindrom', () => {
    input.forEach(pair => {
        it(`Checks if ${pair[0]} is a valid palindrome?`, () => {
            expect(isPalindrome(pair[0])).toEqual(pair[1]);
        })
    })
})