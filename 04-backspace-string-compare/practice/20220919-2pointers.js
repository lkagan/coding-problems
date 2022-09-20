function backspaceCompare(s, t) {
    let sHashes = 0, tHashes = 0;
    let sPointer = s.length - 1;
    let tPointer = t.length - 1;

    while (sPointer >= 0 || tPointer >= 0) {
        let sChar = null, tChar = null;

        // get next s char
        while (sPointer >= 0) {
           if (s[sPointer] === '#') {
               sHashes++;
               sPointer--;
           } else if (sHashes) {
               sHashes--;
               sPointer--;
           } else {
               sChar = s[sPointer];
               sPointer--;
               break;
           }
        }

        while (tPointer >= 0) {
            if (t[tPointer] === '#') {
                tHashes++;
                tPointer--;
            } else if (tHashes) {
                tHashes--;
                tPointer--;
            } else {
                tChar = t[tPointer];
                tPointer--;
                break;
            }
        }

        if (tChar !== sChar) {
            return false;
        }
    }

    return true;
}

module.exports = backspaceCompare;