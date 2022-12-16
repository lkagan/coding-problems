class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        longest = 0
        left = 0
        seen = {}

        for right in range(len(s)):
            if s[right] in seen and seen[s[right]] >= left:
                left = seen[s[right]] + 1

            longest = max(right - left + 1, longest)
            seen[s[right]] = right

        return longest

Solution().lengthOfLongestSubstring("abcabcbb")