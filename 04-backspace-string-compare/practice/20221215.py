class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:

        def clean_string(string: str) -> str:
            char_stack = []

            for i in range(len(string)):
                if string[i] != '#':
                    char_stack.append(string[i])
                elif len(char_stack) >= 1:
                    char_stack.pop()

            return ''.join(char_stack)

        return clean_string(s) == clean_string(t)

Solution().backspaceCompare('a##c', '#a#c')