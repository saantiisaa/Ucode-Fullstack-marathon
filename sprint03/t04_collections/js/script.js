const guestList = {
    guests: ["Alice", "Bob", "Charlie", "David", "Eve"],
    checkName(name) {
        return this.guests.includes(name);
    },
    removeName(name) {
        const index = this.guests.indexOf(name);
        if (index !== -1) {
            this.guests.splice(index, 1);
        }
    },
};

const menu = {
    dishes: {
        pizza: 10,
        burger: 8,
        salad: 6,
        pasta: 12,
        dessert: 5,
    },
    listDishes() {
        for (const dish in this.dishes) {
            console.log(`${dish}: $${this.dishes[dish]}`);
        }
    },
};

const bankVault = {
    boxes: {
        box1: { credentials: "abc123", contents: "Jewelry" },
        box2: { credentials: "xyz789", contents: "Documents" },
        box3: { credentials: "123abc", contents: "Cash" },
    },
    viewContents(credentials) {
        for (const box in this.boxes) {
            if (this.boxes[box].credentials === credentials) {
                return this.boxes[box].contents;
            }
        }
        return "Invalid credentials";
    },
};

const coinCollection = {
    coins: ["Penny", "Nickel", "Dime", "Quarter", "Half Dollar"],
    viewCollection() {
        console.log(this.coins);
    },
};

// //// Test cases ////
//
// // guestList //
//
// console.log(guestList.guests);
// // ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
// console.log(guestList.checkName("Alice"));
// // true
// console.log(guestList.checkName("Frank"));
// // false
// guestList.removeName("Bob");
// console.log(guestList.guests);
// // ['Alice', 'Charlie', 'David', 'Eve']
//
// // menu //
//
// menu.listDishes();
// // pizza: $10
// // burger: $8
// // salad: $6
// // pasta: $12
// // dessert: $5
// menu.dishes["soup"] = 7;
// delete menu.dishes["dessert"];
// menu.listDishes();
// // pizza: $10
// // burger: $8
// // salad: $6
// // pasta: $12
// // soup: $7
//
// // bankVault //
//
// console.log(bankVault.viewContents("abc123"));
// // Jewelry
// console.log(bankVault.viewContents("invalid"));
// // Invalid credentials
//
// // coinCollection //
//
// coinCollection.viewCollection();
// // ['Penny', 'Nickel', 'Dime', 'Quarter', 'Half Dollar']
// coinCollection.coins.push("Dime");
// console.log(coinCollection.coins);
// // ['Penny', 'Nickel', 'Dime', 'Quarter', 'Half Dollar', 'Dime']
// coinCollection.coins.splice(2, 1);
// console.log(coinCollection.coins);
// // ['Penny', 'Nickel', 'Quarter', 'Half Dollar', 'Dime']
// console.log(coinCollection.coins.length);
// // 5