function validPalindrome(s: string): boolean {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPurePalindrome(s, left+1, right)
                || isPurePalindrome(s, left, right - 1);
        }

        left++;
        right--;
    }

    return true;
};

function isPurePalindrome (s: string, left: number, right: number): boolean {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}