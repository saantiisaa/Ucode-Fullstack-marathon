class EatException extends Error {
    constructor(food, meal_type) {
        super(`Too many calories in ${food} for ${meal_type}`)
        this.name = 'EatException'
    }
}

module.exports = {EatException}