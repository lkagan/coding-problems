function isPalindrome(s) {
    const filtered = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = filtered.split('').reverse().join('');
    return filtered === reversed;
}

module.exports = isPalindrome;