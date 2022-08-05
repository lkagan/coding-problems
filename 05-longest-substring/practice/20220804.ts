function lengthOfLongestSubstring(s: string): number {
    let leftP = 0;
    let maxLength = 0;
    let seen = {};

    for (let rightP = 0; rightP < s.length; ++rightP) {
        let currentChar = s[rightP];

        if (seen[currentChar] >= leftP) {
            leftP = seen[currentChar] + 1;
        } else {
            maxLength = Math.max(maxLength, rightP - leftP + 1);
        }

        seen[currentChar] = rightP;
    }

    return maxLength;
}