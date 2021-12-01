let vowelsInput = prompt("Введите данные: ")


const vowelsCounter = (countVowels) => {
    var countVowels = {
        "а": 0,
        "е": 0,
        "и": 0,
        "о": 0,
        "ы": 0,
        "у": 0,
        "э": 0,
        "ю": 0,
        "я": 0
    };
    let getVowels = {}
    for (var i = 0; i < vowelsInput.length; i++) {
        var vowel = vowelsInput[i].toLowerCase();
        if (vowel in countVowels)
        countVowels[vowel]++;
    }

    for (const [k, v] of Object.entries(countVowels)) {
        if (v > 0) {
            getVowels[k] = v
        }
    }   

    return (getVowels)
}

console.log(vowelsCounter(vowelsInput))