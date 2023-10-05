module.exports = class StrFrequency {
    constructor(string) {
        this.string = string;
    }

    letterFrequencies() {
        let letterFrequency = {};
        let temp = this.string.toUpperCase().split('').filter(c => c.match(/[A-Z]/g));
        temp = temp.join('');
        for (let i = 0; i < temp.length; i++) {
            let symbol = temp.charAt(i);
            if (letterFrequency[symbol])
                letterFrequency[symbol]++;
            else letterFrequency[symbol] = 1;
        }
        if (!this.string)
            return "";
        return letterFrequency;
    }
    wordFrequencies() {
        if (this.string === "")
            return { "": 1 };
        return this.string.split(/\b/).reduce((frequency, x) => {
            x = x.toUpperCase();
            if (!x.match(/[A-Z]/))
                return frequency;
            if (frequency.hasOwnProperty(x))
                frequency[x] += 1;
            else
                frequency[x] = 1;
            return frequency;
        }, {});
    }
    reverseString() {
        return this.string.split("").reverse().join("");
    }
}