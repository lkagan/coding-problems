function backspaceCompare(s: string, t: string): boolean {
    return cleanString(s) === cleanString(t);
}

function cleanString(s: string): string {
    const stack: string[] = [];

    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== '#') {
            stack.push(s[i]);
        } else if (stack.length) {
            stack.pop();
        }
    }

    return stack.toString();
}