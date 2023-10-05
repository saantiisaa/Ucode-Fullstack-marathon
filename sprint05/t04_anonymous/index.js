const anonymousClass = class {
    #name;
    #alias;
    #affiliation;
    constructor(name, alias, affiliation) {
        this.#name = name;
        this.#alias = alias;
        this.#affiliation = affiliation;
    }
    get name() { return this.#name };
    get alias() { return this.#alias };
    get affiliation() { return this.#affiliation };
}

function getAnonymous(name, alias, affiliation) {
    return new anonymousClass(name, alias, affiliation);
}

module.exports = {
    getAnonymous
}