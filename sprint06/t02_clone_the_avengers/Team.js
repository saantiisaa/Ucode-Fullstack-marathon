class Team {
    constructor(id, avengers) {
        this.id = id;
        this.avengers = avengers;
    }

    clone() {
        const clonedAvengers = JSON.parse(JSON.stringify(this.avengers))
        return new Team(this.id, clonedAvengers)
    }

    battle(damage) {
        for (let avenger = this.avengers.length - 1; avenger >= 0; avenger--) {
            this.avengers[avenger].hp -= damage.damage
            if (this.avengers[avenger].hp <= 0) {
                this.avengers.splice(avenger, 1)
            }
        }}

    calculateLosses(clonedTeam) {
        const beforeBattle = clonedTeam.avengers
        const losses = clonedTeam.avengers.length - this.avengers.length
        if (losses === 0) {
            console.log("We haven't lost anyone in this battle!")
        }
        else {
            console.log(`In this battle we lost ${losses} Avengers.`)
        }
    }
}

module.exports = { Team }
