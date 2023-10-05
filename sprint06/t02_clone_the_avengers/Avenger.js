class Avenger {
    constructor(name, alias, gender, age, powers, hp) {
        this.name = name
        this.alias = alias
        this.gender = gender
        this.age = age
        this.powers = powers
        this.hp = hp
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

module.exports = { Avenger }
