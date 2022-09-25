const isPalindrome = require('./20220923');
const isPalindrome2 = require('./20220925');

const input = [
    ['madam', true],
    ['Ma da-m', true],
    ['madman', false]
];

describe('Is a valid palindrome', () => {
    input.forEach(pair => {
        it(`Checks if ${pair[0]} is a valid palindrome?`, () => {
            expect(isPalindrome(pair[0])).toEqual(pair[1]);
        })

        it(`Checks if ${pair[0]} is a valid palindrome2?`, () => {
            expect(isPalindrome2(pair[0])).toEqual(pair[1]);
        })
    });
})