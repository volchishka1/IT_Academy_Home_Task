const vowelsInput = prompt("Введите данные").split("")



const arrVowels = ["а", "е", "и", "ы", "у", "э", "ю", "я",]

const getVowels = vowelsInput.filter(v => {
    return arrVowels.indexOf(v) !== -1 
})



console.log(getVowels)

