function backspaceCompare(s, t) {
    return cleanString(s) === cleanString(t);
}

function cleanString(s) {
    const stack = [];

    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== '#') {
            stack.push(s[i]);
        } else if (stack.length) {
            stack.pop();
        }
    }

    return stack.join('');
}