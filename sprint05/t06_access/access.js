module.exports = class Access {
    constructor(mark) { this.mark_LXXXV = mark; }
    get mark_LXXXV() {
        if(this._mark_LXXXV === undefined) return 'undefined';
        if(this._mark_LXXXV === null) return 'null';

        return this._mark_LXXXV;
    }
    set mark_LXXXV(mark) { this._mark_LXXXV = mark; }
}
