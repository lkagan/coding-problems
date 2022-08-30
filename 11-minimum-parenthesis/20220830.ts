function minRemoveToMakeValid(s: string): string {
    const chars: string[] = s.split('');
    const unmatchedLeft: number[] = [];
    let position: number;

    for (let i = 0; i < chars.length; ++i) {
        if (chars[i] === '(') {
            // Remember the position
            unmatchedLeft.push(i);
        } else if (chars[i] === ')') {
            if (unmatchedLeft.length === 0) {
                // If no left parentheses, remove this right parenthesis.
                chars.splice(i, 1);
                --i;
            } else {
                // Remove a left parenthesis from the stack since we have a match.
                unmatchedLeft.pop();
            }
        }
    }

    // Remove any unmatched left parenthesis
    while((position = unmatchedLeft.pop()) !== undefined) {
        chars.splice(position, 1);
    }

    return chars.join('');
}
