const vowelsInput = prompt("Введите данные").split("")



const arrVowels = ["а", "е", "и", "ы", "у", "э", "ю", "я",]

const getVowels = {}

vowelsInput.forEach(v => {
    if (arrVowels.indexOf(v) !== -1) {
        getVowels[v] = typeof getVowels[v] === "undefined" ? 1 : ++getVowels[v]  
    }
})

console.log(getVowels)
