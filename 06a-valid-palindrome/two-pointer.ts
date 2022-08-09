function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let leftP = 0;
    let rightP = s.length - 1;

    while (leftP < rightP) {
        if (s[leftP] !== s[rightP]) {
            return false;
        }

        leftP++;
        rightP--;
    }

    return true;
};
