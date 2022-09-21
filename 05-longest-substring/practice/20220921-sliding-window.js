function lengthOfLongestSubstring(s) {
    let longest = 0;
    let left = 0;
    let seen = {};

    for (let right = left; right < s.length; right++) {
        if (seen[s[right]] >= left) {
            left = seen[s[right]] + 1;
        }

        longest = Math.max(right - left + 1, longest);
        seen[s[right]] = right;
    }

    return longest;
}

module.exports = lengthOfLongestSubstring;