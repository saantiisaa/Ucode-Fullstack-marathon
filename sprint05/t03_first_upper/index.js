function firstUpper(string) {
    if (!string && string !== "") return "";
    string = string ? string.trim().toLowerCase() : "";
    string = string.charAt(0).toUpperCase() + string.slice(1, string.length);
    return string;
}


module.exports = {
    firstUpper
}