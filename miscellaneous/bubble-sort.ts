function bubbleSort(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length; ++i) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j+1]) {
                let temp: number = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }

    return numbers;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
bubbleSort(numbers);
console.log(numbers);