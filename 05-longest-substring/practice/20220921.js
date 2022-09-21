function lengthOfLongestSubstring(s) {
    let longest = 0;

    for (let left = 0; left < s.length; left++) {
        let length = 0;
        const seen = new Set();

        for (let right = left; right < s.length; right++) {
            if (seen.has(s[right])) {
                break;
            }

            seen.add(s[right]);
            longest = Math.max(longest, ++length);
        }
    }

    return longest;
}

module.exports = lengthOfLongestSubstring;