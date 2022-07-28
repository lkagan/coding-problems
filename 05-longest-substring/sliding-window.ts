function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    const seen = {};
    let left = 0;

    for (let right = 0; right < s.length; ++right) {
        let currentLetter = s[right];

        if(seen[currentLetter] >= left) {
            left = seen[currentLetter] + 1;
        }

        longest = Math.max(longest, right - left + 1);
        seen[currentLetter] = right;
    }

    return longest;
}
