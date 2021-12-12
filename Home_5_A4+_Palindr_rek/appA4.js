let question = prompt("Введите палиндром ").replace(/[^\w]/gi, '').toLowerCase()

function palindromRec(letters) {

    var characters  = letters.split(''),
        firstLetter = characters.shift(),
        lastLetter  = characters.pop();

    if (firstLetter !== lastLetter) {
        return false;
    }

    if (characters.length < 2) {
        return true;
    }

    return palindromRec(characters.join(''));

}

console.log(palindromRec(question))