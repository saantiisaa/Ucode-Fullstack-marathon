let beginRange = prompt('Enter the beginning number');
let endRange = prompt('Enter the end number');
let description = " -";
let numRegex = RegExp('^[1-9]+[0-9]*$');

function checkDivision(beginRange, endRange) {
    if (!numRegex.test(beginRange) || !numRegex.test(endRange)
        || beginRange >= endRange) {
        beginRange = 1;
        endRange = 100;
    }

    for (let i = beginRange; i <= endRange; i++) {
        if (i % 2 === 0) {
            description = " is even";
        }
        if (i % 3 === 0) {
            if (description.match(" is even")) {
                description += ", ";
            } else {
                description = " is ";
            }
            description += "a multiple of 3";
        }
        if (i % 10 === 0) {
            description += ", a multiple of 10";
        }
        console.log(i + description);
        description = " -";
    }
}

checkDivision(beginRange, endRange);