var lengthOfLongestSubstring = function(s:string): number {
    let longest = 0;

    for (let i = 0; i < s.length; ++i) {
        const letterTocompare:string = s[i];
        let currentLength = 0;
        const seen = {};

        for (let j = i; j < s.length; ++j) {
            if (!seen[s[j]]) {
                seen[s[j]] = true;
                ++currentLength;
            } else {
                break;
            }
        }

        longest = Math.max(longest, currentLength);
    }

    return longest;
};

