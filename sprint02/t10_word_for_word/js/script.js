function addWords(obj, wrds) {
    let words = obj.words.split(' ').filter(word => word !== '');
    let newWrds = wrds.split(' ').filter(word => word !== '');
    let combinedWrds = [...new Set([...words, ...newWrds])];
    obj.words = combinedWrds.join(' ');
}

function removeWords(obj, wrds) {
    let words = obj.words.split(' ').filter(word => word !== '');
    let newWrds = wrds.split(' ').filter(word => word !== '');
    let filteredArr = words.filter(word => !newWrds.includes(word));
    obj.words = filteredArr.join(' ');
}

function changeWords(obj, oldWrds, newWrds) {
    let wordsArr = obj.words.split(' ').filter(word => word.trim() !== '');
    let oldWords = oldWrds.split(' ').filter(word => word.trim() !== '');
    let newWords = newWrds.split(' ').filter(word => word.trim() !== '');

    for (let i = 0; i < oldWords.length; i++) {
        let oldWord = oldWords[i];
        let index = wordsArr.indexOf(oldWord);
        if (index !== -1) {
            wordsArr.splice(index, 1);
        }
    }

    for (let i = 0; i < newWords.length; i++) {
        let newWord = newWords[i];
        wordsArr.push(newWord);
    }

    obj.words = wordsArr.join(' ');
    return obj;
}

// const obj = {
//     words: 'newspapers newspapers  books magazines'
// };
// console.log(obj); // {words: "newspapers newspapers  books magazines"}
// addWords(obj, 'radio newspapers');
// console.log(obj); // {words: "newspapers books magazines radio"}
// removeWords(obj, 'newspapers   radio');
// console.log(obj); // {words: "books magazines"}
// changeWords(obj, 'books radio  magazines', 'tv internet');
// console.log(obj); // {words: "tv internet"}