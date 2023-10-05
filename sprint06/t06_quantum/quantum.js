function calculateTime() {
    const startDate = new Date(1939, 0, 1);
    const currentDate = new Date();

    const timeDiff = currentDate - startDate;

    const quantumYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365 * 7));
    const quantumMonths = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365 * 7)) / (1000 * 60 * 60 * 24 * 30.44));
    const quantumDays = Math.floor(((timeDiff % (1000 * 60 * 60 * 24 * 365 * 7)) % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

    return [quantumYears, quantumMonths, quantumDays];
}

module.exports = { calculateTime };
