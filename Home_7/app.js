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

    for (var i = 0; i < vowelsInput.length; i++) {
        var vowel = vowelsInput[i].toLowerCase();
        if (vowel in countVowels)
        countVowels[vowel]++;
    }
    return (countVowels)
}

console.log(vowelsCounter(vowelsInput))