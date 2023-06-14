function time(hourOrMin) {
    return String(hourOrMin).length === 1 ? '0' + hourOrMin : hourOrMin;
}
function date(dayOrMonth) {
    return String(dayOrMonth).length === 1 ? '0' + dayOrMonth : dayOrMonth;
}

function getFormattedDate(dateObject) {
    let data = {
        day: dateObject.getDate(),
        month: dateObject.getMonth() + 1,
        year: dateObject.getFullYear(),
        hours: dateObject.getHours(),
        minutes: dateObject.getMinutes(),
        weekday: dateObject.toLocaleString("en-US", {weekday: 'long'})
    }
    return `${date(data.day)}.${date(data.month)}.${data.year} ${time(data.hours)}:${time(data.minutes)} ${data.weekday}`;
}

// const date0 = new Date(1993, 11, 1);
// const date1 = new Date(1998, 0, -33);
// const date2 = new Date('42 03:24:00');
//
// console.log(getFormattedDate(date0)); // Output: 01.12.1993 00:00 Wednesday
// console.log(getFormattedDate(date1)); // Output: 28.11.1997 00:00 Friday
// console.log(getFormattedDate(date2)); // Output: 01.01.2042 03:24 Wednesday
