const vowelsInput = prompt("Введите данные").split("")


const arrVowels = ["а", "е", "и", "ы", "у", "э", "ю", "я",]

let getVowels = vowelsInput.reduce((prev, current) => {
    return arrVowels.indexOf(current) !== -1 ? prev += current : prev += ""
}, "")

console.log(getVowels)