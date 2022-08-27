function isValid(s: string): boolean {
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // @ts-ignore
    const left = new Set(Object.values(pairs));
    const unmatched: string[] = [];

    for (let i = 0; i < s.length; ++i) {
        const c = s[i];

        if (left.has(c)) {
            unmatched.push(c);
        } else if (unmatched.pop() !== pairs[c]) {
            return false;
        }
    }

    return unmatched.length === 0;
}
