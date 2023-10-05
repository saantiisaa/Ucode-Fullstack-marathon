function checkDivision(start = 1, end = 60) {
    for (let i = start; i <= end; i++) {
        let text = ' - '
        if (i % 2 === 0)
            text = ' is divisible by 2'
        if (i % 3 === 0 && i % 2 !== 0)
            text = ' is divisible by 3'
        else if (i % 3 === 0)
            text = text.concat(', is divisible by 3')
        if (i % 10 === 0)
            text = text.concat(', is divisible by 10')
        console.log('The number ' + i + text)
    }
}

module.exports = {
    checkDivision
}