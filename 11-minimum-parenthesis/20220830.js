var minRemoveToMakeValid = function(s) {
    s = s.split('');
    const unmatchedLeft = [];
    let position;

    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '(') {
            // Remember the position
            unmatchedLeft.push(i);
        } else if (s[i] === ')') {
            if (unmatchedLeft.length === 0) {
                // If no left parentheses, remove this right parenthesis.
                s.splice(i, 1);
                --i;
            } else {
                // Remove a left parenthesis from the stack since we have a match.
                unmatchedLeft.pop();
            }
        }
    }

    // Remove any unmatched left parenthesis
    while((position = unmatchedLeft.pop()) !== undefined) {
        s.splice(position, 1);
    }

    return s.join('');
}

console.log(minRemoveToMakeValid('(b))'));
console.log(minRemoveToMakeValid('))(('));
