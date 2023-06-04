let human;
let superhero;
let calories = 500;

(function () {
    class Human {
        constructor(firstName, lastName, gender, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
            this.age = age;
            this.calories = calories;

            this.isSleeping = false;
            this.displayProperties();
            this.displayMethods();
            this.startHungerTimer();
        }

        sleepFor(seconds) {
            const messageElement = document.getElementById("message");
            const caloriesElement = document.getElementById("calories");

            if (this.isSleeping) {
                messageElement.innerHTML = "I'm already sleeping.";
                return;
            }

            this.isSleeping = true;
            messageElement.innerHTML = "I'm sleeping";

            setTimeout(() => {
                this.isSleeping = false;
                messageElement.innerHTML = "I'm awake now!";
            }, seconds * 1000);
        }

        feed() {
            const messageElement = document.getElementById("message");
            const caloriesElement = document.getElementById("calories");

            if (calories > 500) {
                messageElement.innerHTML = "I'm not hungry.";
            } else {
                messageElement.innerHTML = "Nom nom nom";
                calories += 200;
                if (calories < 500) {
                    messageElement.innerHTML = "I'm still hungry.";
                }
            }
            caloriesElement.innerHTML = `Calories: ${calories}`;
        }

        startHungerTimer() {
            const messageElement = document.getElementById("message");
            const caloriesElement = document.getElementById("calories");

            this.hungerTimer = setInterval(() => {
                if (!this.isSleeping) {
                    calories -= 1;
                    if (calories <= 0) {
                        clearInterval(this.hungerTimer);
                        messageElement.innerHTML = "I'm dead!";
                    } else if (calories < 500) {
                        messageElement.innerHTML = "I'm hungry!";
                    }
                    caloriesElement.innerHTML = `Calories: ${calories}`;

                    if (superhero) {
                        const superheroCaloriesElement = document.getElementById("superhero-calories");
                        superheroCaloriesElement.textContent = `Calories: ${calories}`;
                    }

                    if (calories < 500 && superhero instanceof Superhero) {
                        superhero.transformToHuman();
                    }
                }
            }, 500);
        }

        transformToSuperhero() {
            if (calories > 500) {
                superhero = new Superhero(this.firstName, this.lastName, this.gender, this.age);
                document.getElementById("human-container").style.display = "none";
                document.getElementById("superhero-container").style.display = "block";
                superhero.displayProperties();
                superhero.displayMethods();
                // superhero.startHungerTimer();
            } else {
                const messageElement = document.getElementById("message");
                messageElement.innerHTML = "Not enough calories to transform into a superhero.";
            }
        }

        displayProperties() {
            const propertiesElement = document.getElementById("properties");
            propertiesElement.innerHTML = `
            <p>First Name: ${this.firstName}</p>
            <p>Last Name: ${this.lastName}</p>
            <p>Gender: ${this.gender}</p>
            <p>Age: ${this.age}</p>
            <p id="calories">Calories: ${calories}</p>
          `;
        }

        displayMethods() {
            const methodsContainer = document.getElementById("human-methods");
            methodsContainer.innerHTML = `
            <button onclick="human.sleepFor(5)">Sleep for 5 seconds</button>
            <button onclick="human.feed()">Feed</button>
            <button onclick="human.transformToSuperhero()">Turn into Superhero</button>
          `;
        }
    }

    class Superhero extends Human {
        constructor(firstName, lastName, gender, age) {
            super(firstName, lastName, gender, age);
            this.displayProperties();
        }

        transformToHuman() {
            superhero = undefined;
            document.getElementById("superhero-container").style.display = "none";
            document.getElementById("human-container").style.display = "block";
            human.displayProperties();
            human.displayMethods();
            // human.startHungerTimer();
        }

        displayProperties() {
            const firstNameElement = document.getElementById("superhero-first-name");
            const lastNameElement = document.getElementById("superhero-last-name");
            const genderElement = document.getElementById("superhero-gender");
            const ageElement = document.getElementById("superhero-age");
            const caloriesElement = document.getElementById("superhero-calories");

            firstNameElement.textContent = "Max";
            lastNameElement.textContent = "Noir";
            genderElement.textContent = this.gender;
            ageElement.textContent = this.age;
            caloriesElement.textContent = `Calories: ${calories}`;
        }

        displayMethods() {
            const methodsContainer = document.getElementById("superhero-methods");
            methodsContainer.innerHTML = `
            <button onclick="superhero.fly()">Fly</button>
            <button onclick="superhero.fightWithEvil()">Fight with Evil</button>
          `;
        }

        fly() {
            const messageElement = document.getElementById("message");
            messageElement.innerHTML = "I'm flying!";
            const superheroImage = document.getElementById("superhero-image");
            superheroImage.src = "https://img.freepik.com/free-photo/superheroe-flying_1048-1704.jpg";
            setTimeout(() => {
                messageElement.innerHTML = "";
                superheroImage.src = "https://img.freepik.com/free-photo/superheroe-ready-act_1048-1700.jpg?w=826&t=st=1684953070~exp=1684953670~hmac=3f25604e948e2a14987c42795a7f186fc8895037939e44a0181161774a95584b";
            }, 5000);
        }

        fightWithEvil() {
            const messageElement = document.getElementById("message");
            messageElement.innerHTML = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
            const superheroImage = document.getElementById("superhero-image");
            superheroImage.src = "https://img.freepik.com/free-photo/superheroe-posing_1048-1705.jpg?w=1060&t=st=1684954413~exp=1684955013~hmac=7743d557102e140be9cc7d6b8f5df7306642e89da479ddf63d320667acbae02c";
            setTimeout(() => {
                messageElement.innerHTML = "";
                superheroImage.src = "https://img.freepik.com/free-photo/superheroe-ready-act_1048-1700.jpg?w=826&t=st=1684953070~exp=1684953670~hmac=3f25604e948e2a14987c42795a7f186fc8895037939e44a0181161774a95584b";
            }, 5000);
        }
    }

    human = new Human("Jack", "Davin", "Male", 19);

    const superheroContainer = document.getElementById("superhero-container");
    superheroContainer.style.display = "none";

    const messageElement = document.getElementById("message");
    messageElement.innerHTML = "Click 'Transform to Superhero' to become a superhero.";

    const caloriesElement = document.getElementById("calories");
    caloriesElement.innerHTML = `Calories: ${calories}`;
})();
