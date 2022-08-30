class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        s = list(s)
        unmatchedLeft = []

        for i in range(len(s) - 1):
            print(len(s) - 1)
            if s[i] == '(':
                unmatchedLeft.append(i)
            elif s[i] == ')':
                if len(unmatchedLeft) == 0:
                    del s[i]
                    i = i - 1
                else:
                    unmatchedLeft.pop()

        while len(unmatchedLeft):
            position = unmatchedLeft.pop()
            del s[position]

        return ''.join(s)


print(Solution().minRemoveToMakeValid('a(b)c)'))
