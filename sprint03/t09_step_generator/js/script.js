function* numberGenerator() {
    let previousResult = 1;
    while (true) {
        const userInput = prompt(`Previous result: ${previousResult}. Enter a new number:`);
        if (userInput === null) {
            break;
        }
        const number = Number(userInput);
        if (isNaN(number)) {
            console.error('Invalid number!');
        } else {
            previousResult += number;
            if (previousResult > 10000) {
                previousResult = 1;
            }
            yield previousResult;
        }
    }
}

const generator = numberGenerator();
while (true) {
    const result = generator.next().value;
    console.log(`Previous result: ${result}`);
    if (result === undefined) {
        break;
    }
}
