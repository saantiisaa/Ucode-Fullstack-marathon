function calculateTime() {
    const startDate = new Date(1939, 0, 1);
    const currentDate = new Date();

    const timeDiff = currentDate - startDate;
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const millisecondsInMonth = millisecondsInDay * 30.44;

    const years = Math.floor(timeDiff / (millisecondsInDay * 365));
    const months = Math.floor((timeDiff % (millisecondsInDay * 365)) / millisecondsInMonth);
    const days = Math.floor(((timeDiff % (millisecondsInDay * 365)) % millisecondsInMonth) / millisecondsInDay);

    return {
        years: () => years,
        months: () => months,
        days: () => days,
    };
}

module.exports = { calculateTime };
