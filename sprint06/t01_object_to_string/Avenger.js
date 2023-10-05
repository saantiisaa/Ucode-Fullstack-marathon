class Avenger {
    constructor({ name, alias, gender, age, powers }) {
        this.name = name;
        this.alias = alias;
        this.gender = gender;
        this.age = age;
        this.powers = powers;
    }

    introduce() {
        return `name: ${this.name}\ngender: ${this.gender}\nage: ${this.age}`;
    }

    invokePowers() {
        return this.powers.join('\n');
    }

    toString() {
        return this.introduce();
    }

    call() {
        return `${this.alias.toUpperCase()}\n${this.invokePowers()}`;
    }
}

function avenger(properties) {
    const avengerInstance = new Avenger(properties);

    const avengerCall = function () {
        return avengerInstance.call();
    }

    avengerCall.toString = function () {
        return avengerInstance.toString();
    }

    return avengerCall;
}

module.exports = { Avenger: avenger };
