const expect = chai.expect;

describe('checkBrackets', () => {
    it('should return -1 when brackets are not properly matched with mixed characters and numbers', () => {
        expect(checkBrackets('(1[2{3}4)')).to.equal(-1);
        expect(checkBrackets('(a[b{c}d]e)f)')).to.equal(-1);
        expect(checkBrackets('(x[y{z}w]v')).to.equal(-1);
        expect(checkBrackets('(a[b{c(d[e]f)g}h]i')).to.equal(-1);
        expect(checkBrackets('((1[2{3}4]5')).to.equal(-1);
    });

    it('should return -1 when input is a boolean', () => {
        expect(checkBrackets(true)).to.equal(-1);
        expect(checkBrackets(false)).to.equal(-1);
    });

    it('should return -1 for invalid input', () => {
        expect(checkBrackets(123)).to.equal(-1);
        expect(checkBrackets(['()'])).to.equal(-1);
        expect(checkBrackets('')).to.equal(-1);
        expect(checkBrackets('no brackets')).to.equal(-1);
        expect(checkBrackets('(missing closing')).to.equal(-1);
    });

    it('should return -1 when no brackets are present', () => {
        expect(checkBrackets('abc')).to.equal(-1);
        expect(checkBrackets('123')).to.equal(-1);
        expect(checkBrackets('')).to.equal(-1);
    });

    it('should return -1 when input is not a string', () => {
        expect(checkBrackets(123)).to.equal(-1);
        expect(checkBrackets(['()'])).to.equal(-1);
        expect(checkBrackets({ brackets: '()' })).to.equal(-1);
        expect(checkBrackets(null)).to.equal(-1);
        expect(checkBrackets(undefined)).to.equal(-1);
    });

    it('should return 0 when brackets are properly matched', () => {
        expect(checkBrackets('()')).to.equal(0);
        expect(checkBrackets('()()')).to.equal(0);
        expect(checkBrackets('(())')).to.equal(0);
        expect(checkBrackets('(()())')).to.equal(0);
        expect(checkBrackets('((((()))))')).to.equal(0);
    });

    it('should handle complex bracket patterns correctly', () => {
        expect(checkBrackets('((()(())))')).to.equal(0);
        expect(checkBrackets('((()()')).to.equal(2);
        expect(checkBrackets('(((((())))))')).to.equal(0);
        expect(checkBrackets('(((()))))')).to.equal(1);
        expect(checkBrackets('(()()(()(())))')).to.equal(0);
    });

    it('should return 0 when input has nested brackets', () => {
        expect(checkBrackets('(())')).to.equal(0);
        expect(checkBrackets('(()())')).to.equal(0);
        expect(checkBrackets('((()))')).to.equal(0);
    });

    it('should return -1 when input is a number', () => {
        expect(checkBrackets(42)).to.equal(-1);
        expect(checkBrackets(3.14)).to.equal(-1);
    });

    it('should return -1 when input is an object', () => {
        expect(checkBrackets({})).to.equal(-1);
        expect(checkBrackets({ brackets: '()' })).to.equal(-1);
    });

    it('should return -1 when input is an array of numbers', () => {
        expect(checkBrackets([1, 2, 3])).to.equal(-1);
        expect(checkBrackets([4, 5, 6])).to.equal(-1);
    });

    it('should return -1 when input is null or undefined', () => {
        expect(checkBrackets(null)).to.equal(-1);
        expect(checkBrackets(undefined)).to.equal(-1);
    });

    it('should handle edge case with a large number of brackets', () => {
        const input = '('.repeat(10000) + ')'.repeat(10000);
        expect(checkBrackets(input)).to.equal(0);
    });

    it('should return 0 when input has properly matched brackets with nested brackets', () => {
        expect(checkBrackets('(())')).to.equal(0);
        expect(checkBrackets('(()())')).to.equal(0);
        expect(checkBrackets('((()))')).to.equal(0);
        expect(checkBrackets('(()(()))')).to.equal(0);
        expect(checkBrackets('((((()))))')).to.equal(0);
    });

    it('should return 0 when input has brackets with different depths', () => {
        expect(checkBrackets('()((()))')).to.equal(0);
        expect(checkBrackets('((({})))[()]')).to.equal(0);
        expect(checkBrackets('({}())()')).to.equal(0);
        expect(checkBrackets('[({}())]')).to.equal(0);
        expect(checkBrackets('{({()})[]}')).to.equal(0);
    });
});
