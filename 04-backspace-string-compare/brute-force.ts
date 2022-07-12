const stringsAreEqual = (s: string, t: string): boolean => {
    return cleanString(s) === cleanString(t);
}

const cleanString = (str: string): string => {
    const letters: string[] = [];

    for (let i = 0; i < str.length; ++i) {
        str[i] !== '#' ? letters.push(str[i]) : letters.pop();
    }

    return letters.toString();
}

const testCases = [
    { string1: "ab#z", string2: "az#z", result: true },
    { string1: "ab#d", string2: "acc#c", result: false },
    { string1: "x#y#z#", string2: "a#", result: true },
    { string1: "a###b", string2: "b", result: true },
    { string1: "Ab#z", string2: "ab#z", result: false },
];

for (const test of testCases) {
    console.log(stringsAreEqual(test.string1, test.string2) === test.result ? 'pass' : 'fail');
}