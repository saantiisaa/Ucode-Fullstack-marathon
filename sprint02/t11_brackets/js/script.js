function checkBrackets(str) {
    if (typeof str !== 'string' || !/\(\)/.test(str)) {
        return -1;
    }

    let stack = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        } else if (str[i] === ')') {
            if (stack.length === 0) {
                count++;
            } else {
                stack.pop();
            }
        }
    }

    return count + stack.length;
}

// console.log(checkBrackets('1)()(())2(()')); // 2
// console.log(checkBrackets(NaN)); // -1