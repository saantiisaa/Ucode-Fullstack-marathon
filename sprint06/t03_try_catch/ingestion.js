const {EatException} = require("./eat-exception")

class Ingestion {
    products = []
    constructor(meal_type, id, day_of_diet) {
        this.id = id
        this.meal_type = meal_type

        this.day_of_diet = day_of_diet;
    }

    setProduct(product) {
        this.products.push(product)
    }

    getProductInfo(product) {
        return this.products.find(food => food.name === product)
    }

    getFromFridge(product) {
        let food = this.products.find(food => food.name === product)
        if (food.kcal > 200) {
            throw new EatException(food.name, this.meal_type)
        }
    }
}

module.exports = {Ingestion}