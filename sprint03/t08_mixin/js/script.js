const houseMixin = {
    wordReplace(oldWord, newWord) {
        this.description = this.description.replace(oldWord, newWord);
    },

    wordInsertAfter(existingWord, newWord) {
        const words = this.description.split(' ');
        const index = words.findIndex(word => word === existingWord);
        if (index !== -1) {
            words.splice(index + 1, 0, newWord);
            this.description = words.join(' ');
        }
    },

    wordDelete(word){
        this.wordReplace(word, '');
    },

    wordEncrypt() {
        this.description = rot13(this.description);
    },

    wordDecrypt() {
        this.description = rot13(this.description);
    }
};

function rot13(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shiftedAlphabet = 'nopqrstuvwxyzabcdefghijklm';
    const cipherMap = {};

    for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        const shiftedLetter = shiftedAlphabet[i];
        cipherMap[letter] = shiftedLetter;
        cipherMap[letter.toUpperCase()] = shiftedLetter.toUpperCase();
    }

    return text.replace(/[a-z]/gi, letter => cipherMap[letter] || letter);
}

// const house = new HouseBuilder('88 Crescent Avenue',
//     'Spacious town house with wood flooring, 2-car garage, and a back patio.',
//     'J. Smith', 110, 5);
//
// Object.assign(house, houseMixin);
//
// console.log(house.getDaysToBuild());
// // 220
// console.log(house.description);
// // Spacious town house with wood flooring, 2-car garage, and a back patio.
//
// house.wordReplace("wood", "tile");
// console.log(house.description);
// // Spacious town house with tile flooring, 2-car garage, and a back patio.
//
// house.wordDelete("town ");
// console.log(house.description);
// // Spacious house with tile flooring, 2-car garage, and a back patio.
//
// house.wordInsertAfter ("with", "marble");
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.
//
// house.wordEncrypt();
// console.log(house.description);
// // Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
//
// house.wordDecrypt();
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.