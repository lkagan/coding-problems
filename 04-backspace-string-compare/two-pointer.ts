const getNextPointer = (current: number, str: string): number => {
    let hasCount = 0;
    let nextPointer = current - 1;

    while (str[nextPointer] === '#' && nextPointer !== 0) {
        hasCount++;
        nextPointer--;
    }

    return nextPointer - hasCount;
}

const stringsAreEqual = (s: string, t: string): boolean => {
    let ps = s.length;
    let pt = t.length;

    do {
        if (s[ps] !== t[pt]) {
            return false;
        }

        ps = getNextPointer(ps, s);
        pt = getNextPointer(pt, t);

    } while (ps >= 0 && pt >= 0);

    return true;
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