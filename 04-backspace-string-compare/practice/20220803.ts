function backspaceCompare(s: string, t: string): boolean {
    const cleanString = (str: string): string => {
        const charStack: string[] =  [];

        for (let i = 0; i < str.length; ++i) {
            if (str[i] !== '#') {
                charStack.push(str[i]);
            } else if (charStack.length) {
                charStack.pop();
            }
        }

        return charStack.toString();
    }

    return cleanString(s) === cleanString(t);
};