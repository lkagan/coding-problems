from re import sub

class Solution:
    def validPalindrome(self, s: str) -> bool:
        s = sub("[^a-zA-Z0-9]", '', s.lower())
        left = 0
        right = len(s) - 1

        while (left < right):
            if s[left] != s[right]:
                return self.purePalindrome(s, left+1, right) or \
                    self.purePalindrome(s, left, right-1)

            left += 1
            right -= 1

        return True

    def purePalindrome(self, s: str, left: int, right: int) -> bool:
        while left < right:
            if s[left] != s[right]:
                return False

            left += 1
            right -= 1

        return True


print(Solution().validPalindrome('abca') == True)